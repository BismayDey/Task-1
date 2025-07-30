"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/date-range-picker"
import { MainNav } from "@/components/main-nav"
import { TeamSwitcher } from "@/components/team-switcher"
import { UserNav } from "@/components/user-nav"
import { MetricsCards } from "@/components/metrics-cards"
import { RevenueChart } from "@/components/revenue-chart"
import { ConversionsChart } from "@/components/conversions-chart"
import { TrafficSourcesChart } from "@/components/traffic-sources-chart"
import { RecentActivity } from "@/components/recent-activity"
import { TopCampaigns } from "@/components/top-campaigns"
import { ThemeToggle } from "@/components/theme-toggle"
import { CommandPalette } from "@/components/command-palette"
import { AIInsights } from "@/components/ai-insights"
import { AdvancedDataTable } from "@/components/advanced-data-table"
import { HeatmapChart } from "@/components/heatmap-chart"
import { FunnelAnalysis } from "@/components/funnel-analysis"
import { GeographicMap } from "@/components/geographic-map"
import { PredictiveAnalytics } from "@/components/predictive-analytics"
import { RealTimeMetrics } from "@/components/real-time-metrics"
import { AnomalyDetection } from "@/components/anomaly-detection"
import { CohortAnalysis } from "@/components/cohort-analysis"
import { ABTestResults } from "@/components/ab-test-results"
import { NotificationCenter } from "@/components/notification-center"
import { DataExportCenter } from "@/components/data-export-center"
import { CollaborationPanel } from "@/components/collaboration-panel"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { SmartAlerts } from "@/components/smart-alerts"
import { NaturalLanguageQuery } from "@/components/natural-language-query"
import { AdvancedSidebar } from "@/components/advanced-sidebar"
import { VoiceCommands } from "@/components/voice-commands"
import { AdvancedFilters } from "@/components/advanced-filters"
import { DashboardCustomizer } from "@/components/dashboard-customizer"
import { WidgetSystem } from "@/components/widget-system"
import { AdvancedSearch } from "@/components/advanced-search"
import {
  RefreshCw,
  TrendingUp,
  Users,
  MousePointer,
  Sparkles,
  Brain,
  Zap,
  Globe,
  Target,
  BarChart3,
  Share2,
  SearchIcon,
  Menu,
  Maximize2,
  Minimize2,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [activeTab, setActiveTab] = useState("overview")
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [realTimeData, setRealTimeData] = useState({
    activeUsers: 1247,
    revenue: 847392,
    conversions: 3247,
    growth: 18.7,
  })
  const { toast } = useToast()
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false)

  useEffect(() => {
    // Simulate loading with staggered animations
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Simulate real-time updates with WebSocket-like behavior
    const interval = setInterval(() => {
      setLastUpdated(new Date())
      setRealTimeData((prev) => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10 - 5),
        revenue: prev.revenue + Math.floor(Math.random() * 1000),
        conversions: prev.conversions + Math.floor(Math.random() * 5),
        growth: prev.growth + (Math.random() * 0.2 - 0.1),
      }))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Command palette keyboard shortcut
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsCommandPaletteOpen(true)
      }
      if (e.key === "F11") {
        e.preventDefault()
        setIsFullscreen(!isFullscreen)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isFullscreen])

  const handleRefresh = () => {
    setIsLoading(true)
    toast({
      title: "Refreshing data...",
      description: "Fetching latest analytics data",
    })
    setTimeout(() => {
      setIsLoading(false)
      setLastUpdated(new Date())
      toast({
        title: "Data refreshed successfully",
        description: "All metrics have been updated",
      })
    }, 1500)
  }

  const handleExport = () => {
    toast({
      title: "Export initiated",
      description: "Your analytics report is being generated",
    })
    // Simulate export
    setTimeout(() => {
      const link = document.createElement("a")
      link.href =
        "data:text/csv;charset=utf-8,Campaign,Revenue,Conversions,CTR,ROAS\nSummer Sale,45000,1250,3.2%,4.2\nBrand Awareness,32000,890,2.8%,3.8"
      link.download = `admybrand-analytics-${new Date().toISOString().split("T")[0]}.csv`
      link.click()
      toast({
        title: "Export completed",
        description: "Your report has been downloaded",
      })
    }, 2000)
  }

  if (isLoading) {
    return (
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="flex items-center justify-between space-y-2">
          <div className="space-y-2">
            <div className="h-8 w-64 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 animate-pulse rounded-md" />
            <div className="h-4 w-48 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse rounded-md" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-10 w-32 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 animate-pulse rounded-md" />
            <div className="h-10 w-24 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse rounded-md" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-32 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 animate-pulse rounded-lg border border-primary/20"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-4 h-80 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 animate-pulse rounded-lg border border-primary/20" />
          <div className="col-span-3 h-80 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 animate-pulse rounded-lg border border-primary/20" />
        </div>
        <div className="text-center py-8">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <Sparkles className="h-5 w-5 animate-spin text-primary" />
            <span className="text-lg font-medium bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Loading AI-powered insights...
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className={`flex min-h-screen bg-gradient-to-br from-background via-background to-primary/5 ${isFullscreen ? "fixed inset-0 z-50" : ""}`}
      >
        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="hidden lg:block">
            <AdvancedSidebar onMinimize={setIsSidebarMinimized} />
          </div>
        )}

        {/* Main Content */}
        <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarMinimized ? "ml-0" : ""}`}>
          {/* Header */}
          <div className="border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 border-primary/20">
            <div className="flex h-16 items-center px-4">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="lg:hidden"
                >
                  <Menu className="h-4 w-4" />
                </Button>
                <TeamSwitcher />
                <MainNav className="mx-6" />
              </div>
              <div className="ml-auto flex items-center space-x-4">
                <AdvancedSearch />
                <AdvancedFilters />
                <DashboardCustomizer />
                <NotificationCenter />
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="hover:bg-accent"
                >
                  {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
                <UserNav />
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="flex-1 space-y-6 p-4 md:p-8 pt-6 overflow-auto">
            <div className="flex items-center justify-between space-y-2">
              <div className="space-y-1">
                <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  ADmyBRAND Insights Pro
                </h2>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>Last updated {lastUpdated.toLocaleTimeString()}</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Live data</span>
                  </div>
                  <Badge variant="secondary" className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                    <Zap className="w-3 h-3 mr-1" />
                    AI Enhanced
                  </Badge>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsCommandPaletteOpen(true)}
                  className="hover:scale-105 transition-all bg-transparent border-primary/20"
                >
                  <SearchIcon className="mr-2 h-4 w-4" />
                  Search
                  <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    ⌘K
                  </kbd>
                </Button>
                <CalendarDateRangePicker />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRefresh}
                  className="hover:scale-105 transition-all bg-transparent border-primary/20"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh
                </Button>
                <DataExportCenter onExport={handleExport} />
              </div>
            </div>

            <RealTimeMetrics data={realTimeData} />

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-9 bg-muted/50 backdrop-blur border border-primary/20">
                <TabsTrigger
                  value="overview"
                  className="transition-all hover:scale-105 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="analytics"
                  className="transition-all hover:scale-105 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Analytics
                </TabsTrigger>
                <TabsTrigger
                  value="ai-insights"
                  className="transition-all hover:scale-105 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Brain className="mr-2 h-4 w-4" />
                  AI Insights
                </TabsTrigger>
                <TabsTrigger
                  value="geographic"
                  className="transition-all hover:scale-105 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Geographic
                </TabsTrigger>
                <TabsTrigger
                  value="funnel"
                  className="transition-all hover:scale-105 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Target className="mr-2 h-4 w-4" />
                  Funnel
                </TabsTrigger>
                <TabsTrigger
                  value="cohort"
                  className="transition-all hover:scale-105 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Cohort
                </TabsTrigger>
                <TabsTrigger
                  value="testing"
                  className="transition-all hover:scale-105 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  A/B Testing
                </TabsTrigger>
                <TabsTrigger
                  value="collaboration"
                  className="transition-all hover:scale-105 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Collaborate
                </TabsTrigger>
                <TabsTrigger
                  value="voice"
                  className="transition-all hover:scale-105 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Voice AI
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <MetricsCards />
                <WidgetSystem />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-card to-card/50 backdrop-blur border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Revenue Overview
                        <Badge
                          variant="secondary"
                          className="ml-auto bg-gradient-to-r from-green-500 to-blue-500 text-white"
                        >
                          <Sparkles className="h-3 w-3 mr-1" />
                          AI Enhanced
                        </Badge>
                      </CardTitle>
                      <CardDescription>Monthly revenue trends with predictive forecasting</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <RevenueChart />
                    </CardContent>
                  </Card>

                  <div className="col-span-3 space-y-6">
                    <TrafficSourcesChart />
                    <SmartAlerts />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-card to-card/50 backdrop-blur border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MousePointer className="h-5 w-5 text-primary" />
                        Conversion Heatmap
                        <Badge variant="outline" className="ml-auto">
                          Real-time
                        </Badge>
                      </CardTitle>
                      <CardDescription>Hourly conversion patterns and user behavior</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <HeatmapChart />
                    </CardContent>
                  </Card>

                  <div className="col-span-3 space-y-6">
                    <RecentActivity />
                    <TopCampaigns />
                  </div>
                </div>

                <AdvancedDataTable />
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <ConversionsChart />
                  <PredictiveAnalytics />
                  <AnomalyDetection />
                </div>
                <PerformanceMonitor />
              </TabsContent>

              <TabsContent value="ai-insights" className="space-y-6">
                <NaturalLanguageQuery />
                <AIInsights />
                <div className="grid gap-6 md:grid-cols-2">
                  <PredictiveAnalytics />
                  <AnomalyDetection />
                </div>
              </TabsContent>

              <TabsContent value="geographic" className="space-y-6">
                <GeographicMap />
              </TabsContent>

              <TabsContent value="funnel" className="space-y-6">
                <FunnelAnalysis />
              </TabsContent>

              <TabsContent value="cohort" className="space-y-6">
                <CohortAnalysis />
              </TabsContent>

              <TabsContent value="testing" className="space-y-6">
                <ABTestResults />
              </TabsContent>

              <TabsContent value="collaboration" className="space-y-6">
                <CollaborationPanel />
              </TabsContent>

              <TabsContent value="voice" className="space-y-6">
                <VoiceCommands />
                <div className="grid gap-6 md:grid-cols-2">
                  <AIInsights />
                  <NaturalLanguageQuery />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <CommandPalette open={isCommandPaletteOpen} onOpenChange={setIsCommandPaletteOpen} onTabChange={setActiveTab} />
      <Toaster />
    </>
  )
}
