import { Bot, User } from "lucide-react";

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

export const MessageBubble = ({ message, isUser, timestamp }: MessageBubbleProps) => {
  return (
    <div className={`flex items-start gap-3 mb-6 animate-fade-in ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center shadow-card border transition-smooth ${
        isUser 
          ? 'bg-primary text-foreground border-primary/20' 
          : 'bg-card text-foreground border-border'
      }`}>
        {isUser ? <User size={18} /> : <Bot size={18} />}
      </div>
      
      <div className={`max-w-xs lg:max-w-md px-4 py-3 transition-smooth ${
        isUser ? 'chat-bubble-user' : 'chat-bubble-ai'
      }`}>
        <p className={`text-sm leading-relaxed ${
          isUser ? 'text-card-foreground' : 'text-card-foreground'
        }`}>
          {message}
        </p>
        {timestamp && (
          <p className={` text-xs mt-2 ${
            isUser ? 'text-right text-muted-foreground/70' : 'text-muted-foreground'
          }`}>
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
};