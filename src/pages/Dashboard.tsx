
import React from 'react';
import { DivisionKPIs } from '@/components/dashboard/DivisionKPIs';
import { TeamDistribution } from '@/components/dashboard/TeamDistribution';
import { GrowthChart } from '@/components/dashboard/GrowthChart';
import { RecentUpdates } from '@/components/dashboard/RecentUpdates';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Company overview and metrics</p>
        </header>

        <div className="space-y-8">
          <DivisionKPIs />
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <TeamDistribution />
            <GrowthChart />
            <RecentUpdates />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
