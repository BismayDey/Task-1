"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Activity } from "lucide-react"

const activities = [
  {
    user: "Sarah Johnson",
    action: "completed purchase",
    campaign: "Summer Sale",
    value: "$299",
    time: "2 minutes ago",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    user: "Mike Chen",
    action: "signed up",
    campaign: "Newsletter",
    value: "Lead",
    time: "5 minutes ago",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    user: "Emma Davis",
    action: "clicked ad",
    campaign: "Brand Awareness",
    value: "CTR",
    time: "8 minutes ago",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    user: "Alex Rodriguez",
    action: "downloaded resource",
    campaign: "Content Marketing",
    value: "PDF",
    time: "12 minutes ago",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

export function RecentActivity() {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          Recent Activity
        </CardTitle>
        <CardDescription>Latest user interactions and conversions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
            >
              <Avatar className="h-8 w-8 group-hover:scale-110 transition-transform">
                <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {activity.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none group-hover:text-primary transition-colors">
                  {activity.user}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.action} • {activity.campaign}
                </p>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <Badge variant="outline" className="text-xs">
                  {activity.value}
                </Badge>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
