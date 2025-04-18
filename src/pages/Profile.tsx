
import React from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { NavBar } from "@/components/NavBar";
import { useIsMobile } from "@/hooks/use-mobile";
import { XpProgress } from "@/components/XpProgress";

const Profile = () => {
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
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">My Profile</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
              <div className="space-y-2">
                <h2 className="font-semibold">Experience Level</h2>
                <XpProgress 
                  currentXp={150} 
                  levelThreshold={300} 
                  level={2}
                />
              </div>
              
              <div className="space-y-2">
                <h2 className="font-semibold">Personal Information</h2>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Name: Alex Johnson</p>
                  <p className="text-sm text-gray-600">Email: alex.johnson@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
