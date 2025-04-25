
import React from 'react';
import OrgChartNode from './OrgChartNode';

// Define props type
interface DepartmentOrgChartProps {
  searchQuery?: string;
  selectedDivision?: string;
}

const DepartmentOrgChart: React.FC<DepartmentOrgChartProps> = ({ 
  searchQuery = "", 
  selectedDivision = "All Divisions" 
}) => {
  // Demo data for divisions and departments
  const orgData = {
    name: "Acme Corp",
    title: "Company",
    divisions: [
      {
        name: "Technology Division",
        title: "Division",
        departments: [
          { name: "Software Development", title: "Department" },
          { name: "IT Infrastructure", title: "Department" },
          { name: "Data Science", title: "Department" },
        ]
      },
      {
        name: "Operations Division",
        title: "Division",
        departments: [
          { name: "Human Resources", title: "Department" },
          { name: "Finance", title: "Department" },
          { name: "Legal", title: "Department" },
        ]
      },
      {
        name: "Sales Division",
        title: "Division",
        departments: [
          { name: "Direct Sales", title: "Department" },
          { name: "Channel Partners", title: "Department" },
        ]
      },
      {
        name: "Marketing Division",
        title: "Division",
        departments: [
          { name: "Digital Marketing", title: "Department" },
          { name: "Brand Management", title: "Department" },
          { name: "Market Research", title: "Department" },
        ]
      }
    ]
  };

  // Filter the data based on search query and selected division
  const filteredDivisions = orgData.divisions.filter(division => {
    // Filter by selected division if not "All Divisions"
    if (selectedDivision !== "All Divisions" && !division.name.includes(selectedDivision)) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      // Check if division name contains search query
      if (division.name.toLowerCase().includes(query)) {
        return true;
      }
      // Check if any department name contains search query
      return division.departments.some(dept => dept.name.toLowerCase().includes(query));
    }
    
    return true;
  });

  // If we're searching and no divisions match, but departments might match
  const searchMatchedDepartments = searchQuery ? 
    orgData.divisions.flatMap(division => 
      division.departments
        .filter(dept => dept.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .map(dept => ({
          divisionName: division.name,
          department: dept
        }))
    ) : [];

  // Handle the case where no departments or divisions match the search
  if (filteredDivisions.length === 0 && searchMatchedDepartments.length === 0 && searchQuery) {
    return (
      <div className="p-8 text-center text-gray-500">
        No departments or divisions found matching "{searchQuery}"
      </div>
    );
  }

  return (
    <div className="p-8">
      <OrgChartNode name={orgData.name} title={orgData.title}>
        <div className="flex flex-wrap gap-8 justify-center">
          {filteredDivisions.map((division, idx) => (
            <OrgChartNode key={idx} name={division.name} title={division.title}>
              <div className="flex flex-wrap gap-8 justify-center">
                {division.departments.filter(dept => 
                  !searchQuery || dept.name.toLowerCase().includes(searchQuery.toLowerCase())
                ).map((department, deptIdx) => (
                  <OrgChartNode key={deptIdx} name={department.name} title={department.title} />
                ))}
              </div>
            </OrgChartNode>
          ))}
        </div>
      </OrgChartNode>
    </div>
  );
};

export default DepartmentOrgChart;
