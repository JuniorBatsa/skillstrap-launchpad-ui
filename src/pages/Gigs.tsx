
import React from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { NavBar } from "@/components/NavBar";
import { useIsMobile } from "@/hooks/use-mobile";

const Gigs = () => {
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
          <h1 className="text-2xl font-bold mb-6">My Gigs</h1>
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600">No active gigs yet. Start exploring opportunities!</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Gigs;
