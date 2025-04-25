
import React from 'react';
import OrgChartNode from './OrgChartNode';

const OrgChart = () => {
  return (
    <div className="p-8">
      <OrgChartNode name="John Doe" title="CEO">
        <div className="flex gap-8">
          <OrgChartNode name="Sarah Smith" title="CTO">
            <div className="flex gap-8">
              <OrgChartNode name="Mike Johnson" title="Lead Developer" />
              <OrgChartNode name="Emily Brown" title="UX Designer" />
            </div>
          </OrgChartNode>
          <OrgChartNode name="David Wilson" title="CFO">
            <OrgChartNode name="Lisa Anderson" title="Financial Analyst" />
          </OrgChartNode>
        </div>
      </OrgChartNode>
    </div>
  );
};

export default OrgChart;
