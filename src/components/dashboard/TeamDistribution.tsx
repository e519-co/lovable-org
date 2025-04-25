
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Product & Engineering', value: 180, color: '#8B5CF6' },
  { name: 'Growth', value: 85, color: '#D946EF' },
  { name: 'Customer Success', value: 75, color: '#F97316' },
  { name: 'People Operations', value: 60, color: '#0EA5E9' },
];

export function TeamDistribution() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Team Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer config={{}}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>
        <ChartLegend>
          <ChartLegendContent
            payload={data.map(item => ({
              value: item.name,
              color: item.color,
              payload: { color: item.color }
            }))}
          />
        </ChartLegend>
      </CardContent>
    </Card>
  );
}
