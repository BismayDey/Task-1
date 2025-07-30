"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  BarChart3,
  TrendingUp,
  Target,
  Brain,
  Zap,
  ChevronRight,
  ChevronDown,
  Bookmark,
  Filter,
  ChevronLeft,
  Search,
  Bell,
  Users,
  Activity,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  MousePointer,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Share2,
  Download,
  Plus,
} from "lucide-react"

const sidebarItems = [
  {
    title: "Quick Stats",
    icon: BarChart3,
    items: [
      { name: "Revenue Today", value: "$12,450", change: "+8.2%", trend: "up", icon: DollarSign },
      { name: "Active Users", value: "2,847", change: "+12.5%", trend: "up", icon: Users },
      { name: "Conversion Rate", value: "3.2%", change: "-0.3%", trend: "down", icon: Target },
      { name: "Bounce Rate", value: "42.1%", change: "-5.2%", trend: "up", icon: MousePointer },
    ],
  },
  {
    title: "Top Campaigns",
    icon: Target,
    items: [
      { name: "Summer Sale", performance: 94, status: "active", budget: "$15,000", spent: "$12,800" },
      { name: "Brand Awareness", performance: 78, status: "active", budget: "$8,500", spent: "$6,200" },
      { name: "Product Launch", performance: 85, status: "paused", budget: "$12,000", spent: "$9,100" },
      { name: "Holiday Special", performance: 67, status: "draft", budget: "$20,000", spent: "$0" },
    ],
  },
  {
    title: "AI Insights",
    icon: Brain,
    items: [
      { text: "Mobile traffic increased 23%", priority: "high", type: "opportunity", icon: Smartphone },
      { text: "Optimize checkout flow", priority: "medium", type: "recommendation", icon: Lightbulb },
      { text: "Expand successful campaigns", priority: "high", type: "opportunity", icon: TrendingUp },
      { text: "Geographic expansion potential", priority: "low", type: "insight", icon: Globe },
    ],
  },
  {
    title: "Device Analytics",
    icon: Monitor,
    items: [
      { device: "Desktop", users: "45.2%", revenue: "$18,450", trend: "down" },
      { device: "Mobile", users: "38.7%", revenue: "$15,230", trend: "up" },
      { device: "Tablet", users: "16.1%", revenue: "$4,890", trend: "stable" },
    ],
  },
  {
    title: "Team Activity",
    icon: Users,
    items: [
      {
        user: "Sarah Johnson",
        action: "Updated campaign",
        time: "2m ago",
        avatar: "/placeholder.svg?height=24&width=24",
      },
      { user: "Mike Chen", action: "Generated report", time: "15m ago", avatar: "/placeholder.svg?height=24&width=24" },
      { user: "Emma Davis", action: "Added comment", time: "1h ago", avatar: "/placeholder.svg?height=24&width=24" },
    ],
  },
]

const quickActions = [
  { name: "Create Report", icon: BarChart3, color: "text-blue-500" },
  { name: "Save View", icon: Bookmark, color: "text-green-500" },
  { name: "Apply Filter", icon: Filter, color: "text-purple-500" },
  { name: "Export Data", icon: Download, color: "text-orange-500" },
  { name: "Schedule Alert", icon: Bell, color: "text-red-500" },
  { name: "Share Dashboard", icon: Share2, color: "text-indigo-500" },
]

const notifications = [
  { type: "success", message: "Campaign goal achieved", time: "5m ago", icon: CheckCircle },
  { type: "warning", message: "Budget threshold reached", time: "12m ago", icon: AlertTriangle },
  { type: "info", message: "New user milestone", time: "1h ago", icon: Users },
]

interface AdvancedSidebarProps {
  onMinimize?: (minimized: boolean) => void
}

