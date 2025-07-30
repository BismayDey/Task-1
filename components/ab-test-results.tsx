"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TestTube, TrendingUp, CheckCircle, AlertCircle, Play, Pause, Square } from "lucide-react"

const activeTests = [
  {
    id: 1,
    name: "Homepage Hero CTA",
    status: "running",
    confidence: 95,
    improvement: "+12.5%",
    traffic: "50/50",
    duration: "14 days",
    significance: true,
    variants: {
      control: { name: "Original Button", conversions: 245, visitors: 5000, rate: 4.9 },
      variant: { name: "New CTA Text", conversions: 276, visitors: 5000, rate: 5.5 },
    },
  },
  {
    id: 2,
    name: "Pricing Page Layout",
    status: "completed",
    confidence: 87,
    improvement: "+8.3%",
    traffic: "50/50",
    duration: "21 days",
    significance: true,
    variants: {
      control: { name: "Current Layout", conversions: 189, visitors: 3500, rate: 5.4 },
      variant: { name: "Simplified Design", conversions: 205, visitors: 3500, rate: 5.9 },
    },
  },
  {
    id: 3,
    name: "Email Subject Lines",
    status: "running",
    confidence: 72,
    improvement: "+3.1%",
    traffic: "50/50",
    duration: "7 days",
    significance: false,
    variants: {
      control: { name: "Standard Subject", conversions: 1240, visitors: 25000, rate: 5.0 },
      variant: { name: "Personalized Subject", conversions: 1278, visitors: 25000, rate: 5.1 },
    },
  },
]

export function ABTestResults() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "running":
        return <Play className="h-4 w-4 text-green-500" />
      case "paused":
        return <Pause className="h-4 w-4 text-yellow-500" />
      case "completed":
        return <Square className="h-4 w-4 text-blue-500" />
      default:
        return <TestTube className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TestTube className="h-6 w-6 text-primary" />
            A/B Testing Dashboard
            <Badge variant="secondary" className="ml-auto">
              {activeTests.filter((test) => test.status === "running").length} Active Tests
            </Badge>
          </CardTitle>
          <CardDescription>Comprehensive A/B testing results with statistical significance analysis</CardDescription>
        </CardHeader>
      </Card>

      <div className="space-y-4">
        {activeTests.map((test) => (
          <Card key={test.id} className="hover:shadow-xl transition-all duration-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(test.status)}
                    <CardTitle className="text-lg">{test.name}</CardTitle>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Duration: {test.duration}</span>
                    <span>Traffic Split: {test.traffic}</span>
                    <Badge variant={test.status === "running" ? "default" : "secondary"} className="text-xs">
                      {test.status}
                    </Badge>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <div className="flex items-center space-x-2">
                    {test.significance ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-yellow-500" />
                    )}
                    <span className="text-lg font-bold text-primary">{test.improvement}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{test.confidence}% confidence</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                {/* Control */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">Control</h4>
                    <Badge variant="outline">Original</Badge>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h5 className="font-medium mb-2">{test.variants.control.name}</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Conversions:</span>
                        <span className="font-medium">{test.variants.control.conversions}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Visitors:</span>
                        <span className="font-medium">{test.variants.control.visitors.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Conversion Rate:</span>
                        <span className="font-bold">{test.variants.control.rate}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Variant */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">Variant</h4>
                    <Badge variant="default">Test</Badge>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <h5 className="font-medium mb-2">{test.variants.variant.name}</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Conversions:</span>
                        <span className="font-medium">{test.variants.variant.conversions}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Visitors:</span>
                        <span className="font-medium">{test.variants.variant.visitors.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Conversion Rate:</span>
                        <span className="font-bold text-primary">{test.variants.variant.rate}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress and Actions */}
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Statistical Confidence</span>
                    <span>{test.confidence}%</span>
                  </div>
                  <Progress value={test.confidence} className="h-2" />
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="text-sm text-muted-foreground">
                    {test.significance ? "✅ Statistically significant" : "⏳ Gathering more data..."}
                  </div>
                  <div className="flex space-x-2">
                    {test.status === "running" && (
                      <>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          Pause Test
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          Stop & Implement
                        </Button>
                      </>
                    )}
                    <Button size="sm" className="hover:scale-105 transition-transform">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="hover:shadow-xl transition-all duration-500">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <div>
                <div className="text-2xl font-bold">23</div>
                <div className="text-sm text-muted-foreground">Tests Completed</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-500">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <div>
                <div className="text-2xl font-bold">18</div>
                <div className="text-sm text-muted-foreground">Significant Results</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-500">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TestTube className="h-5 w-5 text-purple-500" />
              <div>
                <div className="text-2xl font-bold">+15.7%</div>
                <div className="text-sm text-muted-foreground">Avg Improvement</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-500">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-orange-500" />
              <div>
                <div className="text-2xl font-bold">$127K</div>
                <div className="text-sm text-muted-foreground">Revenue Impact</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
