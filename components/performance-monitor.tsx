"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Activity, Cpu, HardDrive, Wifi, Zap } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const performanceData = [
  { time: "00:00", cpu: 45, memory: 62, network: 78, response: 120 },
  { time: "04:00", cpu: 52, memory: 58, network: 82, response: 110 },
  { time: "08:00", cpu: 68, memory: 71, network: 85, response: 95 },
  { time: "12:00", cpu: 75, memory: 78, network: 88, response: 85 },
  { time: "16:00", cpu: 82, memory: 85, network: 92, response: 78 },
  { time: "20:00", cpu: 71, memory: 76, network: 89, response: 88 },
  { time: "24:00", cpu: 58, memory: 69, network: 84, response: 102 },
]

const systemMetrics = [
  {
    name: "CPU Usage",
    value: 68,
    status: "good",
    icon: Cpu,
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    name: "Memory Usage",
    value: 74,
    status: "warning",
    icon: HardDrive,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
  },
  {
    name: "Network I/O",
    value: 89,
    status: "critical",
    icon: Wifi,
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-950/20",
  },
  {
    name: "Response Time",
    value: 85,
    status: "good",
    icon: Zap,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
]

export function PerformanceMonitor() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "text-green-500"
      case "warning":
        return "text-yellow-500"
      case "critical":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <Card className="hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary animate-pulse" />
          System Performance Monitor
          <Badge variant="outline" className="ml-auto">
            Real-time
          </Badge>
        </CardTitle>
        <CardDescription>Monitor system health and performance metrics in real-time</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* System Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {systemMetrics.map((metric) => {
            const Icon = metric.icon
            return (
              <div
                key={metric.name}
                className={`p-4 rounded-lg ${metric.bgColor} border-l-4 border-l-current ${metric.color} hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`h-5 w-5 ${metric.color}`} />
                  <Badge variant="outline" className={`text-xs ${getStatusColor(metric.status)}`}>
                    {metric.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">{metric.value}%</div>
                  <div className="text-sm font-medium">{metric.name}</div>
                  <Progress value={metric.value} className="h-2" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Performance Chart */}
        <div className="space-y-4">
          <h4 className="font-semibold text-sm">24-Hour Performance Trends</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <XAxis
                  dataKey="time"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-3 shadow-md">
                          <div className="grid gap-2">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">{label}</span>
                            {payload.map((entry, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                                <span className="font-medium capitalize">
                                  {entry.dataKey}: {entry.value}
                                  {entry.dataKey === "response" ? "ms" : "%"}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="cpu"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="memory"
                  stroke="hsl(var(--secondary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--secondary))", strokeWidth: 2, r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="network"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="response"
                  stroke="hsl(var(--destructive))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--destructive))", strokeWidth: 2, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* System Health Summary */}
        <div className="pt-4 border-t">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-green-600">99.9%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-lg font-bold text-blue-600">85ms</div>
              <div className="text-xs text-muted-foreground">Avg Response</div>
            </div>
            <div>
              <div className="text-lg font-bold text-purple-600">2.1M</div>
              <div className="text-xs text-muted-foreground">Requests/Day</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
