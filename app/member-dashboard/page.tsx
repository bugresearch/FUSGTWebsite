"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  Users,
  LogOut,
  Star,
  Edit,
  Bell,
  Plus,
  FileText,
  Camera,
  BarChart3,
  Settings,
  Crown,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function MemberDashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in as member
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
      return
    }

    const parsedUser = JSON.parse(userData)
    if (parsedUser.type !== "member") {
      router.push("/auth/login")
      return
    }

    setUser(parsedUser)
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const memberStats = [
    { title: "Events Organized", value: "12", icon: Calendar, color: "text-blue-600" },
    { title: "Content Created", value: "8", icon: FileText, color: "text-green-600" },
    { title: "Photos Uploaded", value: "45", icon: Camera, color: "text-purple-600" },
    { title: "Member Rating", value: "4.8", icon: Star, color: "text-yellow-600" },
  ]

  const recentActivities = [
    {
      type: "event",
      title: "Organized AI Workshop",
      description: "Successfully conducted workshop with 45 participants",
      date: "2024-01-20",
      status: "completed",
    },
    {
      type: "content",
      title: "Published Blog Post",
      description: "Article about 'Future of Web Development' published",
      date: "2024-01-18",
      status: "published",
    },
    {
      type: "media",
      title: "Uploaded Event Photos",
      description: "25 photos from Photography Contest added to gallery",
      date: "2024-01-15",
      status: "approved",
    },
  ]

  const upcomingTasks = [
    {
      id: 1,
      title: "Prepare Leadership Summit",
      description: "Coordinate speakers and venue setup",
      deadline: "2024-02-25",
      priority: "high",
      progress: 75,
    },
    {
      id: 2,
      title: "Review Event Registrations",
      description: "Process pending registrations for upcoming events",
      deadline: "2024-02-20",
      priority: "medium",
      progress: 50,
    },
    {
      id: 3,
      title: "Update Team Profiles",
      description: "Add new member information to website",
      deadline: "2024-02-18",
      priority: "low",
      progress: 25,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <Crown className="h-8 w-8 text-purple-600 mr-3" />
              Member Dashboard
            </h1>
            <p className="text-gray-600">Welcome back, {user.name || "Club Member"}!</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
              <Badge className="ml-2 bg-red-500">3</Badge>
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt={user.name} />
                  <AvatarFallback className="text-2xl">{user.clubId?.slice(0, 2) || "CM"}</AvatarFallback>
                </Avatar>
                <CardTitle>{user.name || "Club Member"}</CardTitle>
                <CardDescription>{user.role || "Core Team Member"}</CardDescription>
                <Badge className="mt-2 bg-purple-100 text-purple-800">
                  <Crown className="h-3 w-3 mr-1" />
                  Club Member
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium">{user.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Member ID:</span>
                    <span className="font-medium">{user.clubId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Member Since:</span>
                    <span className="font-medium">Sep 2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Domain:</span>
                    <span className="font-medium">Technical</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Event
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Write Blog Post
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Camera className="h-4 w-4 mr-2" />
                  Upload Media
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Members
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {memberStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Recent Activities */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activities</CardTitle>
                      <CardDescription>Your latest contributions to the club</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivities.map((activity, index) => (
                          <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                            <div
                              className={`w-2 h-2 rounded-full mt-2 ${
                                activity.status === "completed"
                                  ? "bg-green-500"
                                  : activity.status === "published"
                                    ? "bg-blue-500"
                                    : "bg-purple-500"
                              }`}
                            ></div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm">{activity.title}</h4>
                              <p className="text-xs text-gray-600 mt-1">{activity.description}</p>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-xs text-gray-500">
                                  {new Date(activity.date).toLocaleDateString()}
                                </span>
                                <Badge variant="outline" className="text-xs">
                                  {activity.status}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Upcoming Tasks */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Tasks</CardTitle>
                      <CardDescription>Tasks assigned to you</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {upcomingTasks.map((task) => (
                          <div key={task.id} className="p-3 border rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-sm">{task.title}</h4>
                              <Badge
                                variant={
                                  task.priority === "high"
                                    ? "destructive"
                                    : task.priority === "medium"
                                      ? "default"
                                      : "secondary"
                                }
                                className="text-xs"
                              >
                                {task.priority}
                              </Badge>
                            </div>
                            <p className="text-xs text-gray-600 mb-3">{task.description}</p>
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs">
                                <span>Progress</span>
                                <span>{task.progress}%</span>
                              </div>
                              <Progress value={task.progress} className="h-2" />
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">
                                  Due: {new Date(task.deadline).toLocaleDateString()}
                                </span>
                                <Button size="sm" variant="outline" className="text-xs h-6">
                                  Update
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="events" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Event Management</CardTitle>
                        <CardDescription>Manage and organize club events</CardDescription>
                      </div>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Create Event
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      <Calendar className="h-12 w-12 mx-auto mb-4" />
                      <p>Event management interface would be implemented here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="content" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Content Management</CardTitle>
                        <CardDescription>Create and manage blog posts, media, and announcements</CardDescription>
                      </div>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Create Content
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      <FileText className="h-12 w-12 mx-auto mb-4" />
                      <p>Content management interface would be implemented here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics & Reports</CardTitle>
                    <CardDescription>View performance metrics and engagement statistics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      <BarChart3 className="h-12 w-12 mx-auto mb-4" />
                      <p>Analytics dashboard would be implemented here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Member Settings</CardTitle>
                    <CardDescription>Manage your member account and preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      <Settings className="h-12 w-12 mx-auto mb-4" />
                      <p>Member settings interface would be implemented here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
