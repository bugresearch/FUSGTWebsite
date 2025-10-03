import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI & Machine Learning Workshop",
      description:
        "Comprehensive workshop covering fundamentals of AI/ML with hands-on projects and real-world applications.",
      date: "2024-02-15",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Lab, Block A",
      domain: "Technical",
      registrations: 45,
      maxRegistrations: 60,
      image: "/nwc-logo.jpg?height=200&width=400",
      featured: true,
      price: "Free",
      instructor: "Dr. Rajesh Kumar",
    },
    {
      id: 2,
      title: "Photography Contest: Campus Life",
      description: "Capture the essence of campus life through your lens. Multiple categories and exciting prizes.",
      date: "2024-02-20",
      time: "2:00 PM - 6:00 PM",
      location: "Campus Wide",
      domain: "Media",
      registrations: 32,
      maxRegistrations: 100,
      image: "/nwc-logo.jpg?height=200&width=400",
      featured: false,
      price: "₹50",
      instructor: "Priya Patel",
    },
    {
      id: 3,
      title: "Leadership Summit 2024",
      description:
        "Annual leadership summit featuring industry experts, interactive sessions, and networking opportunities.",
      date: "2024-02-25",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      domain: "Non-Technical",
      registrations: 28,
      maxRegistrations: 150,
      image: "/nwc-logo.jpg?height=200&width=400",
      featured: true,
      price: "₹100",
      instructor: "Rahul Kumar",
    },
    {
      id: 4,
      title: "Event Management Masterclass",
      description:
        "Learn the art of organizing successful events from planning to execution with practical case studies.",
      date: "2024-03-05",
      time: "11:00 AM - 3:00 PM",
      location: "Conference Hall",
      domain: "Organizing",
      registrations: 18,
      maxRegistrations: 40,
      image: "/nwc-logo.jpg?height=200&width=400",
      featured: false,
      price: "₹75",
      instructor: "Sneha Reddy",
    },
  ]

  const pastEvents = [
    {
      id: 5,
      title: "Web Development Bootcamp",
      description: "3-day intensive bootcamp covering HTML, CSS, JavaScript, and React fundamentals.",
      date: "2024-01-15",
      domain: "Technical",
      registrations: 80,
      image: "/nwc-logo.jpg?height=200&width=400",
      success: true,
    },
    {
      id: 6,
      title: "Design Thinking Workshop",
      description: "Interactive workshop on design thinking methodology and creative problem solving.",
      date: "2024-01-10",
      domain: "Non-Technical",
      registrations: 65,
      image: "/nwc-logo.jpg?height=200&width=400",
      success: true,
    },
    {
      id: 7,
      title: "Annual Tech Fest",
      description: "Grand celebration of technology with competitions, exhibitions, and guest speakers.",
      date: "2023-12-20",
      domain: "Technical",
      registrations: 200,
      image: "/nwc-logo.jpg?height=200&width=400",
      success: true,
    },
  ]

  const getDomainColor = (domain: string) => {
    const colors: { [key: string]: string } = {
      Technical: "bg-blue-100 text-blue-800",
      Media: "bg-purple-100 text-purple-800",
      "Non-Technical": "bg-green-100 text-green-800",
      Organizing: "bg-orange-100 text-orange-800",
    }
    return colors[domain] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4">Events</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Workshops</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our exciting events, workshops, and sessions designed to enhance your skills, expand your network, and
            accelerate your personal and professional growth.
          </p>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-8">
              {/* Featured Events */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Featured Events</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {upcomingEvents
                    .filter((event) => event.featured)
                    .map((event) => (
                      <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative">
                          <Image
                            src={event.image || "/nwc-logo.jpg"}
                            alt={event.title}
                            width={400}
                            height={200}
                            className="w-full h-48 object-cover"
                          />
                          <Badge className="absolute top-4 left-4 bg-red-500 text-white">Featured</Badge>
                          <Badge className={`absolute top-4 right-4 ${getDomainColor(event.domain)}`}>
                            {event.domain}
                          </Badge>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          <CardDescription>{event.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3 mb-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="h-4 w-4 mr-2" />
                              {new Date(event.date).toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="h-4 w-4 mr-2" />
                              {event.time}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="h-4 w-4 mr-2" />
                              {event.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Users className="h-4 w-4 mr-2" />
                              {event.registrations}/{event.maxRegistrations} registered
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-lg font-bold text-green-600">{event.price}</div>
                            <Button>
                              <Link href={`/events/${event.id}/register`} className="flex items-center">
                                Register Now <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* All Upcoming Events */}
              <div>
                <h2 className="text-2xl font-bold mb-6">All Upcoming Events</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <Image
                          src={event.image || "/nwc-logo.jpg"}
                          alt={event.title}
                          width={400}
                          height={200}
                          className="w-full h-40 object-cover"
                        />
                        <Badge className={`absolute top-3 right-3 ${getDomainColor(event.domain)}`}>
                          {event.domain}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <CardDescription className="text-sm line-clamp-2">{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-2" />
                            {new Date(event.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-2" />
                            {event.registrations}/{event.maxRegistrations}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-green-600">{event.price}</span>
                          <Button size="sm">
                            <Link href={`/events/${event.id}/register`}>Register</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Past Events</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastEvents.map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow opacity-90">
                      <div className="relative">
                        <Image
                          src={event.image || "/nwc-logo.jpg"}
                          alt={event.title}
                          width={400}
                          height={200}
                          className="w-full h-40 object-cover grayscale"
                        />
                        <Badge className={`absolute top-3 right-3 ${getDomainColor(event.domain)}`}>
                          {event.domain}
                        </Badge>
                        <Badge className="absolute top-3 left-3 bg-gray-600 text-white">Completed</Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <CardDescription className="text-sm">{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-2" />
                            {new Date(event.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-2" />
                            {event.registrations} participants
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-xl mb-8 text-blue-100">
            Stay updated with our latest events and workshops. Join our community and grow with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/contact">Subscribe to Updates</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/domains">Explore Domains</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
