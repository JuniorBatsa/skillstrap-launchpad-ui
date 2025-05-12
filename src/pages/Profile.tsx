
import React, { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { XpProgress } from "@/components/XpProgress";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Edit, User, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: user?.bio || '',
    location: user?.location || '',
    phone: user?.phone || '',
    image: user?.image || ''
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(user?.image || null);
  
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleEditToggle = () => {
    if (isEditing) {
      // If we're currently editing and toggling off, reset form data
      setProfileData({
        name: user?.name || '',
        email: user?.email || '',
        bio: user?.bio || '',
        location: user?.location || '',
        phone: user?.phone || '',
        image: user?.image || ''
      });
      setPreviewUrl(user?.image || null);
      setImageFile(null);
    }
    setIsEditing(!isEditing);
  };

  const handleImageClick = () => {
    if (isEditing && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Convert image file to data URL if it exists
      let imageDataUrl = previewUrl;
      if (imageFile) {
        imageDataUrl = previewUrl;
      }
      
      await updateProfile({
        ...profileData,
        image: imageDataUrl
      });
      
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
      
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Update Failed",
        description: "There was an error updating your profile.",
        variant: "destructive",
      });
    }
  };

  // Create initials from name for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <PageLayout title="My Profile">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit}>
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                <div 
                  className={`relative ${isEditing ? 'cursor-pointer group' : ''}`} 
                  onClick={handleImageClick}
                >
                  <Avatar className="w-24 h-24 border-2 border-white shadow-md">
                    <AvatarImage src={previewUrl || ''} />
                    <AvatarFallback className="bg-skillstrap-100 text-skillstrap-600 text-xl">
                      {user?.name ? getInitials(user.name) : <User size={32} />}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="text-white" size={24} />
                    </div>
                  )}
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{user?.name}</h2>
                  <p className="text-gray-500">{user?.email}</p>
                </div>
              </div>
              <Button 
                type="button" 
                variant={isEditing ? "default" : "ghost"} 
                size="sm" 
                onClick={handleEditToggle}
              >
                {isEditing ? 'Cancel' : (
                  <>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </>
                )}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Experience Level</h3>
                <XpProgress 
                  currentXp={150} 
                  levelThreshold={300} 
                  level={2}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                    className={!isEditing ? "bg-slate-50" : ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                    className={!isEditing ? "bg-slate-50" : ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                    placeholder={!isEditing && !profileData.phone ? "Not provided" : ""}
                    className={!isEditing ? "bg-slate-50" : ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location"
                    name="location"
                    value={profileData.location}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                    placeholder={!isEditing && !profileData.location ? "Not provided" : ""}
                    className={!isEditing ? "bg-slate-50" : ""}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio"
                    name="bio"
                    value={profileData.bio}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                    placeholder={!isEditing && !profileData.bio ? "No bio provided" : "Tell us about yourself"}
                    className={!isEditing ? "bg-slate-50" : ""}
                    rows={4}
                  />
                </div>
              </div>
              
              {isEditing && (
                <div className="flex justify-end mt-6">
                  <Button type="submit">Save Changes</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </form>
      </div>
    </PageLayout>
  );
};

export default Profile;
