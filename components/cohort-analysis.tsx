"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, TrendingUp } from "lucide-react"

const cohortData = [
  {
    cohort: "Jan 2024",
    size: 1250,
    retention: {
      week1: 85,
      week2: 72,
      week3: 65,
      week4: 58,
      week8: 45,
      week12: 38,
    },
  },
  {
    cohort: "Feb 2024",
    size: 1450,
    retention: {
      week1: 88,
      week2: 75,
      week3: 68,
      week4: 62,
      week8: 48,
      week12: 41,
    },
  },
  {
    cohort: "Mar 2024",
    size: 1320,
    retention: {
      week1: 82,
      week2: 69,
      week3: 61,
      week4: 55,
      week8: 42,
      week12: 35,
    },
  },
  {
    cohort: "Apr 2024",
    size: 1680,
    retention: {
      week1: 90,
      week2: 78,
      week3: 71,
      week4: 65,
      week8: 52,
      week12: null,
    },
  },
  {
    cohort: "May 2024",
    size: 1890,
    retention: {
      week1: 92,
      week2: 80,
      week3: 74,
      week4: 68,
      week8: null,
      week12: null,
    },
  },
]

const weeks = ["week1", "week2", "week3", "week4", "week8", "week12"]
const weekLabels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 8", "Week 12"]

export function CohortAnalysis() {
  const getRetentionColor = (value: number | null) => {
    if (value === null) return "bg-gray-100 dark:bg-gray-800"
    if (value >= 80) return "bg-green-500"
    if (value >= 60) return "bg-green-400"
    if (value >= 40) return "bg-yellow-400"
    if (value >= 20) return "bg-orange-400"
    return "bg-red-400"
  }

  const getTextColor = (value: number | null) => {
    if (value === null) return "text-gray-400"
    if (value >= 60) return "text-white"
    return "text-gray-800"
  }

  return (
    <div className="space-y-6">
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Cohort Retention Analysis
          </CardTitle>
          <CardDescription>
            Track user retention patterns across different time periods to understand customer lifecycle
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="hover:shadow-xl transition-all duration-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Retention Heatmap
          </CardTitle>
          <CardDescription>Percentage of users returning in each time period</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Header */}
              <div className="grid grid-cols-8 gap-2 mb-4">
                <div className="font-medium text-sm">Cohort</div>
                <div className="font-medium text-sm text-center">Size</div>
                {weekLabels.map((week) => (
                  <div key={week} className="font-medium text-sm text-center">
                    {week}
                  </div>
                ))}
              </div>

              {/* Data rows */}
              {cohortData.map((cohort, index) => (
                <div key={cohort.cohort} className="grid grid-cols-8 gap-2 mb-2">
                  <div className="font-medium text-sm py-2">{cohort.cohort}</div>
                  <div className="text-sm text-center py-2 font-medium">{cohort.size.toLocaleString()}</div>
                  {weeks.map((week) => {
                    const value = cohort.retention[week as keyof typeof cohort.retention]
                    return (
                      <div
                        key={week}
                        className={`text-sm text-center py-2 px-1 rounded font-medium transition-all hover:scale-105 cursor-pointer ${getRetentionColor(value)} ${getTextColor(value)}`}
                        title={value ? `${value}% retention` : "No data"}
                      >
                        {value ? `${value}%` : "-"}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Retention Rate:</span>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-red-400 rounded"></div>
                <span className="text-xs">Low</span>
                <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                <span className="text-xs">Medium</span>
                <div className="w-4 h-4 bg-green-400 rounded"></div>
                <span className="text-xs">High</span>
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-xs">Excellent</span>
              </div>
            </div>
            <Badge variant="outline">Updated hourly</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="hover:shadow-xl transition-all duration-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Best Performing Cohort
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">May 2024</div>
            <p className="text-sm text-muted-foreground">92% Week 1 retention</p>
            <div className="mt-2">
              <Badge variant="secondary">1,890 users</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Average Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Week 1:</span>
                <span className="font-medium">87.4%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Week 4:</span>
                <span className="font-medium">61.6%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Week 12:</span>
                <span className="font-medium">38.0%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="p-2 bg-green-50 dark:bg-green-950/20 rounded">
                <p className="font-medium text-green-700 dark:text-green-300">Strong Week 1 retention</p>
                <p className="text-green-600 dark:text-green-400">Above industry average</p>
              </div>
              <div className="p-2 bg-yellow-50 dark:bg-yellow-950/20 rounded">
                <p className="font-medium text-yellow-700 dark:text-yellow-300">Week 4 drop-off</p>
                <p className="text-yellow-600 dark:text-yellow-400">Opportunity for improvement</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
