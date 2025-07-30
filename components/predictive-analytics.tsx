"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, TrendingUp, AlertTriangle, Target, Zap, DollarSign } from "lucide-react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const predictionData = [
  { month: "Jan", actual: 45000, predicted: 47000, confidence: 95 },
  { month: "Feb", actual: 52000, predicted: 54000, confidence: 93 },
  { month: "Mar", actual: 48000, predicted: 51000, confidence: 91 },
  { month: "Apr", actual: 61000, predicted: 63000, confidence: 89 },
  { month: "May", actual: null, predicted: 68000, confidence: 87 },
  { month: "Jun", actual: null, predicted: 72000, confidence: 85 },
  { month: "Jul", actual: null, predicted: 76000, confidence: 83 },
]

const predictions = [
  {
    title: "Revenue Forecast",
    prediction: "$2.4M",
    timeframe: "Next Quarter",
    confidence: 89,
    trend: "up",
    change: "+18.5%",
    icon: DollarSign,
    color: "text-green-500",
  },
  {
    title: "Customer Churn Risk",
    prediction: "12.3%",
    timeframe: "Next 30 days",
    confidence: 94,
    trend: "down",
    change: "-2.1%",
    icon: AlertTriangle,
    color: "text-red-500",
  },
  {
    title: "Conversion Rate",
    prediction: "8.7%",
    timeframe: "Next Month",
    confidence: 91,
    trend: "up",
    change: "+1.2%",
    icon: Target,
    color: "text-blue-500",
  },
]

export function PredictiveAnalytics() {
  return (
    <Card className="hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-primary animate-pulse" />
          Predictive Analytics
          <Badge variant="secondary" className="ml-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <Zap className="w-3 h-3 mr-1" />
            ML Powered
          </Badge>
        </CardTitle>
        <CardDescription>Machine learning predictions and forecasting models</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Revenue Prediction Chart */}
        <div className="space-y-4">
          <h4 className="font-semibold text-sm flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            Revenue Prediction Model
          </h4>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={predictionData}>
                <defs>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  tickFormatter={(value) => `$${value / 1000}k`}
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
                                <span className="font-medium">
                                  {entry.dataKey}: ${entry.value?.toLocaleString()}
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
                <Area
                  type="monotone"
                  dataKey="actual"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorActual)"
                />
                <Area
                  type="monotone"
                  dataKey="predicted"
                  stroke="hsl(var(--destructive))"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  fillOpacity={1}
                  fill="url(#colorPredicted)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Prediction Cards */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Key Predictions</h4>
          {predictions.map((prediction, index) => {
            const Icon = prediction.icon
            return (
              <div
                key={index}
                className="p-4 rounded-lg border bg-gradient-to-r from-muted/50 to-transparent hover:from-muted/80 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-full bg-muted group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-4 w-4 ${prediction.color}`} />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="font-semibold text-sm group-hover:text-primary transition-colors">
                        {prediction.title}
                      </h5>
                      <Badge variant={prediction.trend === "up" ? "default" : "destructive"} className="text-xs">
                        {prediction.change}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-primary">{prediction.prediction}</p>
                        <p className="text-xs text-muted-foreground">{prediction.timeframe}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{prediction.confidence}% confidence</p>
                        <div className="w-16 h-1 bg-muted rounded-full overflow-hidden mt-1">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-1000"
                            style={{ width: `${prediction.confidence}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Model Performance */}
        <div className="pt-4 border-t space-y-3">
          <h4 className="font-semibold text-sm">Model Performance</h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-lg font-bold text-primary">94.2%</p>
              <p className="text-xs text-muted-foreground">Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-primary">±3.5%</p>
              <p className="text-xs text-muted-foreground">Error Rate</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-primary">Real-time</p>
              <p className="text-xs text-muted-foreground">Updates</p>
            </div>
          </div>
          <Button className="w-full hover:scale-105 transition-transform">View Detailed Model Analysis</Button>
        </div>
      </CardContent>
    </Card>
  )
}
