
import React from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { NavBar } from "@/components/NavBar";
import { useIsMobile } from "@/hooks/use-mobile";

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
  userName?: string;
};

export function PageLayout({ children, title, userName = "Alex Johnson" }: PageLayoutProps) {
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
        <NavBar toggleSidebar={toggleSidebar} userName={userName} />
        
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">{title}</h1>
          {children}
        </main>
      </div>
    </div>
  );
}
