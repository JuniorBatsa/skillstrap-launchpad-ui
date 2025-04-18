
import React from "react";
import { Clock, Star, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type GigSkill = {
  name: string;
};

type GigProps = {
  title: string;
  description: string;
  icon: React.ElementType;
  estimatedHours: number;
  xpReward: number;
  skills: GigSkill[];
  isVerified?: boolean;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
};

export function GigCard({
  title,
  description,
  icon: Icon,
  estimatedHours,
  xpReward,
  skills,
  isVerified = false,
  difficulty = "Beginner"
}: GigProps) {
  const difficultyColor = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800"
  };
  
  return (
    <Card className="gig-card h-full">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-skillstrap-100">
          <Icon size={20} className="text-skillstrap-600" />
        </div>
        
        <div className="space-y-3 w-full">
          <div className="space-y-1">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold leading-tight">{title}</h3>
              <span className={cn("level-badge", difficultyColor[difficulty])}>
                {difficulty}
              </span>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span 
                key={i} 
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs"
              >
                {skill.name}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-3">
              <span className="flex items-center text-xs text-muted-foreground">
                <Clock size={14} className="mr-1" />
                {estimatedHours}h
              </span>
              <span className="flex items-center text-xs text-skillstrap-600 font-medium">
                <Star size={14} className="mr-1" fill="currentColor" />
                {xpReward} XP
              </span>
              {isVerified && (
                <span className="verified-badge">
                  <ShieldCheck size={14} className="text-green-700" /> Verified
                </span>
              )}
            </div>
            
            <Button size="sm" className="bg-skillstrap-600 hover:bg-skillstrap-700">
              Apply <ArrowRight size={14} className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
