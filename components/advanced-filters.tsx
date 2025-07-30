"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Filter, X, Save, RotateCcw } from "lucide-react"

const filterCategories = [
  {
    name: "Traffic Sources",
    options: ["Organic Search", "Direct", "Social Media", "Email", "Paid Ads", "Referral"],
  },
  {
    name: "Device Types",
    options: ["Desktop", "Mobile", "Tablet"],
  },
  {
    name: "Geographic Regions",
    options: ["North America", "Europe", "Asia Pacific", "Latin America", "Africa"],
  },
]

export function AdvancedFilters() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})
  const [dateRange, setDateRange] = useState("last_30_days")
  const [revenueRange, setRevenueRange] = useState([0, 100000])
  const [conversionRate, setConversionRate] = useState([0, 10])

  const handleFilterChange = (category: string, option: string, checked: boolean) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: checked
        ? [...(prev[category] || []), option]
        : (prev[category] || []).filter((item) => item !== option),
    }))
  }

  const clearAllFilters = () => {
    setSelectedFilters({})
    setDateRange("last_30_days")
    setRevenueRange([0, 100000])
    setConversionRate([0, 10])
  }

  const getActiveFilterCount = () => {
    return Object.values(selectedFilters).flat().length
  }

  if (!isOpen) {
    return (
      <Button onClick={() => setIsOpen(true)} variant="outline" size="sm" className="bg-transparent border-primary/20">
        <Filter className="mr-2 h-4 w-4" />
        Advanced Filters
        {getActiveFilterCount() > 0 && (
          <Badge variant="secondary" className="ml-2">
            {getActiveFilterCount()}
          </Badge>
        )}
      </Button>
    )
  }

  return (
    <Card className="border-primary/20 bg-background/95 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              Advanced Filters
            </CardTitle>
            <CardDescription>Fine-tune your data analysis with powerful filters</CardDescription>
          </div>
          <Button onClick={() => setIsOpen(false)} variant="ghost" size="sm">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Date Range */}
        <div className="space-y-2">
          <Label>Date Range</Label>
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last_7_days">Last 7 days</SelectItem>
              <SelectItem value="last_30_days">Last 30 days</SelectItem>
              <SelectItem value="last_90_days">Last 90 days</SelectItem>
              <SelectItem value="last_year">Last year</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Revenue Range */}
        <div className="space-y-3">
          <Label>Revenue Range</Label>
          <div className="px-2">
            <Slider value={revenueRange} onValueChange={setRevenueRange} max={100000} step={1000} className="w-full" />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${revenueRange[0].toLocaleString()}</span>
            <span>${revenueRange[1].toLocaleString()}</span>
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="space-y-3">
          <Label>Conversion Rate (%)</Label>
          <div className="px-2">
            <Slider value={conversionRate} onValueChange={setConversionRate} max={10} step={0.1} className="w-full" />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{conversionRate[0]}%</span>
            <span>{conversionRate[1]}%</span>
          </div>
        </div>

        {/* Category Filters */}
        {filterCategories.map((category) => (
          <div key={category.name} className="space-y-3">
            <Label>{category.name}</Label>
            <div className="grid grid-cols-2 gap-2">
              {category.options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${category.name}-${option}`}
                    checked={selectedFilters[category.name]?.includes(option) || false}
                    onCheckedChange={(checked) => handleFilterChange(category.name, option, checked as boolean)}
                  />
                  <Label htmlFor={`${category.name}-${option}`} className="text-sm font-normal cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Custom Metric */}
        <div className="space-y-2">
          <Label>Custom Metric</Label>
          <Input placeholder="Enter custom filter criteria..." />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t">
          <Button onClick={clearAllFilters} variant="outline" size="sm" className="bg-transparent">
            <RotateCcw className="mr-2 h-4 w-4" />
            Clear All
          </Button>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="bg-transparent">
              <Save className="mr-2 h-4 w-4" />
              Save Filter
            </Button>
            <Button size="sm">Apply Filters</Button>
          </div>
        </div>

        {/* Active Filters Summary */}
        {getActiveFilterCount() > 0 && (
          <div className="pt-4 border-t">
            <Label className="mb-2 block">Active Filters</Label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(selectedFilters).map(([category, options]) =>
                options.map((option) => (
                  <Badge
                    key={`${category}-${option}`}
                    variant="secondary"
                    className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                    onClick={() => handleFilterChange(category, option, false)}
                  >
                    {option}
                    <X className="ml-1 h-3 w-3" />
                  </Badge>
                )),
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
