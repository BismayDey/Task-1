"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, TrendingDown, TrendingUp, Activity, Zap } from "lucide-react"

const anomalies = [
  {
    id: 1,
    type: "traffic_drop",
    title: "Unusual Traffic Drop",
    description: "Organic search traffic decreased by 23% in the last 4 hours",
    severity: "high",
    confidence: 94,
    timestamp: "2 hours ago",
    impact: "Revenue impact: -$2,400",
    status: "investigating",
  },
  {
    id: 2,
    type: "conversion_spike",
    title: "Conversion Rate Spike",
    description: "Mobile conversion rate increased by 45% unexpectedly",
    severity: "medium",
    confidence: 87,
    timestamp: "1 hour ago",
    impact: "Revenue impact: +$1,800",
    status: "monitoring",
  },
  {
    id: 3,
    type: "bounce_rate",
    title: "High Bounce Rate",
    description: "Landing page bounce rate increased to 78% from 45%",
    severity: "medium",
    confidence: 91,
    timestamp: "30 minutes ago",
    impact: "Conversion impact: -15%",
    status: "new",
  },
]

export function AnomalyDetection() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-red-500 bg-red-50 dark:bg-red-950/20"
      case "medium":
        return "text-yellow-500 bg-yellow-50 dark:bg-yellow-950/20"
      case "low":
        return "text-blue-500 bg-blue-50 dark:bg-blue-950/20"
      default:
        return "text-gray-500 bg-gray-50 dark:bg-gray-950/20"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "default"
      case "investigating":
        return "secondary"
      case "monitoring":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <Card className="hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-orange-200 dark:border-orange-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-orange-500 animate-pulse" />
          Anomaly Detection
          <Badge variant="secondary" className="ml-auto bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <Zap className="w-3 h-3 mr-1" />
            AI Powered
          </Badge>
        </CardTitle>
        <CardDescription>Real-time detection of unusual patterns and behaviors</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {anomalies.map((anomaly) => (
          <div
            key={anomaly.id}
            className={`p-4 rounded-lg border-l-4 ${getSeverityColor(anomaly.severity)} transition-all duration-300 hover:shadow-md cursor-pointer group`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${getSeverityColor(anomaly.severity)}`}>
                  {anomaly.type === "traffic_drop" && <TrendingDown className="h-4 w-4" />}
                  {anomaly.type === "conversion_spike" && <TrendingUp className="h-4 w-4" />}
                  {anomaly.type === "bounce_rate" && <Activity className="h-4 w-4" />}
                </div>
                <div>
                  <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{anomaly.title}</h4>
                  <p className="text-xs text-muted-foreground">{anomaly.timestamp}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant={getStatusColor(anomaly.status)} className="text-xs capitalize">
                  {anomaly.status}
                </Badge>
                <Badge
                  variant={anomaly.severity === "high" ? "destructive" : "secondary"}
                  className="text-xs capitalize"
                >
                  {anomaly.severity}
                </Badge>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-3">{anomaly.description}</p>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs font-medium">{anomaly.impact}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-muted-foreground">Confidence:</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-1000"
                        style={{ width: `${anomaly.confidence}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium">{anomaly.confidence}%</span>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="hover:scale-105 transition-transform bg-transparent">
                Investigate
              </Button>
            </div>
          </div>
        ))}

        <div className="pt-4 border-t">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-primary">12</div>
              <div className="text-xs text-muted-foreground">Detected Today</div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-600">8</div>
              <div className="text-xs text-muted-foreground">Resolved</div>
            </div>
            <div>
              <div className="text-lg font-bold text-orange-600">97.3%</div>
              <div className="text-xs text-muted-foreground">Accuracy</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
