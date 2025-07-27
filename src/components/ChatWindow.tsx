import { useState, useRef, useEffect } from "react";
import { Send, Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageBubble } from "./MessageBubble";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

export const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm here to help you reflect and find clarity. What's on your mind today? 🌱",
      isUser: false,
      timestamp: "Just now"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleResetChat = () => {
      setMessages([
        {
          id: "1",
          text: "Hello! I'm here to help you reflect and find clarity. What's on your mind today? 🌱",
          isUser: false,
          timestamp: "Just now"
        }
      ]);
      setInputValue("");
      setIsLoading(false);
      setIsListening(false);
    };

    window.addEventListener('resetChat', handleResetChat);
    
    return () => {
      window.removeEventListener('resetChat', handleResetChat);
    };
  }, []);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsLoading(true);

    try {
      // Call the real LifeGuru API
      const response = await fetch('https://maferoz-lifeguru.hf.space/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: currentInput
        }),
        // Add timeout
        signal: AbortSignal.timeout(30000) // 30 second timeout
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "I apologize, but I couldn't generate a response. Please try again.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMessage]);
      
      // Show a toast if Islamic context was detected
      if (data.is_islamic) {
        toast({
          title: "Islamic Guidance Provided",
          description: `Guidance type: ${data.guidance_type || 'Spiritual'}`,
        });
      }
      
    } catch (error) {
      console.error('API Error:', error);
      
      // Fallback message on error
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble connecting right now. Please check your internet connection and try again. If the problem persists, the service might be temporarily unavailable.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Connection Error",
        description: "Unable to connect to LifeGuru. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      toast({
        title: "Voice input",
        description: "Voice input would be available in the full version",
      });
    }
  };

  return (
    <div className="flex flex-col h-full chat-bg">
      {/* Messages */}
      <div className="flex-1 p-6 overflow-y-auto space-y-2">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        
        {isLoading && (
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center shadow-warm">
              <div className="w-3 h-3 bg-primary/60 rounded-full animate-pulse" />
            </div>
            <div className="chat-bubble-ai">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-border/50 bg-gradient-to-b from-transparent to-chat-bg/80 backdrop-blur-sm">
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Share what's on your mind..."
              className="min-h-[60px] resize-none shadow-warm chat-input transition-smooth focus:shadow-glow focus:border-primary/50 text-card-foreground placeholder:text-muted-foreground"
              disabled={isLoading}
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleListening}
              className={`shadow-warm transition-smooth hover:shadow-glow border-border/70 bg-card/80 ${
                isListening ? 'bg-destructive/10 border-destructive/30' : 'hover:bg-accent/40'
              }`}
            >
              {isListening ? <MicOff size={20} /> : <Mic size={20} />}
            </Button>
            
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="shadow-warm transition-smooth hover:shadow-glow bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Send size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};