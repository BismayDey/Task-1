"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  Filter,
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Clock,
  Star,
  Bookmark,
  History,
  Zap,
} from "lucide-react"

const searchSuggestions = [
  { query: "revenue last month", type: "metric", icon: DollarSign },
  { query: "top performing campaigns", type: "campaign", icon: Target },
  { query: "user engagement trends", type: "analytics", icon: Users },
  { query: "conversion rate by device", type: "analysis", icon: TrendingUp },
  { query: "geographic performance", type: "location", icon: Target },
]

const recentSearches = [
  "mobile conversion rates",
  "summer campaign performance",
  "weekly revenue report",
  "user retention analysis",
]

const quickFilters = [
  { name: "Last 7 days", value: "7d", active: false },
  { name: "Last 30 days", value: "30d", active: true },
  { name: "This quarter", value: "quarter", active: false },
  { name: "This year", value: "year", active: false },
]

export function AdvancedSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeFilters, setActiveFilters] = useState(["30d"])
  const [savedSearches, setSavedSearches] = useState<string[]>([])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // Implement search logic here
  }

  const saveSearch = (query: string) => {
    if (query && !savedSearches.includes(query)) {
      setSavedSearches((prev) => [query, ...prev.slice(0, 4)])
    }
  }

  const toggleFilter = (value: string) => {
    setActiveFilters((prev) => (prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]))
  }

  return (
    <div className="relative">
      {/* Main Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search campaigns, metrics, insights..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          className="pl-10 pr-20 h-12 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary/50"
        />
        <div className="absolute right-2 top-2 flex items-center gap-1">
          <Button variant="ghost" size="sm" onClick={() => saveSearch(searchQuery)} disabled={!searchQuery}>
            <Bookmark className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
            <Filter className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Expanded Search Panel */}
      {isExpanded && (
        <Card className="absolute top-14 left-0 right-0 z-50 border-primary/20 bg-background/95 backdrop-blur-sm shadow-xl">
          <CardContent className="p-4 space-y-4">
            {/* Quick Filters */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Quick Filters</Label>
              <div className="flex flex-wrap gap-2">
                {quickFilters.map((filter) => (
                  <Button
                    key={filter.value}
                    variant={activeFilters.includes(filter.value) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter(filter.value)}
                    className="text-xs"
                  >
                    <Calendar className="mr-1 h-3 w-3" />
                    {filter.name}
                  </Button>
                ))}
              </div>
            </div>

            <Separator />

            {/* Search Suggestions */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Suggested Searches</Label>
              <div className="grid grid-cols-2 gap-2">
                {searchSuggestions.map((suggestion, index) => {
                  const Icon = suggestion.icon
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSearch(suggestion.query)}
                      className="justify-start text-xs h-8"
                    >
                      <Icon className="mr-2 h-3 w-3 text-primary" />
                      {suggestion.query}
                      <Badge variant="outline" className="ml-auto text-xs">
                        {suggestion.type}
                      </Badge>
                    </Button>
                  )
                })}
              </div>
            </div>

            <Separator />

            {/* Recent Searches */}
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <History className="h-3 w-3" />
                Recent Searches
              </Label>
              <div className="space-y-1">
                {recentSearches.map((search, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSearch(search)}
                    className="justify-start text-xs h-7 w-full"
                  >
                    <Clock className="mr-2 h-3 w-3 text-muted-foreground" />
                    {search}
                  </Button>
                ))}
              </div>
            </div>

            {/* Saved Searches */}
            {savedSearches.length > 0 && (
              <>
                <Separator />
                <div className="space-y-2">
                  <Label className="text-sm font-medium flex items-center gap-2">
                    <Star className="h-3 w-3" />
                    Saved Searches
                  </Label>
                  <div className="space-y-1">
                    {savedSearches.map((search, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSearch(search)}
                        className="justify-start text-xs h-7 w-full"
                      >
                        <Bookmark className="mr-2 h-3 w-3 text-yellow-500" />
                        {search}
                      </Button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* AI Search */}
            <Separator />
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <Zap className="h-3 w-3 text-primary" />
                AI-Powered Search
              </Label>
              <div className="p-3 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg border border-primary/20">
                <p className="text-xs text-muted-foreground mb-2">Try natural language queries like:</p>
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSearch("What was our best performing campaign last month?")}
                    className="justify-start text-xs h-6 w-full"
                  >
                    "What was our best performing campaign last month?"
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSearch("Show me conversion trends by device type")}
                    className="justify-start text-xs h-6 w-full"
                  >
                    "Show me conversion trends by device type"
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Backdrop */}
      {isExpanded && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" onClick={() => setIsExpanded(false)} />
      )}
    </div>
  )
}
