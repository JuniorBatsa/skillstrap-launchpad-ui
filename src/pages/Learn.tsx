
import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { BookOpen } from "lucide-react";

const Learn = () => {
  return (
    <PageLayout title="Learning Path">
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="text-skillstrap-600" size={24} />
            <div>
              <h2 className="font-semibold">Understanding Company Culture – Start Here</h2>
              <p className="text-gray-600">Foundation course for workplace success</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Learn;
