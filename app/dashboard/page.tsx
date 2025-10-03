"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Calendar, Trophy, BookOpen, LogOut, Clock, MapPin, Users, Star, Download, Edit, Bell } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
      return
    }

    setUser(JSON.parse(userData))
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

  const registeredEvents = [
    {
      id: 1,
      title: "AI & ML Workshop",
      date: "2024-02-15",
      time: "10:00 AM",
      location: "Tech Lab, Block A",
      status: "upcoming",
      domain: "Technical",
    },
    {
      id: 2,
      title: "Photography Contest",
      date: "2024-02-20",
      time: "2:00 PM",
      location: "Campus Wide",
      status: "upcoming",
      domain: "Media",
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      date: "2024-01-15",
      time: "9:00 AM",
      location: "Computer Lab",
      status: "completed",
      domain: "Technical",
      certificate: true,
    },
  ]

  const achievements = [
    {
      title: "Event Enthusiast",
      description: "Attended 5+ events",
      icon: Calendar,
      earned: true,
      date: "2024-01-20",
    },
    {
      title: "Tech Explorer",
      description: "Completed technical workshops",
      icon: BookOpen,
      earned: true,
      date: "2024-01-15",
    },
    {
      title: "Community Builder",
      description: "Active member for 6 months",
      icon: Users,
      earned: false,
      progress: 75,
    },
  ]

  const upcomingEvents = [
    {
      id: 4,
      title: "Leadership Summit",
      date: "2024-02-25",
      time: "9:00 AM",
      domain: "Non-Technical",
    },
    {
      id: 5,
      title: "Design Workshop",
      date: "2024-03-01",
      time: "2:00 PM",
      domain: "Media",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name || "Student"}!</h1>
            <p className="text-gray-600">Manage your profile, events, and achievements</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
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
                  <AvatarFallback className="text-2xl">{user.regNumber?.slice(0, 2) || "ST"}</AvatarFallback>
                </Avatar>
                <CardTitle>{user.name || "Student Name"}</CardTitle>
                <CardDescription>{user.regNumber}</CardDescription>
                <Badge className="mt-2">Active Member</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium">{user.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Member Since:</span>
                    <span className="font-medium">Jan 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Events Attended:</span>
                    <span className="font-medium">3</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Events Registered</span>
                  </div>
                  <Badge>3</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">Achievements</span>
                  </div>
                  <Badge>2</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Points</span>
                  </div>
                  <Badge>150</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="events">My Events</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Events you might be interested in</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-semibold">{event.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>{new Date(event.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{event.time}</span>
                              </div>
                            </div>
                            <Badge className="mt-2" variant="outline">
                              {event.domain}
                            </Badge>
                          </div>
                          <Button size="sm">
                            <Link href={`/events/${event.id}/register`}>Register</Link>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Completed Web Development Bootcamp</span>
                        <span className="text-xs text-gray-500">2 days ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Registered for AI & ML Workshop</span>
                        <span className="text-xs text-gray-500">1 week ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm">Earned "Event Enthusiast" badge</span>
                        <span className="text-xs text-gray-500">2 weeks ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="events" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Events</CardTitle>
                    <CardDescription>Track your event registrations and history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {registeredEvents.map((event) => (
                        <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-semibold">{event.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>{new Date(event.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-3 w-3" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant="outline">{event.domain}</Badge>
                              <Badge
                                className={
                                  event.status === "completed"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-blue-100 text-blue-800"
                                }
                              >
                                {event.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {event.certificate && (
                              <Button size="sm" variant="outline">
                                <Download className="h-4 w-4 mr-1" />
                                Certificate
                              </Button>
                            )}
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Achievements & Badges</CardTitle>
                    <CardDescription>Track your progress and unlock new achievements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className={`p-4 border rounded-lg ${achievement.earned ? "bg-green-50 border-green-200" : "bg-gray-50"}`}
                        >
                          <div className="flex items-center space-x-3 mb-3">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center ${achievement.earned ? "bg-green-100" : "bg-gray-200"}`}
                            >
                              <achievement.icon
                                className={`h-5 w-5 ${achievement.earned ? "text-green-600" : "text-gray-500"}`}
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold">{achievement.title}</h3>
                              <p className="text-sm text-gray-600">{achievement.description}</p>
                            </div>
                          </div>
                          {achievement.earned ? (
                            <Badge className="bg-green-100 text-green-800">
                              Earned on {new Date(achievement.date!).toLocaleDateString()}
                            </Badge>
                          ) : (
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Progress</span>
                                <span>{achievement.progress}%</span>
                              </div>
                              <Progress value={achievement.progress} className="h-2" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account preferences and privacy settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Profile Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Full Name</label>
                          <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded-md"
                            defaultValue={user.name || "Student Name"}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Email</label>
                          <input
                            type="email"
                            className="w-full mt-1 p-2 border rounded-md bg-gray-50"
                            defaultValue={user.email}
                            disabled
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Registration Number</label>
                          <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded-md bg-gray-50"
                            defaultValue={user.regNumber}
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Notification Preferences</h3>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked />
                          <span className="text-sm">Email notifications for new events</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked />
                          <span className="text-sm">Reminders for registered events</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <span className="text-sm">Weekly newsletter</span>
                        </label>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button>Save Changes</Button>
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