export function AdvancedSidebar({ onMinimize }: AdvancedSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["Quick Stats", "AI Insights"])
  const [isMinimized, setIsMinimized] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("insights")

  const toggleSection = (title: string) => {
    if (isMinimized) return
    setExpandedSections((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]))
  }

  const handleMinimize = () => {
    const newMinimized = !isMinimized
    setIsMinimized(newMinimized)
    onMinimize?.(newMinimized)
  }

  const filteredSections = sidebarItems.filter((section) =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div
      className={`${
        isMinimized ? "w-16" : "w-80"
      } h-full bg-background/95 backdrop-blur-sm border-r border-primary/20 transition-all duration-300 ease-in-out flex flex-col`}
    >
      {/* Header */}
      <div className="p-4 border-b border-primary/20">
        <div className="flex items-center justify-between">
          {!isMinimized && (
            <div className="space-y-1">
              <h2 className="text-lg font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Smart Insights
              </h2>
              <p className="text-xs text-muted-foreground">AI-powered analytics</p>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleMinimize}
            className="hover:bg-accent transition-colors"
            title={isMinimized ? "Expand sidebar" : "Minimize sidebar"}
          >
            {isMinimized ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Search Bar */}
        {!isMinimized && (
          <div className="mt-3 relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 h-9 bg-muted/30 border-primary/20"
            />
          </div>
        )}
      </div>

      {/* Minimized View */}
      {isMinimized && (
        <div className="flex-1 p-2 space-y-2 overflow-y-auto">
          {/* Quick Stats Icons */}
          <div className="space-y-2">
            <Button
              variant="ghost"
              size="icon"
              className="w-full h-12 hover:bg-accent transition-colors"
              title="Quick Stats"
            >
              <BarChart3 className="h-5 w-5 text-primary" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-full h-12 hover:bg-accent transition-colors"
              title="AI Insights"
            >
              <Brain className="h-5 w-5 text-purple-500" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-full h-12 hover:bg-accent transition-colors"
              title="Campaigns"
            >
              <Target className="h-5 w-5 text-green-500" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-full h-12 hover:bg-accent transition-colors"
              title="Team Activity"
            >
              <Users className="h-5 w-5 text-blue-500" />
            </Button>
          </div>

          <Separator />

          {/* Quick Actions Icons */}
          <div className="space-y-1">
            {quickActions.slice(0, 4).map((action, index) => {
              const Icon = action.icon
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="w-full h-10 hover:bg-accent transition-colors"
                  title={action.name}
                >
                  <Icon className={`h-4 w-4 ${action.color}`} />
                </Button>
              )
            })}
          </div>

          <Separator />

          {/* Notifications Indicator */}
          <Button
            variant="ghost"
            size="icon"
            className="w-full h-10 hover:bg-accent transition-colors relative"
            title="Notifications"
          >
            <Bell className="h-4 w-4 text-orange-500" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">{notifications.length}</span>
            </div>
          </Button>
        </div>
      )}

      {/* Expanded View */}
      {!isMinimized && (
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Tab Navigation */}
          <div className="px-4 py-2 border-b border-primary/20">
            <div className="flex space-x-1 bg-muted/30 rounded-lg p-1">
              <Button
                variant={activeTab === "insights" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("insights")}
                className="flex-1 text-xs"
              >
                <Brain className="mr-1 h-3 w-3" />
                Insights
              </Button>
              <Button
                variant={activeTab === "activity" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("activity")}
                className="flex-1 text-xs"
              >
                <Activity className="mr-1 h-3 w-3" />
                Activity
              </Button>
              <Button
                variant={activeTab === "alerts" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("alerts")}
                className="flex-1 text-xs"
              >
                <Bell className="mr-1 h-3 w-3" />
                Alerts
              </Button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {activeTab === "insights" && (
              <>
                {/* Quick Actions */}
                <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-sm">Quick Actions</h3>
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {quickActions.map((action, index) => {
                        const Icon = action.icon
                        return (
                          <Button
                            key={index}
                            size="sm"
                            variant="ghost"
                            className="justify-start h-8 text-xs hover:bg-accent/50"
                          >
                            <Icon className={`mr-2 h-3 w-3 ${action.color}`} />
                            {action.name.split(" ")[0]}
                          </Button>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Dynamic Sections */}
                {filteredSections.map((section) => {
                  const Icon = section.icon
                  const isExpanded = expandedSections.includes(section.title)

                  return (
                    <Card
                      key={section.title}
                      className="border-primary/20 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
                    >
                      <CardHeader
                        className="pb-2 cursor-pointer hover:bg-accent/50 transition-colors rounded-t-lg"
                        onClick={() => toggleSection(section.title)}
                      >
                        <CardTitle className="text-sm flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4 text-primary" />
                            {section.title}
                            {section.title === "AI Insights" && (
                              <Badge
                                variant="secondary"
                                className="text-xs bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                              >
                                AI
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            {section.title === "Quick Stats" && (
                              <Badge variant="outline" className="text-xs">
                                Live
                              </Badge>
                            )}
                            {isExpanded ? (
                              <ChevronDown className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>
                        </CardTitle>
                      </CardHeader>

                      {isExpanded && (
                        <CardContent className="pt-0 space-y-3 animate-fade-in-up">
                          {section.title === "Quick Stats" &&
                            section.items.map((item, index) => {
                              const ItemIcon = item.icon
                              return (
                                <div
                                  key={index}
                                  className="p-3 rounded-lg bg-gradient-to-r from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/20 transition-all duration-200 border border-primary/10"
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                      <ItemIcon className="h-3 w-3 text-muted-foreground" />
                                      <span className="text-xs text-muted-foreground">{item.name}</span>
                                    </div>
                                    <Badge
                                      variant={item.trend === "up" ? "default" : "destructive"}
                                      className="text-xs"
                                    >
                                      {item.change}
                                    </Badge>
                                  </div>
                                  <div className="text-sm font-bold">{item.value}</div>
                                </div>
                              )
                            })}

                          {section.title === "Top Campaigns" &&
                            section.items.map((item, index) => (
                              <div
                                key={index}
                                className="p-3 rounded-lg bg-gradient-to-r from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/20 transition-all duration-200 border border-primary/10"
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-xs font-medium">{item.name}</span>
                                  <Badge
                                    variant={
                                      item.status === "active"
                                        ? "default"
                                        : item.status === "paused"
                                          ? "secondary"
                                          : "outline"
                                    }
                                    className="text-xs"
                                  >
                                    {item.status}
                                  </Badge>
                                </div>
                                <Progress value={item.performance} className="h-1 mb-2" />
                                <div className="flex justify-between text-xs text-muted-foreground">
                                  <span>{item.performance}% performance</span>
                                  <span>
                                    {item.spent} / {item.budget}
                                  </span>
                                </div>
                              </div>
                            ))}

                          {section.title === "AI Insights" &&
                            section.items.map((item, index) => {
                              const ItemIcon = item.icon
                              return (
                                <div
                                  key={index}
                                  className="p-3 rounded-lg bg-gradient-to-r from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/20 transition-all duration-200 border border-primary/10"
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="flex items-center gap-2">
                                      <div
                                        className={`w-2 h-2 rounded-full mt-1.5 ${
                                          item.priority === "high"
                                            ? "bg-red-500"
                                            : item.priority === "medium"
                                              ? "bg-yellow-500"
                                              : "bg-green-500"
                                        }`}
                                      />
                                      <ItemIcon className="h-3 w-3 text-primary mt-0.5" />
                                    </div>
                                    <div className="flex-1">
                                      <span className="text-xs">{item.text}</span>
                                      <div className="flex items-center gap-2 mt-1">
                                        <Badge
                                          variant={item.priority === "high" ? "destructive" : "secondary"}
                                          className="text-xs"
                                        >
                                          {item.priority}
                                        </Badge>
                                        <Badge variant="outline" className="text-xs">
                                          {item.type}
                                        </Badge>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            })}

                          {section.title === "Device Analytics" &&
                            section.items.map((item, index) => (
                              <div
                                key={index}
                                className="p-3 rounded-lg bg-gradient-to-r from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/20 transition-all duration-200 border border-primary/10"
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    {item.device === "Desktop" && <Monitor className="h-3 w-3 text-blue-500" />}
                                    {item.device === "Mobile" && <Smartphone className="h-3 w-3 text-green-500" />}
                                    {item.device === "Tablet" && <Tablet className="h-3 w-3 text-purple-500" />}
                                    <span className="text-xs font-medium">{item.device}</span>
                                  </div>
                                  <Badge
                                    variant={
                                      item.trend === "up"
                                        ? "default"
                                        : item.trend === "down"
                                          ? "destructive"
                                          : "secondary"
                                    }
                                    className="text-xs"
                                  >
                                    {item.trend}
                                  </Badge>
                                </div>
                                <div className="space-y-1">
                                  <div className="flex justify-between text-xs">
                                    <span>Users: {item.users}</span>
                                    <span>Revenue: {item.revenue}</span>
                                  </div>
                                </div>
                              </div>
                            ))}

                          {section.title === "Team Activity" &&
                            section.items.map((item, index) => (
                              <div
                                key={index}
                                className="p-3 rounded-lg bg-gradient-to-r from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/20 transition-all duration-200 border border-primary/10"
                              >
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage src={item.avatar || "/placeholder.svg"} />
                                    <AvatarFallback className="text-xs">
                                      {item.user
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1">
                                    <div className="text-xs font-medium">{item.user}</div>
                                    <div className="text-xs text-muted-foreground">{item.action}</div>
                                  </div>
                                  <span className="text-xs text-muted-foreground">{item.time}</span>
                                </div>
                              </div>
                            ))}
                        </CardContent>
                      )}
                    </Card>
                  )
                })}
              </>
            )}

            {activeTab === "activity" && (
              <div className="space-y-4">
                <Card className="border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Activity className="h-4 w-4 text-primary" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { action: "Campaign optimized", user: "AI Assistant", time: "2m ago", type: "system" },
                      { action: "Report generated", user: "Sarah Johnson", time: "15m ago", type: "user" },
                      { action: "Alert triggered", user: "System", time: "1h ago", type: "alert" },
                      { action: "Data exported", user: "Mike Chen", time: "2h ago", type: "user" },
                      { action: "Dashboard shared", user: "Emma Davis", time: "3h ago", type: "user" },
                    ].map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2 rounded hover:bg-muted/30 transition-colors"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activity.type === "system"
                              ? "bg-blue-500"
                              : activity.type === "alert"
                                ? "bg-red-500"
                                : "bg-green-500"
                          }`}
                        />
                        <div className="flex-1">
                          <div className="text-xs font-medium">{activity.action}</div>
                          <div className="text-xs text-muted-foreground">{activity.user}</div>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "alerts" && (
              <div className="space-y-4">
                <Card className="border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Bell className="h-4 w-4 text-primary" />
                      Smart Alerts
                      <Badge variant="secondary" className="ml-auto">
                        {notifications.length}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {notifications.map((notification, index) => {
                      const Icon = notification.icon
                      return (
                        <div
                          key={index}
                          className="p-3 rounded-lg bg-gradient-to-r from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/20 transition-all duration-200 border border-primary/10"
                        >
                          <div className="flex items-start gap-3">
                            <Icon
                              className={`h-4 w-4 mt-0.5 ${
                                notification.type === "success"
                                  ? "text-green-500"
                                  : notification.type === "warning"
                                    ? "text-yellow-500"
                                    : "text-blue-500"
                              }`}
                            />
                            <div className="flex-1">
                              <div className="text-xs font-medium">{notification.message}</div>
                              <div className="text-xs text-muted-foreground mt-1">{notification.time}</div>
                            </div>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      )
                    })}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Performance Summary */}
          <div className="p-4 border-t border-primary/20">
            <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/20">
              <CardContent className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <h3 className="font-semibold text-sm">Performance Score</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Overall Score</span>
                    <span className="font-bold text-green-600">94/100</span>
                  </div>
                  <Progress value={94} className="h-2" />
                  <div className="text-xs text-muted-foreground">Excellent performance this month</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
