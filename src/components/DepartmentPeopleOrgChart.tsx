
import React, { useState } from 'react';
import OrgChartNode from './OrgChartNode';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const departments = [
  {
    name: "Software Development",
    people: [
      { name: "Mike Johnson", title: "Software Development Lead" },
      { name: "Alex Chen", title: "Senior Developer" },
      { name: "Maria Garcia", title: "Frontend Developer" }
    ]
  },
  {
    name: "IT Infrastructure",
    people: [
      { name: "James Wilson", title: "Infrastructure Lead" },
      { name: "Patricia Lee", title: "Systems Engineer" }
    ]
  },
  {
    name: "Data Science",
    people: [
      { name: "Rachel Kim", title: "Data Science Lead" },
      { name: "David Park", title: "ML Engineer" },
      { name: "Sophie Chen", title: "Data Analyst" }
    ]
  },
  {
    name: "Human Resources",
    people: [
      { name: "Lisa Anderson", title: "HR Director" },
      { name: "Tom Baker", title: "HR Manager" }
    ]
  },
  {
    name: "Finance",
    people: [
      { name: "Robert Martinez", title: "Finance Director" },
      { name: "Emma White", title: "Financial Analyst" }
    ]
  },
  {
    name: "Legal",
    people: [
      { name: "Jennifer Murphy", title: "Legal Counsel" },
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
        <OrgChartNode name={currentDepartment?.name || ""} title="Department">
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
