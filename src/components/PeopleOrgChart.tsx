
import React from 'react';
import OrgChartNode from './OrgChartNode';

const PeopleOrgChart = () => {
  return (
    <div className="p-8">
      <OrgChartNode name="John Doe" title="CEO">
        <div className="flex gap-8">
          <OrgChartNode name="Sarah Smith" title="Head of Technology">
            <div className="flex gap-8">
              <OrgChartNode name="Mike Johnson" title="Software Development Lead">
                <div className="flex gap-8">
                  <OrgChartNode name="Alex Chen" title="Senior Developer" />
                  <OrgChartNode name="Maria Garcia" title="Frontend Developer" />
                </div>
              </OrgChartNode>
              <OrgChartNode name="Emily Brown" title="UX Lead">
                <OrgChartNode name="Chris Taylor" title="UI Designer" />
              </OrgChartNode>
            </div>
          </OrgChartNode>
          <OrgChartNode name="David Wilson" title="Head of Operations">
            <div className="flex gap-8">
              <OrgChartNode name="Lisa Anderson" title="HR Director">
                <OrgChartNode name="Tom Baker" title="HR Manager" />
              </OrgChartNode>
              <OrgChartNode name="Robert Martinez" title="Finance Director">
                <OrgChartNode name="Emma White" title="Financial Analyst" />
              </OrgChartNode>
            </div>
          </OrgChartNode>
        </div>
      </OrgChartNode>
    </div>
  );
};

export default PeopleOrgChart;
