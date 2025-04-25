
import React from 'react';
import { Users } from 'lucide-react';

const Directory = () => {
  return (
    <div className="min-h-screen bg-notion-background">
      <div className="max-w-screen-xl mx-auto px-4">
        <header className="py-8 border-b border-notion-border">
          <h1 className="text-3xl font-semibold text-notion-text">Directory</h1>
          <p className="text-notion-secondary mt-2">Employee directory and contacts</p>
        </header>
        <main className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder directory cards */}
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white rounded-lg border border-notion-border shadow-sm"
              >
                <div className="w-12 h-12 bg-notion-border rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-notion-secondary" />
                </div>
                <div>
                  <h3 className="font-medium">Employee Name {index + 1}</h3>
                  <p className="text-sm text-notion-secondary">Position</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Directory;
