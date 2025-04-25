
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, MessageSquare } from 'lucide-react';

const metrics = [
  {
    name: "Product & Engineering",
    value: "180 people",
    trend: "+12%",
    isPositive: true,
    description: "Active projects: 24"
  },
  {
    name: "Growth",
    value: "85 people",
    trend: "+8%",
    isPositive: true,
    description: "Q2 revenue target: 95%"
  },
  {
    name: "Customer Success",
    value: "75 people",
    trend: "+5%",
    isPositive: true,
    description: "CSAT score: 94%"
  },
  {
    name: "People Operations",
    value: "60 people",
    trend: "-2%",
    isPositive: false,
    description: "Open positions: 12"
  }
];

export function DivisionKPIs() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.name}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.name}
            </CardTitle>
            {metric.isPositive ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              {metric.description}
            </p>
            <p className={`text-xs mt-1 ${metric.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {metric.trend} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
