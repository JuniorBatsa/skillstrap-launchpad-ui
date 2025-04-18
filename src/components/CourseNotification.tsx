
import React from "react";
import { BookOpen, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CourseNotification() {
  const [isVisible, setIsVisible] = React.useState(true);
  
  if (!isVisible) {
    return null;
  }
  
  return (
    <div className="relative bg-gradient-to-r from-skillstrap-50 to-skillstrap-100 p-4 rounded-xl border border-skillstrap-200">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-2 rounded-full p-1 hover:bg-white/50"
      >
        <X size={16} />
      </button>
      
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-skillstrap-600">
          <BookOpen size={18} className="text-white" />
        </div>
        
        <div className="space-y-1">
          <p className="font-medium">Start with the basics</p>
          <p className="text-sm text-muted-foreground">
            Understanding Company Culture – Complete this foundational course before applying to gigs
          </p>
          
          <div className="pt-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="bg-white border-skillstrap-200 hover:bg-skillstrap-50"
            >
              Start Course <ArrowRight size={14} className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
