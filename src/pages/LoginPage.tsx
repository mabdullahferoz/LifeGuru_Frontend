import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { Sparkles, ArrowLeft, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome back!",
        description: "You've successfully logged into LifeGuru.",
      });
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-soft">
      <FloatingBlobs />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="absolute top-6 left-6 glass text-foreground"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="w-full max-w-md shadow-float border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-calm rounded-2xl flex items-center justify-center mx-auto shadow-soft">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Welcome Back</CardTitle>
              <CardDescription>
                Continue your journey of self-reflection and growth
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="shadow-soft border-0 bg-muted/50"
                />
              </div>
              
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="shadow-soft border-0 bg-muted/50"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full shadow-soft transition-smooth hover:shadow-glow"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/50"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              
              <Button 
                type="button" 
                variant="outline"
                className="w-full shadow-soft border-0 bg-muted/30"
              >
                <Mail className="w-4 h-4 mr-2" />
                Google
              </Button>
            </form>
            
            <div className="text-center mt-6 space-y-2">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Button 
                  variant="link" 
                  className="p-0 h-auto font-medium text-primary"
                  onClick={() => navigate('/signup')}
                >
                  Sign up
                </Button>
              </p>
              <Button 
                variant="link" 
                className="p-0 h-auto text-xs text-muted-foreground"
              >
                Forgot your password?
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};