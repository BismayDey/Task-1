"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Users,
  DollarSign,
  Globe,
  Plus,
  Settings,
  RefreshCw,
  MoreHorizontal,
  Eye,
  EyeOff,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Widget {
  id: string
  title: string
  type: "metric" | "chart" | "table" | "map"
  size: "small" | "medium" | "large"
  visible: boolean
  data: any
  refreshRate: number
  lastUpdated: Date
}

const defaultWidgets: Widget[] = [
  {
    id: "revenue-metric",
    title: "Total Revenue",
    type: "metric",
    size: "small",
    visible: true,
    data: { value: "$847,392", change: "+12.5%", trend: "up" },
    refreshRate: 30,
    lastUpdated: new Date(),
  },
  {
    id: "users-metric",
    title: "Active Users",
    type: "metric",
    size: "small",
    visible: true,
    data: { value: "24,847", change: "+8.2%", trend: "up" },
    refreshRate: 30,
    lastUpdated: new Date(),
  },
  {
    id: "conversion-chart",
    title: "Conversion Funnel",
    type: "chart",
    size: "medium",
    visible: true,
    data: { chartType: "funnel", dataPoints: 12 },
    refreshRate: 60,
    lastUpdated: new Date(),
  },
  {
    id: "geographic-map",
    title: "Geographic Distribution",
    type: "map",
    size: "large",
    visible: true,
    data: { regions: 47, topRegion: "North America" },
    refreshRate: 300,
    lastUpdated: new Date(),
  },
]

export function WidgetSystem() {
  const [widgets, setWidgets] = useState<Widget[]>(defaultWidgets)
  const [isEditMode, setIsEditMode] = useState(false)

  const toggleWidget = (id: string) => {
    setWidgets((prev) => prev.map((widget) => (widget.id === id ? { ...widget, visible: !widget.visible } : widget)))
  }

  const resizeWidget = (id: string, newSize: "small" | "medium" | "large") => {
    setWidgets((prev) => prev.map((widget) => (widget.id === id ? { ...widget, size: newSize } : widget)))
  }

  const refreshWidget = (id: string) => {
    setWidgets((prev) => prev.map((widget) => (widget.id === id ? { ...widget, lastUpdated: new Date() } : widget)))
  }

  const getWidgetIcon = (type: string) => {
    switch (type) {
      case "metric":
        return DollarSign
      case "chart":
        return BarChart3
      case "table":
        return Users
      case "map":
        return Globe
      default:
        return BarChart3
    }
  }

  const getGridClass = (size: string) => {
    switch (size) {
      case "small":
        return "col-span-1"
      case "medium":
        return "col-span-2"
      case "large":
        return "col-span-3"
      default:
        return "col-span-1"
    }
  }

  return (
    <div className="space-y-6">
      {/* Widget Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">Dashboard Widgets</h3>
          <Badge variant="secondary">{widgets.filter((w) => w.visible).length} Active</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setIsEditMode(!isEditMode)} className="bg-transparent">
            <Settings className="mr-2 h-4 w-4" />
            {isEditMode ? "Done" : "Edit"}
          </Button>
          <Button variant="outline" size="sm" className="bg-transparent">
            <Plus className="mr-2 h-4 w-4" />
            Add Widget
          </Button>
        </div>
      </div>

      {/* Widget Grid */}
      <div className="grid grid-cols-4 gap-4">
        {widgets
          .filter((widget) => widget.visible)
          .map((widget) => {
            const Icon = getWidgetIcon(widget.type)

            return (
              <Card
                key={widget.id}
                className={`${getGridClass(widget.size)} hover:shadow-lg transition-all duration-300 border-primary/20 ${
                  isEditMode ? "ring-2 ring-primary/50" : ""
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-primary" />
                      <CardTitle className="text-sm">{widget.title}</CardTitle>
                    </div>

                    {isEditMode && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => resizeWidget(widget.id, "small")}>
                            Small Size
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => resizeWidget(widget.id, "medium")}>
                            Medium Size
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => resizeWidget(widget.id, "large")}>
                            Large Size
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => refreshWidget(widget.id)}>
                            <RefreshCw className="mr-2 h-3 w-3" />
                            Refresh
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toggleWidget(widget.id)}>
                            <EyeOff className="mr-2 h-3 w-3" />
                            Hide Widget
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Updated {widget.lastUpdated.toLocaleTimeString()}</span>
                    <Badge variant="outline" className="text-xs">
                      {widget.refreshRate}s
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  {widget.type === "metric" && (
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">{widget.data.value}</div>
                      <div className="flex items-center gap-2">
                        <Badge variant={widget.data.trend === "up" ? "default" : "destructive"} className="text-xs">
                          {widget.data.change}
                        </Badge>
                        <span className="text-xs text-muted-foreground">vs last period</span>
                      </div>
                    </div>
                  )}

                  {widget.type === "chart" && (
                    <div className="space-y-3">
                      <div className="h-24 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-8 w-8 text-primary opacity-50" />
                      </div>
                      <div className="text-sm text-muted-foreground">{widget.data.dataPoints} data points</div>
                    </div>
                  )}

                  {widget.type === "map" && (
                    <div className="space-y-3">
                      <div className="h-24 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg flex items-center justify-center">
                        <Globe className="h-8 w-8 text-green-500 opacity-50" />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {widget.data.regions} regions • Top: {widget.data.topRegion}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
      </div>

      {/* Hidden Widgets */}
      {isEditMode && widgets.some((w) => !w.visible) && (
        <Card className="border-dashed border-primary/30">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <EyeOff className="h-4 w-4" />
              Hidden Widgets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {widgets
                .filter((widget) => !widget.visible)
                .map((widget) => (
                  <Button
                    key={widget.id}
                    variant="outline"
                    size="sm"
                    onClick={() => toggleWidget(widget.id)}
                    className="bg-transparent"
                  >
                    <Eye className="mr-2 h-3 w-3" />
                    {widget.title}
                  </Button>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
