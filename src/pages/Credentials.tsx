
import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { Shield } from "lucide-react";

const Credentials = () => {
  return (
    <PageLayout title="My Credentials">
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
          <Shield className="text-skillstrap-600" size={24} />
          <div>
            <h2 className="font-semibold">No credentials yet</h2>
            <p className="text-gray-600">Complete gigs to earn verified credentials</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Credentials;
