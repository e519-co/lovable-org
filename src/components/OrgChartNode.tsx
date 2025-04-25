
import React, { useState } from 'react';
import { User, ArrowDown } from 'lucide-react';

interface OrgChartNodeProps {
  name: string;
  title: string;
  children?: React.ReactNode;
}

const OrgChartNode = ({ name, title, children }: OrgChartNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div 
          className="w-64 p-4 mb-2 bg-notion-background border border-notion-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-notion-subtle rounded-full">
              <User className="w-5 h-5 text-notion-secondary" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-notion-text">{name}</h3>
              <p className="text-sm text-notion-secondary">{title}</p>
            </div>
          </div>
        </div>
        {children && isExpanded && (
          <>
            <ArrowDown className="w-4 h-4 text-notion-border my-2" />
            <div className="flex flex-col items-center">
              {children}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrgChartNode;
