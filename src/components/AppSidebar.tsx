
import React from "react";
import { 
  LayoutDashboard, 
  Briefcase, 
  Award, 
  BookOpen, 
  User, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { cn } from "@/lib/utils";

type SidebarLinkProps = {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
  collapsed: boolean;
};

const SidebarLink = ({ icon: Icon, label, href, active = false, collapsed }: SidebarLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        active 
          ? "bg-skillstrap-600 text-white" 
          : "hover:bg-skillstrap-100 hover:text-skillstrap-600"
      )}
    >
      <Icon size={20} className={active ? "text-white" : "text-skillstrap-600"} />
      {!collapsed && <span>{label}</span>}
    </a>
  );
};

type AppSidebarProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

export function AppSidebar({ collapsed, setCollapsed }: AppSidebarProps) {
  return (
    <div 
      className={cn(
        "flex flex-col border-r bg-sidebar transition-all duration-300",
        collapsed ? "w-[70px]" : "w-[240px]"
      )}
    >
      <div className="flex h-14 items-center border-b px-3">
        {!collapsed ? (
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-skillstrap-600"></div>
            <span className="font-semibold text-skillstrap-600">SkillStrap</span>
          </div>
        ) : (
          <div className="mx-auto h-7 w-7 rounded-full bg-skillstrap-600"></div>
        )}
      </div>
      
      <div className="flex-1 overflow-auto py-4 px-3 space-y-2">
        <SidebarLink 
          icon={LayoutDashboard} 
          label="Dashboard" 
          href="/" 
          active={true} 
          collapsed={collapsed} 
        />
        <SidebarLink 
          icon={Briefcase} 
          label="My Gigs" 
          href="/gigs" 
          collapsed={collapsed} 
        />
        <SidebarLink 
          icon={Award} 
          label="Credentials" 
          href="/credentials" 
          collapsed={collapsed} 
        />
        <SidebarLink 
          icon={BookOpen} 
          label="Learn" 
          href="/learn" 
          collapsed={collapsed} 
        />
        <SidebarLink 
          icon={User} 
          label="Profile" 
          href="/profile" 
          collapsed={collapsed} 
        />
      </div>
      
      <div className="mt-auto border-t p-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex w-full items-center justify-center rounded-md p-2 hover:bg-skillstrap-100"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
    </div>
  );
}
