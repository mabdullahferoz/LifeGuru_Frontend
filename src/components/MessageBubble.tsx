import { Bot, User } from "lucide-react";

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

export const MessageBubble = ({ message, isUser, timestamp }: MessageBubbleProps) => {
  return (
    <div className={`flex items-start gap-3 mb-4 animate-fade-in ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-soft ${
        isUser ? 'bg-primary text-primary-foreground' : 'bg-card border'
      }`}>
        {isUser ? <User size={16} /> : <Bot size={16} />}
      </div>
      
      <div className={`max-w-xs lg:max-w-md px-4 py-3 shadow-soft transition-smooth hover:shadow-glow ${
        isUser ? 'chat-bubble-user' : 'chat-bubble-ai'
      }`}>
        <p className="text-sm leading-relaxed">{message}</p>
        {timestamp && (
          <p className="text-xs opacity-60 mt-2">
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
};