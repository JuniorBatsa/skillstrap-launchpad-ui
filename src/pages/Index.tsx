
import React, { useState } from 'react';
import { AppSidebar } from '@/components/AppSidebar';
import { NavBar } from '@/components/NavBar';
import { Dashboard } from './Dashboard';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  
  // On mobile, sidebar should be closed by default
  React.useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="flex min-h-screen bg-slate-50">
      {sidebarOpen && (
        <AppSidebar 
          collapsed={collapsed} 
          setCollapsed={setCollapsed} 
        />
      )}
      
      <div className="flex flex-col flex-1">
        <NavBar toggleSidebar={toggleSidebar} userName="Alex Johnson" />
        
        <main className="flex-1 overflow-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Index;
