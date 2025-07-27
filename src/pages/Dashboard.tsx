import { Sidebar } from "@/components/Sidebar";
import { ChatWindow } from "@/components/ChatWindow";

export const Dashboard = () => {
  return (
    <div className="h-screen flex bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-16 border-b border-border/50 flex items-center justify-between px-6 bg-gradient-soft">
          <div>
            <h2 className="text-lg font-semibold">Good afternoon! 🌸</h2>
            <p className="text-sm text-muted-foreground">How are you feeling today?</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-sm">😊</span>
            </div>
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="flex-1">
          <ChatWindow />
        </div>
      </div>
    </div>
  );
};