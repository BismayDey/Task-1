"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe } from "lucide-react"

const geographicData = [
  { country: "United States", revenue: 324500, users: 45230, growth: 12.5, coordinates: [39.8283, -98.5795] },
  { country: "United Kingdom", revenue: 198200, users: 28940, growth: 8.3, coordinates: [55.3781, -3.436] },
  { country: "Germany", revenue: 156800, users: 22150, growth: 15.7, coordinates: [51.1657, 10.4515] },
  { country: "France", revenue: 134500, users: 19870, growth: 6.2, coordinates: [46.2276, 2.2137] },
  { country: "Canada", revenue: 98700, users: 14560, growth: 9.8, coordinates: [56.1304, -106.3468] },
  { country: "Australia", revenue: 87300, users: 12890, growth: 11.4, coordinates: [-25.2744, 133.7751] },
  { country: "Japan", revenue: 76500, users: 11230, growth: 7.9, coordinates: [36.2048, 138.2529] },
  { country: "Netherlands", revenue: 65400, users: 9870, growth: 13.2, coordinates: [52.1326, 5.2913] },
]

export function GeographicMap() {
  return (
    <div className="space-y-6">
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Geographic Performance Analysis
          </CardTitle>
          <CardDescription>Revenue and user distribution across global markets with growth trends</CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2 hover:shadow-xl transition-all duration-500">
          <CardHeader>
            <CardTitle>World Map Visualization</CardTitle>
            <CardDescription>Interactive revenue heatmap by region</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-lg p-8 h-96 overflow-hidden">
              {/* Simplified world map representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Globe className="h-24 w-24 text-primary mx-auto animate-pulse" />
                  <div className="text-lg font-medium text-muted-foreground">Interactive World Map</div>
                  <div className="text-sm text-muted-foreground">Revenue visualization by country</div>
                </div>
              </div>

              {/* Revenue indicators */}
              <div className="absolute top-4 left-4 space-y-2">
                <div className="flex items-center space-x-2 text-xs">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>High Revenue ($200K+)</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Medium Revenue ($100K-$200K)</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Low Revenue (&lt;$100K)</span>
                </div>
              </div>

              {/* Sample data points */}
              <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
              <div
                className="absolute top-1/2 left-1/3 w-3 h-3 bg-yellow-500 rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-2/3 right-1/3 w-2 h-2 bg-red-500 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-500">
          <CardHeader>
            <CardTitle>Top Markets</CardTitle>
            <CardDescription>Highest performing regions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {geographicData.slice(0, 6).map((country, index) => (
                <div
                  key={country.country}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{country.country}</p>
                      <p className="text-xs text-muted-foreground">{country.users.toLocaleString()} users</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${(country.revenue / 1000).toFixed(0)}K</p>
                    <Badge variant={country.growth > 10 ? "default" : "secondary"} className="text-xs">
                      +{country.growth}%
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="hover:shadow-xl transition-all duration-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Markets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">47</div>
            <p className="text-sm text-muted-foreground">Active countries</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Global Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">$1.2M</div>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Top Region</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">NA</div>
            <p className="text-sm text-muted-foreground">North America</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Growth Leader</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">DE</div>
            <p className="text-sm text-muted-foreground">+15.7% growth</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
