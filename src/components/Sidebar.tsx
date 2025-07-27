import { useState } from "react";
import { MessageCircle, History, Settings, LogOut, Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ReflectionSession {
  id: string;
  title: string;
  date: string;
  preview: string;
}

export const Sidebar = () => {
  const handleSignOut = () => {
    // Clear any stored session data
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    sessionStorage.clear();
    
    // Redirect to homepage
    window.location.href = '/';
  };
  
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
        <ScrollArea className="h-full">
          
        </ScrollArea>
      </div>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-border/50 space-y-2">
        <Button variant="ghost" className="w-full justify-start text-sm">
          <MessageCircle className="w-4 h-4 mr-3" />
          Active Chat
        </Button>
        
        <Button variant="ghost" className="w-full justify-start text-sm">
          <Settings className="w-4 h-4 mr-3" />
          Settings
        </Button>
        
        <div className="pt-2 border-t border-border/50">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" className="w-full justify-start text-sm text-muted-foreground hover:text-destructive">
                <LogOut className="w-4 h-4 mr-3" />
                Sign Out
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to sign out?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will end your current session and you'll need to sign in again to continue using LifeGuru.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleSignOut} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Sign Out
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};