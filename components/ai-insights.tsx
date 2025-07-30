"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Brain, TrendingUp, AlertTriangle, Lightbulb, Target, Zap, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"

const insights = [
  {
    id: 1,
    type: "opportunity",
    title: "Optimize Mobile Conversion Rate",
    description:
      "Mobile users have 23% lower conversion rate. Implementing mobile-first checkout could increase revenue by $45K/month.",
    impact: "High",
    confidence: 92,
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    action: "Implement mobile optimization",
  },
  {
    id: 2,
    type: "alert",
    title: "Anomaly Detected in Traffic Source",
    description:
      "Organic search traffic dropped 15% in the last 3 days. This could indicate SEO issues or algorithm changes.",
    impact: "Medium",
    confidence: 87,
    icon: AlertTriangle,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    action: "Investigate SEO performance",
  },
  {
    id: 3,
    type: "recommendation",
    title: "Expand High-Performing Campaign",
    description:
      "Summer Sale campaign shows 340% ROAS. Increasing budget by 50% could generate additional $28K revenue.",
    impact: "High",
    confidence: 95,
    icon: Lightbulb,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    action: "Increase campaign budget",
  },
  {
    id: 4,
    type: "prediction",
    title: "Revenue Forecast Update",
    description:
      "Based on current trends, Q4 revenue is projected to exceed targets by 12%. Consider scaling operations.",
    impact: "High",
    confidence: 89,
    icon: Target,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    action: "Plan capacity scaling",
  },
]

export function AIInsights() {
  const [selectedInsight, setSelectedInsight] = useState<number | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const generateNewInsights = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <div>
                <CardTitle className="text-xl">AI-Powered Insights</CardTitle>
                <CardDescription>Intelligent recommendations based on your data patterns</CardDescription>
              </div>
            </div>
            <Button onClick={generateNewInsights} disabled={isGenerating} className="bg-primary hover:bg-primary/90">
              {isGenerating ? (
                <>
                  <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-4 w-4" />
                  Generate New Insights
                </>
              )}
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {insights.map((insight) => {
          const Icon = insight.icon
          return (
            <Card
              key={insight.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                selectedInsight === insight.id ? "ring-2 ring-primary" : ""
              } ${insight.bgColor} border-l-4 border-l-current ${insight.color}`}
              onClick={() => setSelectedInsight(selectedInsight === insight.id ? null : insight.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${insight.bgColor}`}>
                      <Icon className={`h-5 w-5 ${insight.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{insight.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant={insight.impact === "High" ? "default" : "secondary"} className="text-xs">
                          {insight.impact} Impact
                        </Badge>
                        <span className="text-xs text-muted-foreground">{insight.confidence}% confidence</span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`h-4 w-4 transition-transform ${selectedInsight === insight.id ? "rotate-90" : ""}`}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>Confidence Level</span>
                    <span>{insight.confidence}%</span>
                  </div>
                  <Progress value={insight.confidence} className="h-2" />
                </div>
                {selectedInsight === insight.id && (
                  <div className="mt-4 pt-4 border-t">
                    <Button size="sm" className="w-full">
                      {insight.action}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="bg-gradient-to-r from-muted/50 to-muted/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI Performance Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">47</div>
              <div className="text-sm text-muted-foreground">Insights Generated</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">23</div>
              <div className="text-sm text-muted-foreground">Actions Taken</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">$127K</div>
              <div className="text-sm text-muted-foreground">Revenue Impact</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
