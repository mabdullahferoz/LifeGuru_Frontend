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

  const handleNewReflection = () => {
    // Dispatch a custom event to reset the chat
    window.dispatchEvent(new CustomEvent('resetChat'));
  };
  
  return (
    <div className="w-80 sidebar-bg border-r border-sidebar-border flex flex-col h-full shadow-soft">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-sidebar-primary rounded-xl flex items-center justify-center shadow-card">
            <Sparkles className="w-5 h-5 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold text-lg text-sidebar-foreground">LifeGuru</h1>
            <p className="text-sm text-sidebar-foreground/70">Your Reflective Assistant</p>
          </div>
        </div>
        
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="w-full shadow-card transition-smooth hover:shadow-glow bg-sidebar-primary hover:bg-sidebar-primary/90 text-sidebar-primary-foreground">
              <Plus className="w-4 h-4 mr-2" />
              New Reflection
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Start a New Reflection?</AlertDialogTitle>
              <AlertDialogDescription>
                This will clear your current conversation and start a fresh reflection session. Your previous conversation will not be saved.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleNewReflection}>
                Start New Reflection
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* Sessions List */}
      <div className="flex-1 p-4">
        <ScrollArea className="h-full">
          
        </ScrollArea>
      </div>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-sidebar-border space-y-2">
        <Button variant="ghost" className="w-full justify-start text-sm hover:bg-sidebar-accent/70 transition-smooth text-sidebar-foreground">
          <MessageCircle className="w-4 h-4 mr-3" />
          Active Chat
        </Button>
        
        <Button variant="ghost" className="w-full justify-start text-sm hover:bg-sidebar-accent/70 transition-smooth text-sidebar-foreground">
          <Settings className="w-4 h-4 mr-3" />
          Settings
        </Button>
        
        <div className="pt-2 border-t border-sidebar-border">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" className="w-full justify-start text-sm text-sidebar-foreground/70 hover:text-destructive hover:bg-destructive/5 transition-smooth">
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