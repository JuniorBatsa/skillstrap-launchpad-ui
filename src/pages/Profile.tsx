
import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { XpProgress } from "@/components/XpProgress";

const Profile = () => {
  return (
    <PageLayout title="My Profile">
      <div className="max-w-2xl mx-auto">
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
    </PageLayout>
  );
};

export default Profile;
