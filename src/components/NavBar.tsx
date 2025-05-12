
import React from "react";
import { useNavigate } from "react-router-dom";
import { Search, Bell, Menu, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

type NavBarProps = {
  toggleSidebar: () => void;
  userName: string;
};

export function NavBar({ toggleSidebar, userName }: NavBarProps) {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const { toast } = useToast();
  
  const userInitials = userName
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex h-14 items-center border-b px-4 justify-between gap-4 bg-white">
      <button 
        onClick={toggleSidebar} 
        className="sm:hidden p-2 rounded-md hover:bg-slate-100"
      >
        <Menu size={20} />
      </button>
      
      <div className="hidden sm:flex relative max-w-md flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input 
          type="search" 
          placeholder="Search gigs, courses..." 
          className="pl-8 bg-slate-50 border-slate-200 focus:bg-white" 
        />
      </div>
      
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <button className="relative p-2 rounded-full hover:bg-slate-100">
              <Bell size={20} />
              <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-skillstrap-600"></span>
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-skillstrap-100 text-skillstrap-600">
                      {userInitials}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/profile')}>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={handleLogin}>Sign In</Button>
            <Button onClick={() => navigate('/register')}>Register</Button>
          </div>
        )}
      </div>
    </div>
  );
}
