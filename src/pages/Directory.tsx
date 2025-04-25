
import React, { useState } from 'react';
import { Search, Users, Building2, GridIcon, ListIcon } from 'lucide-react';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

// Mock data - in a real app, this would come from an API
const departments = [
  "All Departments",
  "Product & Engineering",
  "Growth",
  "Customer Success",
  "People Operations",
  "Finance",
  "Legal"
];

const divisions = [
  "All Divisions",
  "Technology",
  "Operations",
  "Sales",
  "Marketing"
];

// Generate mock employees
const generateEmployees = (count: number) => {
  return Array.from({ length: count }).map((_, index) => ({
    id: index + 1,
    name: `Employee ${index + 1}`,
    position: ["Engineer", "Designer", "Manager", "Director", "VP", "Analyst"][
      Math.floor(Math.random() * 6)
    ],
    department: departments[Math.floor(Math.random() * (departments.length - 1)) + 1],
    division: divisions[Math.floor(Math.random() * (divisions.length - 1)) + 1],
    email: `employee${index + 1}@company.com`,
    location: ["New York", "San Francisco", "London", "Remote"][
      Math.floor(Math.random() * 4)
    ]
  }));
};

const employees = generateEmployees(120); // Mock data for demonstration

const Directory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedDivision, setSelectedDivision] = useState("All Divisions");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const itemsPerPage = viewMode === "grid" ? 12 : 8;
  
  // Filter employees based on search query and filters
  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         employee.position.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDepartment = selectedDepartment === "All Departments" || 
                             employee.department === selectedDepartment;
    
    const matchesDivision = selectedDivision === "All Divisions" || 
                           employee.division === selectedDivision;
    
    return matchesSearch && matchesDepartment && matchesDivision;
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  // Handle filter changes
  const handleDepartmentChange = (value: string) => {
    setSelectedDepartment(value);
    setCurrentPage(1);
  };

  const handleDivisionChange = (value: string) => {
    setSelectedDivision(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Directory</h1>
          <p className="text-muted-foreground mt-2">Employee directory and contacts</p>
        </header>

        {/* Search and filters section */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search employees..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2 flex-wrap md:flex-nowrap">
            <Select value={selectedDepartment} onValueChange={handleDepartmentChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((department) => (
                  <SelectItem key={department} value={department}>
                    {department}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedDivision} onValueChange={handleDivisionChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Division" />
              </SelectTrigger>
              <SelectContent>
                {divisions.map((division) => (
                  <SelectItem key={division} value={division}>
                    {division}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex border rounded-md overflow-hidden">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className="rounded-none"
              >
                <GridIcon className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
                className="rounded-none"
              >
                <ListIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="text-sm text-muted-foreground mb-4">
          Showing {paginatedEmployees.length} of {filteredEmployees.length} employees
        </div>

        {/* Directory content */}
        <ScrollArea className="h-[65vh]">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {paginatedEmployees.map((employee) => (
                <div
                  key={employee.id}
                  className="flex flex-col p-4 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{employee.name}</h3>
                      <p className="text-sm text-muted-foreground">{employee.position}</p>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground space-y-1">
                    <p className="flex items-center">
                      <Building2 className="w-3 h-3 mr-1 inline" /> {employee.department}
                    </p>
                    <p>{employee.location}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {paginatedEmployees.map((employee) => (
                <div
                  key={employee.id}
                  className="flex items-center p-3 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-foreground">{employee.name}</h3>
                    <p className="text-sm text-muted-foreground">{employee.position}</p>
                  </div>
                  <div className="hidden md:block text-sm text-muted-foreground">
                    <p>{employee.department}</p>
                    <p>{employee.division}</p>
                  </div>
                  <div className="hidden lg:block text-sm text-muted-foreground ml-4">
                    <p>{employee.location}</p>
                    <p className="text-xs">{employee.email}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-6">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {/* Show limited pagination numbers */}
              {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                // Logic to show current page in the middle when possible
                let pageNum = currentPage;
                if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                // Ensure page numbers are within bounds
                if (pageNum > 0 && pageNum <= totalPages) {
                  return (
                    <PaginationItem key={i}>
                      <PaginationLink
                        isActive={pageNum === currentPage}
                        onClick={() => setCurrentPage(pageNum)}
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
                return null;
              })}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default Directory;
