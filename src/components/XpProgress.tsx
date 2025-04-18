
import React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type XpProgressProps = {
  currentXp: number;
  levelThreshold: number;
  level: number;
  className?: string;
};

export function XpProgress({ currentXp, levelThreshold, level, className }: XpProgressProps) {
  const progressPercentage = Math.min(100, (currentXp / levelThreshold) * 100);
  
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="level-badge bg-skillstrap-100 text-skillstrap-700">
            <Sparkles size={12} className="mr-1" />
            Level {level}
          </span>
          <span className="text-xs text-muted-foreground">
            {currentXp} / {levelThreshold} XP
          </span>
        </div>
        
        <span className="text-xs font-medium">
          {Math.round(progressPercentage)}%
        </span>
      </div>
      
      <div className="xp-progress-bar">
        <div 
          className="xp-progress-value" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}
