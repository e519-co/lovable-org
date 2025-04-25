
import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-notion-background">
      <div className="max-w-screen-xl mx-auto px-4">
        <header className="py-8 border-b border-notion-border">
          <h1 className="text-3xl font-semibold text-notion-text">Dashboard</h1>
          <p className="text-notion-secondary mt-2">Company overview and metrics</p>
        </header>
        <main className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder cards for dashboard content */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-notion-border shadow-sm"
              >
                <h3 className="font-medium mb-2">Dashboard Card {index + 1}</h3>
                <p className="text-notion-secondary">Content coming soon...</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
