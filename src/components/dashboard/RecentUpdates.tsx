
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, CalendarDays } from 'lucide-react';

const updates = [
  {
    title: "New Engineering Lead",
    description: "Sarah Chen promoted to Engineering Lead for the Cloud Platform team",
    date: "2 days ago",
    type: "announcement"
  },
  {
    title: "Q2 Goals Meeting",
    description: "Company-wide Q2 goals review session scheduled",
    date: "Tomorrow",
    type: "event"
  },
  {
    title: "Customer Success Milestone",
    description: "Reached 95% customer satisfaction score this quarter",
    date: "1 week ago",
    type: "achievement"
  }
];

export function RecentUpdates() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Recent Updates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {updates.map((update, index) => (
            <div key={index} className="flex items-start space-x-4">
              {update.type === 'event' ? (
                <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
              ) : (
                <MessageSquare className="mt-1 h-5 w-5 text-purple-500" />
              )}
              <div className="space-y-1">
                <p className="text-sm font-medium">{update.title}</p>
                <p className="text-sm text-muted-foreground">
                  {update.description}
                </p>
                <p className="text-xs text-muted-foreground">{update.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
