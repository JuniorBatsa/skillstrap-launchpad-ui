
import React from "react";
import { PageLayout } from "@/components/PageLayout";

const Gigs = () => {
  return (
    <PageLayout title="My Gigs">
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-600">No active gigs yet. Start exploring opportunities!</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Gigs;
