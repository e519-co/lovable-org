
import React from 'react';
import OrgChart from '../components/OrgChart';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50/40">
      <div className="max-w-screen-xl mx-auto px-4">
        <header className="py-8 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-900">Organization Chart</h1>
          <p className="text-gray-500 text-sm mt-1">Company structure and reporting lines</p>
        </header>
        <main className="py-12">
          <div className="overflow-x-auto">
            <OrgChart />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
