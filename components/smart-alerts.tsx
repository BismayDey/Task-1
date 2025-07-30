"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, Info, TrendingUp, Bell } from "lucide-react"

const alerts = [
  {
    id: 1,
    type: "success",
    title: "Campaign Goal Achieved",
    message: "Summer Sale campaign reached 120% of target revenue",
    priority: "low",
    timestamp: "5 minutes ago",
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    id: 2,
    type: "warning",
    title: "Budget Alert",
    message: "Brand Awareness campaign has used 85% of allocated budget",
    priority: "medium",
    timestamp: "12 minutes ago",
    icon: AlertTriangle,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
  },
  {
    id: 3,
    type: "info",
    title: "Performance Insight",
    message: "Mobile traffic increased by 23% compared to last week",
    priority: "low",
    timestamp: "1 hour ago",
    icon: TrendingUp,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
]

export function SmartAlerts() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive"
      case "medium":
        return "secondary"
      case "low":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <Card className="hover:shadow-xl transition-all duration-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          Smart Alerts
          <Badge variant="secondary" className="ml-auto">
            {alerts.length} Active
          </Badge>
        </CardTitle>
        <CardDescription>AI-powered notifications and insights</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert) => {
            const Icon = alert.icon
            return (
              <div
                key={alert.id}
                className={`p-3 rounded-lg ${alert.bgColor} border-l-4 border-l-current ${alert.color} hover:shadow-md transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex items-start space-x-3">
                  <Icon className={`h-4 w-4 mt-0.5 ${alert.color} group-hover:scale-110 transition-transform`} />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{alert.title}</h4>
                      <Badge variant={getPriorityColor(alert.priority)} className="text-xs">
                        {alert.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                      <Button size="sm" variant="ghost" className="text-xs h-6 px-2">
                        Dismiss
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-4 pt-3 border-t">
          <Button variant="outline" className="w-full bg-transparent" size="sm">
            <Info className="mr-2 h-4 w-4" />
            Configure Alert Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
