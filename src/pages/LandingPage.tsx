import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChartLine, Github, Linkedin, Twitter, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const LandingPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/register');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-skillstrap-600 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-white/30"></div>
            </div>
            <span className="font-bold text-xl text-skillstrap-600">SkillStrap</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-skillstrap-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-skillstrap-600 transition-colors">How It Works</a>
            <a href="#who-its-for" className="text-sm font-medium text-slate-600 hover:text-skillstrap-600 transition-colors">Who It's For</a>
          </div>
          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <Button onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
            ) : (
              <>
                <Button variant="outline" onClick={() => navigate('/login')}>Sign In</Button>
                <Button onClick={() => navigate('/register')}>Register</Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
            Launch. Learn. Level Up.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            SkillStrap is your personalized launchpad for practical, project-based learning. 
            Build real-world skills, track progress, and accelerate growth — solo or with your team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 py-6 text-lg" onClick={handleGetStarted}>
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
              Explore Features
            </Button>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10 h-12 bottom-0 top-auto"></div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="SkillStrap Dashboard Preview" 
              className="rounded-lg shadow-2xl border border-slate-200 mx-auto max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Why SkillStrap?</h2>
            <p className="max-w-2xl mx-auto text-slate-600 text-lg">
              The platform designed for practical skill building with real-world applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-skillstrap-100 flex items-center justify-center mb-4">
                <ChartLine size={24} className="text-skillstrap-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Real Projects, Real Skills</h3>
              <p className="text-slate-600">
                Ditch the fluff. Gain hands-on experience by working on practical, scoped projects that align with your goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-skillstrap-100 flex items-center justify-center mb-4">
                <Users size={24} className="text-skillstrap-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Personalized Learning Tracks</h3>
              <p className="text-slate-600">
                Choose a path or create your own. SkillStrap adapts to your pace, interests, and experience level.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-skillstrap-100 flex items-center justify-center mb-4">
                <Users size={24} className="text-skillstrap-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Built for Teams</h3>
              <p className="text-slate-600">
                Track progress across your team, assign challenges, and level up together — all in one dashboard.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-skillstrap-100 flex items-center justify-center mb-4">
                <ChartLine size={24} className="text-skillstrap-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Progress You Can See</h3>
              <p className="text-slate-600">
                Visualize what you've learned, where you're going next, and what it means for your career.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">A Smarter Way to Build Skills</h2>
            <p className="max-w-2xl mx-auto text-slate-600 text-lg">
              Simple steps to accelerate your learning journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-skillstrap-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-skillstrap-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Sign Up & Set Your Focus</h3>
              <p className="text-slate-600">
                Pick a skill track or start from scratch. Whether it's frontend, backend, or AI — you choose.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-skillstrap-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-skillstrap-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Complete Guided Projects</h3>
              <p className="text-slate-600">
                Work through real-world challenges with clear instructions, resources, and support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-skillstrap-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-skillstrap-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Track, Share, Grow</h3>
              <p className="text-slate-600">
                Monitor your growth, showcase achievements, and keep leveling up.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who It's For */}
      <section id="who-its-for" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Made for Makers, Learners, and Leaders</h2>
            <p className="max-w-2xl mx-auto text-slate-600 text-lg">
              Designed to support different learning journeys.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Aspiring Developers</h3>
              <p className="text-slate-600">
                Get hands-on without the bootcamp price tag.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Teams & Orgs</h3>
              <p className="text-slate-600">
                Skill up together, track learning, and build internal capabilities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Lifelong Learners</h3>
              <p className="text-slate-600">
                Stay sharp, stay current, stay curious.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-skillstrap-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build something real?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-white/90">
            Join SkillStrap and start growing your skills through hands-on experience. No tutorials. Just progress.
          </p>
          <Button 
            size="lg" 
            onClick={handleGetStarted} 
            className="bg-white hover:bg-slate-100 text-skillstrap-600 px-8 py-6 text-lg"
          >
            Create Free Account
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-white/30"></div>
              </div>
              <span className="font-bold text-xl text-white">SkillStrap</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Docs</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60 mb-4 md:mb-0">© 2025 SkillStrap</p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
