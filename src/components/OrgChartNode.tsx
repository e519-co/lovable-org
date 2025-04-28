import React, { useState } from 'react';
import { ArrowDown, UserRound, ChevronDown, ChevronUp } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface OrgChartNodeProps {
  name: string;
  title: string;
  avatarUrl?: string;
  children?: React.ReactNode;
  level?: number;
}

const OrgChartNode = ({ 
  name, 
  title, 
  avatarUrl, 
  children,
  level = 0
}: OrgChartNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isCompact, setIsCompact] = useState(false);

  const countDirectReports = () => {
    if (!children) return 0;
    const childrenArray = React.Children.toArray(children);
    if (childrenArray.length === 1 && React.isValidElement(childrenArray[0])) {
      const childDiv = childrenArray[0].props.children;
      return React.Children.count(childDiv);
    }
    return 0;
  };

  const directReportsCount = countDirectReports();
  const showCompactToggle = directReportsCount > 8;

  const levelIndent = level * 32;

  return (
    <div className="flex flex-col items-center max-w-full" style={{ marginLeft: levelIndent }}>
      <div className={`flex flex-col items-center ${level > 0 ? 'border-l border-gray-200' : ''}`}>
        <div className={`relative ${level > 0 ? 'before:absolute before:w-8 before:h-[1px] before:bg-gray-200 before:-left-8 before:top-1/2' : ''}`}>
          <div 
            className={`w-52 p-4 bg-white rounded-full shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_0_rgba(0,0,0,0.12)] transition-all duration-200 cursor-pointer border border-gray-100 ${children ? 'hover:bg-gray-50' : ''}`}
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
                <h3 className="font-medium text-gray-900 text-sm truncate">{name}</h3>
                <p className="text-xs text-gray-500 font-normal truncate">{title}</p>
              </div>
            </div>
          </div>
        </div>

        {children && isExpanded && (
          <>
            <ArrowDown className="w-4 h-4 text-gray-300 my-3" />
            <div className="flex flex-col items-center w-full">
              {showCompactToggle && (
                <button
                  onClick={() => setIsCompact(!isCompact)}
                  className="mb-4 text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1"
                >
                  {isCompact ? (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      Show all {directReportsCount} reports
                    </>
                  ) : (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Show less
                    </>
                  )}
                </button>
              )}
              
              <ScrollArea className={`w-full ${isCompact ? 'max-h-[400px]' : ''}`}>
                <Carousel className="w-full max-w-[1200px]" opts={{ align: "start" }}>
                  <CarouselContent>
                    {React.Children.map(children, child => {
                      if (React.isValidElement(child)) {
                        if (child.type === OrgChartNode) {
                          return (
                            <CarouselItem className="basis-auto">
                              {React.cloneElement(child, { 
                                ...child.props,
                                level: level + 1 
                              })}
                            </CarouselItem>
                          );
                        }
                        
                        if (child.props && child.props.children) {
                          const updatedChildren = React.Children.map(child.props.children, grandChild => {
                            if (React.isValidElement(grandChild)) {
                              if (grandChild.type === OrgChartNode) {
                                return (
                                  <CarouselItem className="basis-auto">
                                    {React.cloneElement(grandChild, {
                                      ...(typeof grandChild.props === 'object' && grandChild.props !== null ? grandChild.props : {}),
                                      level: level + 1
                                    })}
                                  </CarouselItem>
                                );
                              } else {
                                return (
                                  <CarouselItem className="basis-auto">
                                    {grandChild}
                                  </CarouselItem>
                                );
                              }
                            }
                            return grandChild;
                          });
                          
                          return (
                            <CarouselContent>
                              {updatedChildren}
                            </CarouselContent>
                          );
                        }
                      }
                      return child;
                    })}
                  </CarouselContent>
                  <CarouselPrevious className="relative -left-4" />
                  <CarouselNext className="relative -right-4" />
                </Carousel>
              </ScrollArea>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrgChartNode;
