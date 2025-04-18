
import React from "react";
import { 
  Layout, 
  Code, 
  Database, 
  LineChart, 
  PenTool, 
  MonitorSmartphone,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { GigCard } from "@/components/GigCard";
import { XpProgress } from "@/components/XpProgress";
import { CourseNotification } from "@/components/CourseNotification";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Dashboard() {
  // Mock data for the user
  const userData = {
    name: "Alex Johnson",
    level: 3,
    currentXp: 2750,
    levelThreshold: 5000,
    totalCompletedGigs: 7,
    verifiedExperience: 2,
  };
  
  // Mock data for gigs
  const recommendedGigs = [
    {
      title: "Build a Landing Page",
      description: "Create a responsive landing page for a startup using React and Tailwind CSS.",
      icon: Layout,
      estimatedHours: 8,
      xpReward: 350,
      skills: [{ name: "React" }, { name: "Tailwind" }, { name: "Responsive Design" }],
      difficulty: "Beginner",
      isVerified: true
    },
    {
      title: "Label AI Dataset",
      description: "Help train an AI model by labeling images of different objects for a computer vision project.",
      icon: Database,
      estimatedHours: 6,
      xpReward: 250,
      skills: [{ name: "Data Entry" }, { name: "AI Training" }],
      difficulty: "Beginner"
    },
    {
      title: "Analyze Marketing Data",
      description: "Use Python to analyze marketing campaign data and create visualizations of key metrics.",
      icon: LineChart,
      estimatedHours: 12,
      xpReward: 450,
      skills: [{ name: "Python" }, { name: "Data Analysis" }, { name: "Visualization" }],
      difficulty: "Intermediate",
      isVerified: true
    },
    {
      title: "Design App Screens",
      description: "Create wireframes and UI designs for a mobile app focused on fitness tracking.",
      icon: PenTool,
      estimatedHours: 10,
      xpReward: 400,
      skills: [{ name: "UI Design" }, { name: "Figma" }, { name: "Wireframing" }],
      difficulty: "Intermediate"
    },
    {
      title: "Develop API Endpoints",
      description: "Build RESTful API endpoints for a user authentication system using Node.js and Express.",
      icon: Code,
      estimatedHours: 15,
      xpReward: 550,
      skills: [{ name: "Node.js" }, { name: "Express" }, { name: "API Design" }],
      difficulty: "Advanced"
    },
    {
      title: "Mobile App Testing",
      description: "Test a new mobile app and document bugs and improvement suggestions for the development team.",
      icon: MonitorSmartphone,
      estimatedHours: 8,
      xpReward: 300,
      skills: [{ name: "QA Testing" }, { name: "Bug Reporting" }, { name: "Mobile" }],
      difficulty: "Beginner"
    }
  ];
  
  return (
    <div className="flex-1 space-y-8 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {userData.name}!
        </h1>
        <XpProgress 
          currentXp={userData.currentXp} 
          levelThreshold={userData.levelThreshold} 
          level={userData.level} 
        />
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex items-center gap-4 p-4 rounded-xl border bg-white md:flex-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skillstrap-100">
            <Sparkles size={24} className="text-skillstrap-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total XP</p>
            <p className="text-2xl font-bold">{userData.currentXp}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-4 rounded-xl border bg-white md:flex-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skillstrap-100">
            <ShieldCheck size={24} className="text-skillstrap-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Verified Experience</p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">{userData.verifiedExperience}</p>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Blockchain Verified</Badge>
            </div>
          </div>
        </div>
      </div>
      
      <CourseNotification />
      
      <Tabs defaultValue="recommended">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Available Gigs</h2>
          <TabsList>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="recommended" className="pt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedGigs.map((gig, index) => (
              <GigCard 
                key={index}
                title={gig.title}
                description={gig.description}
                icon={gig.icon}
                estimatedHours={gig.estimatedHours}
                xpReward={gig.xpReward}
                skills={gig.skills}
                difficulty={gig.difficulty as any}
                isVerified={gig.isVerified}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="new">
          <div className="py-10 text-center text-muted-foreground">
            New gigs will appear here
          </div>
        </TabsContent>
        
        <TabsContent value="popular">
          <div className="py-10 text-center text-muted-foreground">
            Popular gigs will appear here
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
