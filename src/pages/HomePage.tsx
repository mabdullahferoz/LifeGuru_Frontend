import { Button } from "@/components/ui/button";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { Sparkles, Heart, Brain, Compass } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 homepage-bg">
        <FloatingBlobs />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-card">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">LifeGuru</span>
          </div>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="homepage-card text-foreground border-border/50 hover:bg-accent/30 shadow-soft"
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
            
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 homepage-card rounded-full px-4 py-2 mb-6 shadow-soft">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-foreground text-sm">Your Reflective Life Assistant</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                Find Your
                <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Inner Clarity
                </span>
              </h1>
              
              <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                LifeGuru helps you reflect, process emotions, and make mindful decisions through gentle AI-guided conversations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground shadow-glow hover:shadow-soft transition-smooth text-lg px-8"
                  onClick={() => navigate('/login')}
                >
                  Start Your Journey
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="homepage-card text-foreground border-border/50 hover:bg-accent/20 text-lg px-8 shadow-soft"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </main>

        {/* Features Section */}
        <section className="px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="homepage-card rounded-2xl p-6 text-center shadow-soft">
                <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Emotional Clarity</h3>
                <p className="text-sm text-muted-foreground">
                  Process and understand your emotions through guided reflection
                </p>
              </div>
              
              <div className="homepage-card rounded-2xl p-6 text-center shadow-soft">
                <div className="w-12 h-12 bg-secondary/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Mindful Decisions</h3>
                <p className="text-sm text-muted-foreground">
                  Make thoughtful choices aligned with your values and goals
                </p>
              </div>
              
              <div className="homepage-card rounded-2xl p-6 text-center shadow-soft">
                <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Compass className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Personal Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Develop self-awareness and emotional intelligence over time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-foreground/50">
          <p className="text-sm">Crafted with calm ✨ – LifeGuru</p>
        </footer>
      </div>
    </div>
  );
};