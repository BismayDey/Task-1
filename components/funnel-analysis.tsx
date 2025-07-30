"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingDown, Users, MousePointer, CreditCard, CheckCircle } from "lucide-react"

const funnelData = [
  {
    stage: "Awareness",
    users: 100000,
    percentage: 100,
    dropoff: 0,
    icon: Users,
    color: "bg-blue-500",
    description: "Total visitors",
  },
  {
    stage: "Interest",
    users: 45000,
    percentage: 45,
    dropoff: 55,
    icon: MousePointer,
    color: "bg-green-500",
    description: "Engaged with content",
  },
  {
    stage: "Consideration",
    users: 18000,
    percentage: 18,
    dropoff: 27,
    icon: CreditCard,
    color: "bg-yellow-500",
    description: "Added to cart",
  },
  {
    stage: "Purchase",
    users: 7200,
    percentage: 7.2,
    dropoff: 10.8,
    icon: CheckCircle,
    color: "bg-purple-500",
    description: "Completed purchase",
  },
]

export function FunnelAnalysis() {
  return (
    <div className="space-y-6">
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="h-6 w-6 text-primary" />
            Conversion Funnel Analysis
          </CardTitle>
          <CardDescription>
            Track user journey from awareness to conversion with detailed drop-off analysis
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="hover:shadow-xl transition-all duration-500">
          <CardHeader>
            <CardTitle>Funnel Visualization</CardTitle>
            <CardDescription>Visual representation of user flow</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {funnelData.map((stage, index) => {
                const Icon = stage.icon
                const width = stage.percentage
                return (
                  <div key={stage.stage} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{stage.stage}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold">{stage.users.toLocaleString()}</span>
                        <Badge variant="outline">{stage.percentage}%</Badge>
                      </div>
                    </div>
                    <div className="relative">
                      <div
                        className={`h-12 ${stage.color} rounded-lg transition-all duration-1000 flex items-center justify-center text-white font-medium`}
                        style={{ width: `${width}%` }}
                      >
                        {stage.description}
                      </div>
                      {index > 0 && (
                        <div className="absolute -top-1 -right-1">
                          <Badge variant="destructive" className="text-xs">
                            -{stage.dropoff}%
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-500">
          <CardHeader>
            <CardTitle>Conversion Metrics</CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">7.2%</div>
                  <div className="text-sm text-muted-foreground">Overall Conversion</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">$127</div>
                  <div className="text-sm text-muted-foreground">Avg Order Value</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Awareness → Interest</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Interest → Consideration</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Consideration → Purchase</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-medium mb-2">Optimization Opportunities</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between p-2 bg-yellow-50 dark:bg-yellow-950/20 rounded">
                    <span>Improve cart abandonment</span>
                    <Badge variant="outline">High Impact</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-950/20 rounded">
                    <span>Optimize checkout flow</span>
                    <Badge variant="outline">Medium Impact</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
