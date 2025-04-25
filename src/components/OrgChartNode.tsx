
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
          className="w-52 p-4 bg-white rounded-full shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_0_rgba(0,0,0,0.12)] transition-all duration-200 cursor-pointer border border-gray-100"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-gray-100">
              <AvatarImage 
                src={avatarUrl} 
                alt={`${name}'s avatar`} 
                className="object-cover"
              />
              <AvatarFallback className="bg-gray-50">
                <UserRound className="w-5 h-5 text-gray-400" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-left">
              <h3 className="font-medium text-gray-900 text-sm">{name}</h3>
              <p className="text-xs text-gray-500 font-normal">{title}</p>
            </div>
          </div>
        </div>
        {children && isExpanded && (
          <>
            <ArrowDown className="w-4 h-4 text-gray-300 my-3" />
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
