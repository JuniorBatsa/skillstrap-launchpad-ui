
import React from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { NavBar } from "@/components/NavBar";
import { useIsMobile } from "@/hooks/use-mobile";
import { BookOpen } from "lucide-react";

const Learn = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = React.useState(!isMobile);
  
  React.useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {sidebarOpen && <AppSidebar collapsed={false} setCollapsed={() => {}} />}
      
      <div className="flex flex-col flex-1">
        <NavBar toggleSidebar={toggleSidebar} userName="Alex Johnson" />
        
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Learning Path</h1>
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="text-skillstrap-600" size={24} />
                <div>
                  <h2 className="font-semibold">Understanding Company Culture – Start Here</h2>
                  <p className="text-gray-600">Foundation course for workplace success</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Learn;
