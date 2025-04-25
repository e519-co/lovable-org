
import React from 'react';
import OrgChartNode from './OrgChartNode';

const DepartmentOrgChart = () => {
  return (
    <div className="p-8">
      <OrgChartNode name="Acme Corp" title="Company">
        <div className="flex gap-8">
          <OrgChartNode name="Technology Division" title="Division">
            <div className="flex gap-8">
              <OrgChartNode name="Software Development" title="Department" />
              <OrgChartNode name="IT Infrastructure" title="Department" />
              <OrgChartNode name="Data Science" title="Department" />
            </div>
          </OrgChartNode>
          <OrgChartNode name="Operations Division" title="Division">
            <div className="flex gap-8">
              <OrgChartNode name="Human Resources" title="Department" />
              <OrgChartNode name="Finance" title="Department" />
              <OrgChartNode name="Legal" title="Department" />
            </div>
          </OrgChartNode>
        </div>
      </OrgChartNode>
    </div>
  );
};

export default DepartmentOrgChart;
