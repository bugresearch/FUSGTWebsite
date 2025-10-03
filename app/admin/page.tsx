"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Calendar, Settings, Plus, Edit, Trash2, Eye, BarChart3, UserCheck, Lock } from "lucide-react"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginData, setLoginData] = useState({ email: "", password: "" })

  // Mock data
  const stats = [
    { title: "Total Events", value: "24", icon: Calendar, color: "text-blue-600" },
    { title: "Active Registrations", value: "156", icon: UserCheck, color: "text-green-600" },
    { title: "Total Members", value: "200+", icon: Users, color: "text-purple-600" },
    { title: "This Month", value: "8", icon: BarChart3, color: "text-orange-600" },
  ]

  const recentEvents = [
    { id: 1, title: "AI Workshop", registrations: 45, status: "Active", date: "2024-02-15" },
    { id: 2, title: "Photography Contest", registrations: 32, status: "Active", date: "2024-02-20" },
    { id: 3, title: "Leadership Summit", registrations: 28, status: "Draft", date: "2024-02-25" },
  ]

  const recentRegistrations = [
    { name: "Arjun Sharma", event: "AI Workshop", date: "2024-01-20", status: "Confirmed" },
    { name: "Priya Patel", event: "Photography Contest", date: "2024-01-19", status: "Pending" },
    { name: "Rahul Kumar", event: "Leadership Summit", date: "2024-01-18", status: "Confirmed" },
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple mock authentication
    if (loginData.email === "admin@nwc.srm.edu" && loginData.password === "admin123") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid credentials. Use admin@nwc.srm.edu / admin123")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Lock className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Admin Login</h2>
            <p className="mt-2 text-sm text-gray-600">Sign in to access the admin dashboard</p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="admin@nwc.srm.edu"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-600">Demo credentials: admin@nwc.srm.edu / admin123</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage events, registrations, and club information</p>
            </div>
            <Button onClick={() => setIsAuthenticated(false)} variant="outline">
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="registrations">Registrations</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Event Management</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add New Event
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Events</CardTitle>
                <CardDescription>Manage your events and view registration statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="text-sm text-gray-600">
                          {event.registrations} registrations • {event.date}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={event.status === "Active" ? "default" : "secondary"}>{event.status}</Badge>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="registrations" className="space-y-6">
            <h2 className="text-2xl font-bold">Registration Management</h2>

            <Card>
              <CardHeader>
                <CardTitle>Recent Registrations</CardTitle>
                <CardDescription>View and manage event registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentRegistrations.map((registration, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{registration.name}</h3>
                        <p className="text-sm text-gray-600">
                          {registration.event} • {registration.date}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={registration.status === "Confirmed" ? "default" : "secondary"}>
                          {registration.status}
                        </Badge>
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

          <TabsContent value="members" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Member Management</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Member
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Club Members</CardTitle>
                <CardDescription>Manage club membership and roles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Users className="h-12 w-12 mx-auto mb-4" />
                  <p>Member management interface would be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold">Settings</h2>

            <Card>
              <CardHeader>
                <CardTitle>Club Settings</CardTitle>
                <CardDescription>Manage club information and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Settings className="h-12 w-12 mx-auto mb-4" />
                  <p>Settings interface would be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
