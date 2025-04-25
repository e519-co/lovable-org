
import React, { useState } from 'react';
import { ArrowDown, UserRound } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface OrgChartNodeProps {
  name: string;
  title: string;
  avatarUrl?: string;
  children?: React.ReactNode;
}

const OrgChartNode = ({ 
  name, 
  title, 
  avatarUrl, 
  children 
}: OrgChartNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div 
          className="w-64 p-4 mb-2 bg-notion-background border border-notion-border rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage 
                src={avatarUrl} 
                alt={`${name}'s avatar`} 
                className="object-cover"
              />
              <AvatarFallback>
                <UserRound className="w-5 h-5 text-notion-secondary" />
              </AvatarFallback>
            </Avatar>
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
