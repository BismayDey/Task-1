"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Organic Search", value: 45, color: "hsl(var(--primary))" },
  { name: "Direct", value: 25, color: "hsl(var(--secondary))" },
  { name: "Social Media", value: 15, color: "hsl(var(--accent))" },
  { name: "Email", value: 10, color: "hsl(var(--muted))" },
  { name: "Referral", value: 5, color: "hsl(var(--destructive))" },
]

export function TrafficSourcesChart() {
  return (
    <div className="space-y-4">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} className="hover:opacity-80 transition-opacity" />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-3 shadow-md">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: payload[0].payload.color }} />
                      <span className="font-medium">{payload[0].name}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{payload[0].value}% of total traffic</p>
                  </div>
                )
              }
              return null
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="space-y-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                {item.name}
              </span>
            </div>
            <span className="font-medium">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
