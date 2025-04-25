
import React, { useState } from 'react';
import OrgChartNode from './OrgChartNode';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const departments = [
  {
    name: "Product & Engineering",
    head: { name: "Sarah Chen", title: "Chief Technology Officer" },
    people: [
      { name: "Michael Rodriguez", title: "VP of Engineering" },
      { name: "Emma Thompson", title: "Director of Product" },
      { name: "David Kim", title: "Principal Engineer" },
      { name: "Priya Patel", title: "Senior Product Manager" },
      { name: "James Wilson", title: "Engineering Manager" },
      { name: "Maria Garcia", title: "Senior Frontend Engineer" },
      { name: "Alex Johnson", title: "Backend Engineer" },
      { name: "Lisa Wong", title: "UX Designer" },
      { name: "Tom Anderson", title: "DevOps Lead" }
    ]
  },
  {
    name: "Growth",
    head: { name: "Marcus Taylor", title: "Chief Growth Officer" },
    people: [
      { name: "Jennifer Lee", title: "VP of Marketing" },
      { name: "Ryan Mitchell", title: "Head of Sales" },
      { name: "Sophie Martin", title: "Marketing Director" },
      { name: "Daniel Brown", title: "Sales Operations Manager" },
      { name: "Rachel Green", title: "Content Strategy Lead" },
      { name: "Chris Evans", title: "Senior Account Executive" },
      { name: "Amanda White", title: "Digital Marketing Manager" },
      { name: "Kevin Zhang", title: "Growth Analytics Lead" }
    ]
  },
  {
    name: "Customer Success",
    head: { name: "Emily Rodriguez", title: "VP of Customer Success" },
    people: [
      { name: "Nathan Parker", title: "Customer Success Director" },
      { name: "Sarah Thompson", title: "Implementation Lead" },
      { name: "Michael Chang", title: "Technical Support Manager" },
      { name: "Jessica Williams", title: "Customer Experience Lead" },
      { name: "Robert Turner", title: "Account Management Director" },
      { name: "Linda Martinez", title: "Training Specialist" },
      { name: "Andrew Wilson", title: "Customer Support Lead" }
    ]
  },
  {
    name: "People Operations",
    head: { name: "Diana Foster", title: "Chief People Officer" },
    people: [
      { name: "John Murphy", title: "HR Director" },
      { name: "Michelle Lee", title: "Talent Acquisition Manager" },
      { name: "Brian Cooper", title: "People Development Lead" },
      { name: "Grace Kim", title: "Culture & Engagement Manager" },
      { name: "Thomas Wright", title: "Compensation & Benefits Lead" },
      { name: "Anna Garcia", title: "DEI Program Manager" },
      { name: "Steven Chen", title: "HR Operations Specialist" }
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
          title={currentDepartment?.head.title || ""}
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
