
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Users } from 'lucide-react';
import DepartmentOrgChart from '../components/DepartmentOrgChart';
import PeopleOrgChart from '../components/PeopleOrgChart';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50/40">
      <div className="max-w-screen-xl mx-auto px-4">
        <header className="py-8 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-900">Organization Chart</h1>
          <p className="text-gray-500 text-sm mt-1">Company structure and reporting lines</p>
        </header>
        <main className="py-12">
          <Tabs defaultValue="departments" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="departments" className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Divisions & Departments
              </TabsTrigger>
              <TabsTrigger value="people" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                People View
              </TabsTrigger>
            </TabsList>
            <div className="overflow-x-auto">
              <TabsContent value="departments">
                <DepartmentOrgChart />
              </TabsContent>
              <TabsContent value="people">
                <PeopleOrgChart />
              </TabsContent>
            </div>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Index;
