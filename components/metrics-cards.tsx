"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, DollarSign, Users, Target } from "lucide-react"

const metrics = [
  {
    title: "Total Revenue",
    value: "$847,392",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "vs last month",
  },
  {
    title: "Active Users",
    value: "24,847",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    description: "vs last month",
  },
  {
    title: "Conversions",
    value: "3,247",
    change: "+15.3%",
    trend: "up",
    icon: Target,
    description: "vs last month",
  },
  {
    title: "Growth Rate",
    value: "18.7%",
    change: "-2.1%",
    trend: "down",
    icon: TrendingUp,
    description: "vs last month",
  },
]

export function MetricsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => {
        const Icon = metric.icon
        return (
          <Card
            key={metric.title}
            className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {metric.title}
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <Badge variant={metric.trend === "up" ? "default" : "destructive"} className="text-xs">
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {metric.change}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold group-hover:text-primary transition-colors">{metric.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
