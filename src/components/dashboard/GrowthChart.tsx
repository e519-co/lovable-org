
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', employees: 350 },
  { month: 'Feb', employees: 365 },
  { month: 'Mar', employees: 375 },
  { month: 'Apr', employees: 385 },
  { month: 'May', employees: 400 },
];

export function GrowthChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Organization Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer config={{}}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="employees" 
                stroke="#8B5CF6" 
                strokeWidth={2}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
