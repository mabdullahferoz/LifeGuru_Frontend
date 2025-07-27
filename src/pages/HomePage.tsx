import { Button } from "@/components/ui/button";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { Sparkles, Heart, Brain, Compass } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <FloatingBlobs />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-soft">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-white">LifeGuru</span>
          </div>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="glass text-foreground border-white/20 hover:bg-white/20"
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
            <Button 
              className="bg-white/90 text-foreground shadow-soft hover:bg-white hover:shadow-glow transition-smooth"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-sm">Your Reflective Life Assistant</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Find Your
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Inner Clarity
                </span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                LifeGuru helps you reflect, process emotions, and make mindful decisions through gentle AI-guided conversations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-foreground shadow-glow hover:shadow-soft transition-smooth text-lg px-8"
                  onClick={() => navigate('/signup')}
                >
                  Start Your Journey
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="glass text-foreground border-white/30 hover:bg-white/10 text-lg px-8"
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
              <div className="glass rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Emotional Clarity</h3>
                <p className="text-sm text-muted-foreground">
                  Process and understand your emotions through guided reflection
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Mindful Decisions</h3>
                <p className="text-sm text-muted-foreground">
                  Make thoughtful choices aligned with your values and goals
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Compass className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Personal Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Develop self-awareness and emotional intelligence over time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-white/60">
          <p className="text-sm">Crafted with calm ✨ – LifeGuru</p>
        </footer>
      </div>
    </div>
  );
};