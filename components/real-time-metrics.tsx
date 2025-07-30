"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Users, DollarSign, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

interface RealTimeMetricsProps {
  data: {
    activeUsers: number
    revenue: number
    conversions: number
    growth: number
  }
}

export function RealTimeMetrics({ data }: RealTimeMetricsProps) {
  const [previousData, setPreviousData] = useState(data)
  const [changes, setChanges] = useState({
    activeUsers: 0,
    revenue: 0,
    conversions: 0,
    growth: 0,
  })

  useEffect(() => {
    setChanges({
      activeUsers: data.activeUsers - previousData.activeUsers,
      revenue: data.revenue - previousData.revenue,
      conversions: data.conversions - previousData.conversions,
      growth: data.growth - previousData.growth,
    })
    setPreviousData(data)
  }, [data])

  const formatChange = (change: number, isPercentage = false) => {
    const sign = change > 0 ? "+" : ""
    const suffix = isPercentage ? "%" : ""
    return `${sign}${change.toFixed(isPercentage ? 1 : 0)}${suffix}`
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">Active Users</CardTitle>
          <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-800 dark:text-green-200">
            {data.activeUsers.toLocaleString()}
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <Badge variant={changes.activeUsers >= 0 ? "default" : "destructive"} className="text-xs">
              {formatChange(changes.activeUsers)}
            </Badge>
            <p className="text-xs text-green-600 dark:text-green-400">live updates</p>
          </div>
        </CardContent>
        <div className="absolute top-0 right-0 w-16 h-16 bg-green-200 dark:bg-green-800 rounded-full -mr-8 -mt-8 opacity-20" />
      </Card>

      <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">${data.revenue.toLocaleString()}</div>
          <div className="flex items-center space-x-2 mt-1">
            <Badge variant={changes.revenue >= 0 ? "default" : "destructive"} className="text-xs">
              {formatChange(changes.revenue)}
            </Badge>
            <p className="text-xs text-blue-600 dark:text-blue-400">real-time</p>
          </div>
        </CardContent>
        <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-full -mr-8 -mt-8 opacity-20" />
      </Card>

      <Card className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">Conversions</CardTitle>
          <Activity className="h-4 w-4 text-purple-600 dark:text-purple-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">
            {data.conversions.toLocaleString()}
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <Badge variant={changes.conversions >= 0 ? "default" : "destructive"} className="text-xs">
              {formatChange(changes.conversions)}
            </Badge>
            <p className="text-xs text-purple-600 dark:text-purple-400">streaming</p>
          </div>
        </CardContent>
        <div className="absolute top-0 right-0 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full -mr-8 -mt-8 opacity-20" />
      </Card>

      <Card className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-orange-700 dark:text-orange-300">Growth Rate</CardTitle>
          <TrendingUp className="h-4 w-4 text-orange-600 dark:text-orange-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-800 dark:text-orange-200">{data.growth.toFixed(1)}%</div>
          <div className="flex items-center space-x-2 mt-1">
            <Badge variant={changes.growth >= 0 ? "default" : "destructive"} className="text-xs">
              {formatChange(changes.growth, true)}
            </Badge>
            <p className="text-xs text-orange-600 dark:text-orange-400">trending</p>
          </div>
        </CardContent>
        <div className="absolute top-0 right-0 w-16 h-16 bg-orange-200 dark:bg-orange-800 rounded-full -mr-8 -mt-8 opacity-20" />
      </Card>
    </div>
  )
}
