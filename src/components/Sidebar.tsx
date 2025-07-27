import { useState } from "react";
import { MessageCircle, History, Settings, LogOut, Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ReflectionSession {
  id: string;
  title: string;
  date: string;
  preview: string;
}

export const Sidebar = () => {
  const [sessions] = useState<ReflectionSession[]>([
    {
      id: "1",
      title: "Morning Clarity",
      date: "Today",
      preview: "Feeling grateful for new opportunities..."
    },
    {
      id: "2", 
      title: "Work Reflection",
      date: "Yesterday",
      preview: "Thinking about work-life balance..."
    },
    {
      id: "3",
      title: "Weekend Plans",
      date: "2 days ago", 
      preview: "Planning some self-care activities..."
    },
    {
      id: "4",
      title: "Goal Setting",
      date: "1 week ago",
      preview: "Setting intentions for the month..."
    }
  ]);

  return (
    <div className="w-80 bg-gradient-soft border-r border-border/50 flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-calm rounded-xl flex items-center justify-center shadow-soft">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-lg">LifeGuru</h1>
            <p className="text-sm text-muted-foreground">Your Reflective Assistant</p>
          </div>
        </div>
        
        <Button className="w-full shadow-soft transition-smooth hover:shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          New Reflection
        </Button>
      </div>

      {/* Sessions List */}
      <div className="flex-1 p-4">
        <h2 className="text-sm font-medium text-muted-foreground mb-3 px-2">Recent Sessions</h2>
        <ScrollArea className="h-full">
          <div className="space-y-2">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="p-3 rounded-xl bg-card/50 border border-border/30 hover:bg-card/80 transition-smooth cursor-pointer group shadow-soft hover:shadow-glow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-sm truncate">{session.title}</h3>
                  <span className="text-xs text-muted-foreground">{session.date}</span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{session.preview}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-border/50 space-y-2">
        <Button variant="ghost" className="w-full justify-start text-sm">
          <MessageCircle className="w-4 h-4 mr-3" />
          Active Chat
        </Button>
        <Button variant="ghost" className="w-full justify-start text-sm">
          <History className="w-4 h-4 mr-3" />
          History
        </Button>
        <Button variant="ghost" className="w-full justify-start text-sm">
          <Settings className="w-4 h-4 mr-3" />
          Settings
        </Button>
        
        <div className="pt-2 border-t border-border/50">
          <Button variant="ghost" className="w-full justify-start text-sm text-muted-foreground hover:text-destructive">
            <LogOut className="w-4 h-4 mr-3" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};