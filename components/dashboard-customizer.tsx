"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Settings, Palette, Layout, Eye, Save } from "lucide-react"

const widgetOptions = [
  { id: "metrics", name: "Metrics Cards", enabled: true },
  { id: "revenue", name: "Revenue Chart", enabled: true },
  { id: "conversions", name: "Conversions Chart", enabled: true },
  { id: "traffic", name: "Traffic Sources", enabled: true },
  { id: "activity", name: "Recent Activity", enabled: true },
  { id: "campaigns", name: "Top Campaigns", enabled: true },
  { id: "heatmap", name: "Heatmap Chart", enabled: false },
  { id: "geographic", name: "Geographic Map", enabled: false },
  { id: "funnel", name: "Funnel Analysis", enabled: false },
]

const colorThemes = [
  { name: "Default", primary: "#3b82f6", secondary: "#64748b" },
  { name: "Purple", primary: "#8b5cf6", secondary: "#a855f7" },
  { name: "Green", primary: "#10b981", secondary: "#059669" },
  { name: "Orange", primary: "#f59e0b", secondary: "#d97706" },
  { name: "Pink", primary: "#ec4899", secondary: "#db2777" },
]

export function DashboardCustomizer() {
  const [isOpen, setIsOpen] = useState(false)
  const [widgets, setWidgets] = useState(widgetOptions)
  const [selectedTheme, setSelectedTheme] = useState("Default")
  const [refreshInterval, setRefreshInterval] = useState([30])
  const [animationsEnabled, setAnimationsEnabled] = useState(true)
  const [compactMode, setCompactMode] = useState(false)

  const toggleWidget = (id: string) => {
    setWidgets((prev) => prev.map((widget) => (widget.id === id ? { ...widget, enabled: !widget.enabled } : widget)))
  }

  const enabledWidgetsCount = widgets.filter((w) => w.enabled).length

  if (!isOpen) {
    return (
      <Button onClick={() => setIsOpen(true)} variant="outline" size="sm" className="bg-transparent border-primary/20">
        <Settings className="mr-2 h-4 w-4" />
        Customize
      </Button>
    )
  }

  return (
    <Card className="border-primary/20 bg-background/95 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Dashboard Customizer
            </CardTitle>
            <CardDescription>Personalize your dashboard experience</CardDescription>
          </div>
          <Button onClick={() => setIsOpen(false)} variant="ghost" size="sm">
            ×
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Layout Settings */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Layout className="h-4 w-4 text-primary" />
            <Label className="text-sm font-medium">Layout Settings</Label>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="compact-mode">Compact Mode</Label>
            <Switch id="compact-mode" checked={compactMode} onCheckedChange={setCompactMode} />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="animations">Enable Animations</Label>
            <Switch id="animations" checked={animationsEnabled} onCheckedChange={setAnimationsEnabled} />
          </div>
        </div>

        {/* Color Theme */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4 text-primary" />
            <Label className="text-sm font-medium">Color Theme</Label>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {colorThemes.map((theme) => (
              <Button
                key={theme.name}
                variant={selectedTheme === theme.name ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTheme(theme.name)}
                className="justify-start bg-transparent"
              >
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: theme.primary }} />
                {theme.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Refresh Interval */}
        <div className="space-y-3">
          <Label>Auto Refresh Interval (seconds)</Label>
          <div className="px-2">
            <Slider
              value={refreshInterval}
              onValueChange={setRefreshInterval}
              min={5}
              max={300}
              step={5}
              className="w-full"
            />
          </div>
          <div className="text-sm text-muted-foreground text-center">{refreshInterval[0]} seconds</div>
        </div>

        {/* Widget Visibility */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-primary" />
              <Label className="text-sm font-medium">Visible Widgets</Label>
            </div>
            <Badge variant="secondary">
              {enabledWidgetsCount}/{widgets.length}
            </Badge>
          </div>

          <div className="space-y-2 max-h-48 overflow-y-auto">
            {widgets.map((widget) => (
              <div
                key={widget.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <Label htmlFor={widget.id} className="cursor-pointer">
                  {widget.name}
                </Label>
                <Switch id={widget.id} checked={widget.enabled} onCheckedChange={() => toggleWidget(widget.id)} />
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Presets */}
        <div className="space-y-3">
          <Label>Dashboard Presets</Label>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="bg-transparent">
              Executive View
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent">
              Marketing Focus
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent">
              Sales Dashboard
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent">
              Analytics Deep Dive
            </Button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t">
          <Button variant="outline" size="sm" className="bg-transparent">
            Reset to Default
          </Button>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="bg-transparent">
              <Save className="mr-2 h-4 w-4" />
              Save Preset
            </Button>
            <Button size="sm">Apply Changes</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
