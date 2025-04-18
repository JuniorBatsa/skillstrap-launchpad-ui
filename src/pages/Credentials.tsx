
import React from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { NavBar } from "@/components/NavBar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Shield } from "lucide-react";

const Credentials = () => {
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
          <h1 className="text-2xl font-bold mb-6">My Credentials</h1>
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
              <Shield className="text-skillstrap-600" size={24} />
              <div>
                <h2 className="font-semibold">No credentials yet</h2>
                <p className="text-gray-600">Complete gigs to earn verified credentials</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Credentials;
