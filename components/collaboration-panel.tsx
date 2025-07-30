"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Share2, MessageCircle, Users, Eye, Edit, Clock } from "lucide-react"
import { useState } from "react"

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@admybrand.com",
    role: "Marketing Manager",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "online",
    lastActive: "now",
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike@admybrand.com",
    role: "Data Analyst",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "away",
    lastActive: "5 minutes ago",
  },
  {
    id: 3,
    name: "Emma Davis",
    email: "emma@admybrand.com",
    role: "Campaign Specialist",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "offline",
    lastActive: "2 hours ago",
  },
]

const comments = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "The conversion rate spike in mobile traffic is impressive! Should we increase mobile ad spend?",
    timestamp: "2 hours ago",
    replies: 2,
  },
  {
    id: 2,
    author: "Mike Chen",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "I noticed the anomaly in organic search. Let me investigate the SEO metrics.",
    timestamp: "1 hour ago",
    replies: 0,
  },
]

const recentActivity = [
  {
    id: 1,
    user: "Sarah Johnson",
    action: "shared dashboard",
    target: "Q3 Performance Review",
    timestamp: "10 minutes ago",
  },
  {
    id: 2,
    user: "Mike Chen",
    action: "added comment on",
    target: "Revenue Analytics",
    timestamp: "25 minutes ago",
  },
  {
    id: 3,
    user: "Emma Davis",
    action: "exported report",
    target: "Campaign Performance",
    timestamp: "1 hour ago",
  },
]

export function CollaborationPanel() {
  const [newComment, setNewComment] = useState("")

  const handleAddComment = () => {
    if (newComment.trim()) {
      // Add comment logic here
      setNewComment("")
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share2 className="h-6 w-6 text-primary" />
            Team Collaboration
          </CardTitle>
          <CardDescription>
            Share insights, collaborate on reports, and track team activity in real-time
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Team Members */}
        <Card className="hover:shadow-xl transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Team Members
            </CardTitle>
            <CardDescription>Active team members and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="relative">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                        member.status === "online"
                          ? "bg-green-500"
                          : member.status === "away"
                            ? "bg-yellow-500"
                            : "bg-gray-400"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs">
                      {member.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{member.lastActive}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" size="sm">
              Invite Team Member
            </Button>
          </CardContent>
        </Card>

        {/* Comments & Discussions */}
        <Card className="hover:shadow-xl transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              Comments
            </CardTitle>
            <CardDescription>Team discussions and insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {comment.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-sm">{comment.author}</p>
                        <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{comment.content}</p>
                      {comment.replies > 0 && (
                        <Button variant="ghost" size="sm" className="text-xs mt-2 p-0 h-auto">
                          {comment.replies} replies
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <Textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[60px]"
              />
              <Button onClick={handleAddComment} size="sm" className="w-full">
                Add Comment
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="hover:shadow-xl transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
            <CardDescription>Team actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      <span className="text-muted-foreground">{activity.action}</span>{" "}
                      <span className="font-medium">{activity.target}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent" size="sm">
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Sharing & Permissions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="hover:shadow-xl transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5 text-primary" />
              Share Dashboard
            </CardTitle>
            <CardDescription>Generate shareable links with custom permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input placeholder="Enter email address" className="flex-1" />
                <Button>Invite</Button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">View Only Link</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Copy
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <div className="flex items-center space-x-2">
                    <Edit className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Edit Access Link</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Copy
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-500">
          <CardHeader>
            <CardTitle>Collaboration Stats</CardTitle>
            <CardDescription>Team engagement metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">47</div>
                <div className="text-sm text-muted-foreground">Comments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">23</div>
                <div className="text-sm text-muted-foreground">Shares</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">156</div>
                <div className="text-sm text-muted-foreground">Views</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">12</div>
                <div className="text-sm text-muted-foreground">Exports</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
