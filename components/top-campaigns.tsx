"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy } from "lucide-react"

const campaigns = [
  {
    name: "Summer Sale 2024",
    revenue: "$45,230",
    progress: 89,
    status: "active",
    conversions: 1250,
  },
  {
    name: "Brand Awareness",
    revenue: "$32,100",
    progress: 67,
    status: "active",
    conversions: 890,
  },
  {
    name: "Product Launch",
    revenue: "$28,450",
    progress: 78,
    status: "completed",
    conversions: 756,
  },
  {
    name: "Holiday Special",
    revenue: "$19,800",
    progress: 45,
    status: "paused",
    conversions: 432,
  },
]

export function TopCampaigns() {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Top Campaigns
        </CardTitle>
        <CardDescription>Best performing campaigns this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {campaigns.map((campaign, index) => (
            <div
              key={campaign.name}
              className="space-y-2 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none group-hover:text-primary transition-colors">
                    {campaign.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{campaign.conversions} conversions</p>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <Badge
                    variant={
                      campaign.status === "active"
                        ? "default"
                        : campaign.status === "completed"
                          ? "secondary"
                          : "outline"
                    }
                    className="text-xs"
                  >
                    {campaign.status}
                  </Badge>
                  <span className="text-sm font-bold">{campaign.revenue}</span>
                </div>
              </div>
              <Progress value={campaign.progress} className="h-2" />
              <p className="text-xs text-muted-foreground text-right">{campaign.progress}% of goal</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
