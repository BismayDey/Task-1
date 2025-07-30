"use client"
import { Badge } from "@/components/ui/badge"

const heatmapData = [
  { hour: 0, day: "Mon", value: 12, conversions: 45 },
  { hour: 1, day: "Mon", value: 8, conversions: 23 },
  { hour: 2, day: "Mon", value: 5, conversions: 12 },
  { hour: 3, day: "Mon", value: 3, conversions: 8 },
  { hour: 4, day: "Mon", value: 2, conversions: 5 },
  { hour: 5, day: "Mon", value: 4, conversions: 15 },
  { hour: 6, day: "Mon", value: 15, conversions: 67 },
  { hour: 7, day: "Mon", value: 25, conversions: 89 },
  { hour: 8, day: "Mon", value: 35, conversions: 123 },
  { hour: 9, day: "Mon", value: 45, conversions: 156 },
  { hour: 10, day: "Mon", value: 55, conversions: 189 },
  { hour: 11, day: "Mon", value: 65, conversions: 234 },
  { hour: 12, day: "Mon", value: 75, conversions: 267 },
  { hour: 13, day: "Mon", value: 70, conversions: 245 },
  { hour: 14, day: "Mon", value: 80, conversions: 289 },
  { hour: 15, day: "Mon", value: 85, conversions: 312 },
  { hour: 16, day: "Mon", value: 90, conversions: 334 },
  { hour: 17, day: "Mon", value: 95, conversions: 356 },
  { hour: 18, day: "Mon", value: 88, conversions: 298 },
  { hour: 19, day: "Mon", value: 78, conversions: 267 },
  { hour: 20, day: "Mon", value: 68, conversions: 234 },
  { hour: 21, day: "Mon", value: 58, conversions: 198 },
  { hour: 22, day: "Mon", value: 38, conversions: 134 },
  { hour: 23, day: "Mon", value: 28, conversions: 98 },
]

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const hours = Array.from({ length: 24 }, (_, i) => i)

const getIntensityColor = (value: number) => {
  const intensity = value / 100
  if (intensity < 0.2) return "bg-blue-100 dark:bg-blue-950"
  if (intensity < 0.4) return "bg-blue-200 dark:bg-blue-900"
  if (intensity < 0.6) return "bg-blue-400 dark:bg-blue-700"
  if (intensity < 0.8) return "bg-blue-600 dark:bg-blue-500"
  return "bg-blue-800 dark:bg-blue-400"
}

export function HeatmapChart() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-25 gap-1 text-xs">
        <div></div>
        {hours.map((hour) => (
          <div key={hour} className="text-center text-muted-foreground">
            {hour}
          </div>
        ))}
        {days.map((day) => (
          <div key={day} className="space-y-1">
            <div className="text-muted-foreground font-medium">{day}</div>
            {hours.map((hour) => {
              const dataPoint = heatmapData.find((d) => d.hour === hour)
              const value = dataPoint?.value || Math.random() * 100
              return (
                <div
                  key={`${day}-${hour}`}
                  className={`w-6 h-6 rounded-sm cursor-pointer transition-all hover:scale-110 hover:shadow-md ${getIntensityColor(value)}`}
                  title={`${day} ${hour}:00 - ${Math.round(value)}% activity`}
                />
              )
            })}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2">
          <span className="text-muted-foreground">Less</span>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-blue-100 dark:bg-blue-950 rounded-sm"></div>
            <div className="w-3 h-3 bg-blue-200 dark:bg-blue-900 rounded-sm"></div>
            <div className="w-3 h-3 bg-blue-400 dark:bg-blue-700 rounded-sm"></div>
            <div className="w-3 h-3 bg-blue-600 dark:bg-blue-500 rounded-sm"></div>
            <div className="w-3 h-3 bg-blue-800 dark:bg-blue-400 rounded-sm"></div>
          </div>
          <span className="text-muted-foreground">More</span>
        </div>
        <Badge variant="outline">Peak: 5-7 PM</Badge>
      </div>
    </div>
  )
}
