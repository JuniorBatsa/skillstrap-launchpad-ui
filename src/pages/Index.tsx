
import React, { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { Dashboard } from './Dashboard';

const Index = () => {
  return (
    <PageLayout title="Dashboard">
      <Dashboard />
    </PageLayout>
  );
};

export default Index;
