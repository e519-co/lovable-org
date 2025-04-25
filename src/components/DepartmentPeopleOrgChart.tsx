
import React, { useState } from 'react';
import OrgChartNode from './OrgChartNode';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const departments = [
  {
    name: "Software Development",
    head: { name: "Mike Johnson", title: "Software Development Lead" },
    people: [
      { name: "Alex Chen", title: "Senior Developer" },
      { name: "Maria Garcia", title: "Frontend Developer" }
    ]
  },
  {
    name: "IT Infrastructure",
    head: { name: "James Wilson", title: "Infrastructure Lead" },
    people: [
      { name: "Patricia Lee", title: "Systems Engineer" }
    ]
  },
  {
    name: "Data Science",
    head: { name: "Rachel Kim", title: "Data Science Lead" },
    people: [
      { name: "David Park", title: "ML Engineer" },
      { name: "Sophie Chen", title: "Data Analyst" }
    ]
  },
  {
    name: "Human Resources",
    head: { name: "Lisa Anderson", title: "HR Director" },
    people: [
      { name: "Tom Baker", title: "HR Manager" }
    ]
  },
  {
    name: "Finance",
    head: { name: "Robert Martinez", title: "Finance Director" },
    people: [
      { name: "Emma White", title: "Financial Analyst" }
    ]
  },
  {
    name: "Legal",
    head: { name: "Jennifer Murphy", title: "Legal Counsel" },
    people: [
      { name: "Michael Ross", title: "Compliance Officer" }
    ]
  }
];

const DepartmentPeopleOrgChart = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0].name);
  
  const currentDepartment = departments.find(dept => dept.name === selectedDepartment);

  return (
    <div className="space-y-8">
      <div className="w-[280px]">
        <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
          <SelectTrigger>
            <SelectValue placeholder="Select department" />
          </SelectTrigger>
          <SelectContent>
            {departments.map((dept) => (
              <SelectItem key={dept.name} value={dept.name}>
                {dept.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="p-8">
        <OrgChartNode 
          name={currentDepartment?.head.name || ""}
          title={`${currentDepartment?.name} - ${currentDepartment?.head.title}`}
        >
          <div className="flex gap-8">
            {currentDepartment?.people.map((person) => (
              <OrgChartNode
                key={person.name}
                name={person.name}
                title={person.title}
              />
            ))}
          </div>
        </OrgChartNode>
      </div>
    </div>
  );
};

export default DepartmentPeopleOrgChart;
