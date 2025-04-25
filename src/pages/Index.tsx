
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Users, List, Search, ZoomIn, ZoomOut } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import DepartmentOrgChart from '../components/DepartmentOrgChart';
import PeopleOrgChart from '../components/PeopleOrgChart';
import DepartmentPeopleOrgChart from '../components/DepartmentPeopleOrgChart';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewType, setViewType] = useState("departments");
  const [zoomLevel, setZoomLevel] = useState(100);
  const [selectedDivision, setSelectedDivision] = useState("All Divisions");

  // Sample divisions for filtering
  const divisions = [
    "All Divisions",
    "Technology",
    "Operations",
    "Sales",
    "Marketing"
  ];

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 10, 150));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 10, 50));
  };

  return (
    <div className="min-h-screen bg-gray-50/40">
      <div className="max-w-screen-xl mx-auto px-4">
        <header className="py-8 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-900">Organization Chart</h1>
          <p className="text-gray-500 text-sm mt-1">Company structure and reporting lines</p>
        </header>
        <main className="py-12">
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative w-full md:max-w-xs">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search in organization..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <Select value={selectedDivision} onValueChange={setSelectedDivision}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by division" />
                </SelectTrigger>
                <SelectContent>
                  {divisions.map((division) => (
                    <SelectItem key={division} value={division}>
                      {division}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleZoomOut}
                  title="Zoom out"
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <span className="px-2 text-sm text-gray-600">{zoomLevel}%</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleZoomIn}
                  title="Zoom in"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <Tabs value={viewType} onValueChange={setViewType} className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none px-4 bg-transparent">
                  <TabsTrigger value="departments" className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Divisions & Departments
                  </TabsTrigger>
                  <TabsTrigger value="people" className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    People View
                  </TabsTrigger>
                  <TabsTrigger value="department-people" className="flex items-center gap-2">
                    <List className="w-4 h-4" />
                    Departments & People
                  </TabsTrigger>
                </TabsList>
                <div className="overflow-x-auto">
                  <ScrollArea className="h-[calc(100vh-280px)] relative" style={{ transform: `scale(${zoomLevel/100})`, transformOrigin: 'top center' }}>
                    <div className="min-w-fit p-8 pt-12">
                      <TabsContent value="departments" className="m-0">
                        <DepartmentOrgChart searchQuery={searchQuery} selectedDivision={selectedDivision} />
                      </TabsContent>
                      <TabsContent value="people" className="m-0">
                        <PeopleOrgChart searchQuery={searchQuery} selectedDivision={selectedDivision} />
                      </TabsContent>
                      <TabsContent value="department-people" className="m-0">
                        <DepartmentPeopleOrgChart searchQuery={searchQuery} />
                      </TabsContent>
                    </div>
                  </ScrollArea>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Index;
