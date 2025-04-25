
import React from 'react';
import OrgChart from '../components/OrgChart';

const Index = () => {
  return (
    <div className="min-h-screen bg-notion-background">
      <div className="max-w-screen-xl mx-auto px-4">
        <header className="py-8 border-b border-notion-border">
          <h1 className="text-3xl font-semibold text-notion-text">Organization Chart</h1>
          <p className="text-notion-secondary mt-2">Company structure and reporting lines</p>
        </header>
        <main className="py-8">
          <div className="overflow-x-auto">
            <OrgChart />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
