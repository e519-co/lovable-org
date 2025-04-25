
import React from 'react';
import OrgChartNode from './OrgChartNode';

interface PeopleOrgChartProps {
  searchQuery?: string;
  selectedDivision?: string;
}

const PeopleOrgChart: React.FC<PeopleOrgChartProps> = ({ 
  searchQuery = "", 
  selectedDivision = "All Divisions" 
}) => {
  // Demo data
  const orgData = {
    name: "John Doe",
    title: "CEO",
    division: "Executive",
    children: [
      {
        name: "Sarah Smith",
        title: "Head of Technology",
        division: "Technology",
        children: [
          {
            name: "Mike Johnson",
            title: "Software Development Lead",
            division: "Technology",
            children: [
              { name: "Alex Chen", title: "Senior Developer", division: "Technology" },
              { name: "Maria Garcia", title: "Frontend Developer", division: "Technology" }
            ]
          },
          {
            name: "Emily Brown",
            title: "UX Lead",
            division: "Technology",
            children: [
              { name: "Chris Taylor", title: "UI Designer", division: "Technology" }
            ]
          }
        ]
      },
      {
        name: "David Wilson",
        title: "Head of Operations",
        division: "Operations",
        children: [
          {
            name: "Lisa Anderson",
            title: "HR Director",
            division: "Operations",
            children: [
              { name: "Tom Baker", title: "HR Manager", division: "Operations" }
            ]
          },
          {
            name: "Robert Martinez",
            title: "Finance Director",
            division: "Operations",
            children: [
              { name: "Emma White", title: "Financial Analyst", division: "Operations" }
            ]
          }
        ]
      },
      {
        name: "Jennifer Lee",
        title: "Head of Sales",
        division: "Sales",
        children: [
          {
            name: "Daniel Kim",
            title: "Sales Director",
            division: "Sales",
            children: [
              { name: "Rachel Green", title: "Account Executive", division: "Sales" }
            ]
          }
        ]
      },
      {
        name: "Michael Thompson",
        title: "Head of Marketing",
        division: "Marketing",
        children: [
          {
            name: "Amanda Clark",
            title: "Marketing Director",
            division: "Marketing",
            children: [
              { name: "Brian Moore", title: "Marketing Specialist", division: "Marketing" }
            ]
          }
        ]
      }
    ]
  };

  // Recursive function to filter the org tree
  const filterOrgTree = (node) => {
    // Check if the current node matches the search query
    const nodeMatches = searchQuery ? 
      node.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      node.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    
    // Check if the current node matches the selected division
    const divisionMatches = selectedDivision === "All Divisions" || 
      node.division === selectedDivision;
    
    // If the node has children, filter them recursively
    let filteredChildren = [];
    if (node.children && node.children.length > 0) {
      filteredChildren = node.children
        .map(filterOrgTree)
        .filter(child => child !== null);
    }
    
    // Return the node if it matches or if any of its children match
    if ((nodeMatches && divisionMatches) || filteredChildren.length > 0) {
      return {
        ...node,
        children: filteredChildren.length > 0 ? filteredChildren : undefined
      };
    }
    
    return null;
  };

  // Filter the org data
  const filteredOrgData = filterOrgTree(orgData);

  // If nothing matches, show a message
  if (!filteredOrgData) {
    return (
      <div className="p-8 text-center text-gray-500">
        No people found matching your criteria
      </div>
    );
  }

  // Recursive function to render the org chart
  const renderOrgNode = (node) => {
    return (
      <OrgChartNode 
        key={node.name} 
        name={node.name} 
        title={node.title}
      >
        {node.children && node.children.length > 0 && (
          <div className="flex flex-wrap gap-8 justify-center">
            {node.children.map(renderOrgNode)}
          </div>
        )}
      </OrgChartNode>
    );
  };

  return (
    <div className="p-8">
      {renderOrgNode(filteredOrgData)}
    </div>
  );
};

export default PeopleOrgChart;
