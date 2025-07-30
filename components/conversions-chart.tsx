"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { day: "Mon", conversions: 45, clicks: 1200 },
  { day: "Tue", conversions: 52, clicks: 1350 },
  { day: "Wed", conversions: 48, clicks: 1180 },
  { day: "Thu", conversions: 61, clicks: 1420 },
  { day: "Fri", conversions: 55, clicks: 1380 },
  { day: "Sat", conversions: 42, clicks: 980 },
  { day: "Sun", conversions: 38, clicks: 890 },
]

export function ConversionsChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
        />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              const conversionsEntry = payload.find((entry) => entry.dataKey === "conversions")
              const clicksEntry = payload.find((entry) => entry.dataKey === "clicks")

              const conversions = conversionsEntry?.value as number
              const clicks = clicksEntry?.value as number

              if (conversionsEntry && clicksEntry && clicks > 0) {
                const conversionRate = ((conversions / clicks) * 100).toFixed(1)
                return (
                  <div className="rounded-lg border bg-background p-3 shadow-md">
                    <div className="grid gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">{label}</span>
                        <span className="font-bold">Conversions: {conversions}</span>
                        <span className="font-bold text-muted-foreground">Clicks: {clicks}</span>
                        <span className="font-bold text-primary">Rate: {conversionRate}%</span>
                      </div>
                    </div>
                  </div>
                )
              }
            }
            return null
          }}
        />
        <Bar
          dataKey="conversions"
          fill="hsl(var(--primary))"
          radius={[4, 4, 0, 0]}
          className="hover:opacity-80 transition-opacity"
        />
        <Bar
          dataKey="clicks"
          fill="hsl(var(--muted))" // Using a different color for clicks
          radius={[4, 4, 0, 0]}
          className="hover:opacity-80 transition-opacity"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
