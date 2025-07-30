"use client"

import { useState } from "react"
import { Bell, X, CheckCircle, AlertTriangle, Info, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const notifications = [
  {
    id: 1,
    type: "success",
    title: "Campaign Performance Alert",
    message: "Summer Sale campaign exceeded target by 23%",
    timestamp: "2 minutes ago",
    read: false,
    icon: CheckCircle,
    color: "text-green-500",
  },
  {
    id: 2,
    type: "warning",
    title: "Traffic Anomaly Detected",
    message: "Unusual drop in organic search traffic",
    timestamp: "15 minutes ago",
    read: false,
    icon: AlertTriangle,
    color: "text-yellow-500",
  },
  {
    id: 3,
    type: "info",
    title: "Weekly Report Ready",
    message: "Your analytics report for this week is ready",
    timestamp: "1 hour ago",
    read: true,
    icon: Info,
    color: "text-blue-500",
  },
  {
    id: 4,
    type: "success",
    title: "Conversion Rate Improved",
    message: "Mobile conversion rate increased by 12%",
    timestamp: "2 hours ago",
    read: true,
    icon: TrendingUp,
    color: "text-green-500",
  },
]

export function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false)
  const [notificationList, setNotificationList] = useState(notifications)

  const unreadCount = notificationList.filter((n) => !n.read).length

  const markAsRead = (id: number) => {
    setNotificationList((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotificationList((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  const removeNotification = (id: number) => {
    setNotificationList((prev) => prev.filter((n) => n.id !== id))
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative hover:bg-accent bg-transparent">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold">Notifications</h3>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead} className="text-xs">
              Mark all read
            </Button>
          )}
        </div>
        <div className="max-h-96 overflow-y-auto">
          {notificationList.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No notifications</p>
            </div>
          ) : (
            notificationList.map((notification) => {
              const Icon = notification.icon
              return (
                <div
                  key={notification.id}
                  className={`p-4 border-b hover:bg-muted/50 transition-colors cursor-pointer ${
                    !notification.read ? "bg-primary/5" : ""
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    <Icon className={`h-5 w-5 mt-0.5 ${notification.color}`} />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4
                          className={`text-sm font-medium ${!notification.read ? "text-foreground" : "text-muted-foreground"}`}
                        >
                          {notification.title}
                        </h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 hover:bg-destructive hover:text-destructive-foreground"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeNotification(notification.id)
                          }}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                    </div>
                    {!notification.read && <div className="w-2 h-2 bg-primary rounded-full mt-2" />}
                  </div>
                </div>
              )
            })
          )}
        </div>
        {notificationList.length > 0 && (
          <div className="p-4 border-t">
            <Button variant="outline" className="w-full bg-transparent" size="sm">
              View All Notifications
            </Button>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
