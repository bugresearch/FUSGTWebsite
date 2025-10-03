"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Camera, Video, Calendar, Play, Download, Share2, Heart } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const galleryItems = [
    {
      id: 1,
      title: "AI Workshop 2024",
      category: "Technical",
      type: "photo",
      date: "2024-01-15",
      images: [
        "/nwc-logo.jpg?height=300&width=400",
        "/nwc-logo.jpg?height=300&width=400",
        "/nwc-logo.jpg?height=300&width=400",
        "/nwc-logo.jpg?height=300&width=400",
      ],
      description: "Students learning AI fundamentals and working on hands-on projects",
      likes: 45,
      downloads: 12,
    },
    {
      id: 2,
      title: "Photography Contest Highlights",
      category: "Media",
      type: "photo",
      date: "2024-01-10",
      images: [
        "/nwc-logo.jpg?height=300&width=400",
        "/nwc-logo.jpg?height=300&width=400",
        "/nwc-logo.jpg?height=300&width=400",
      ],
      description: "Best shots from our annual photography contest",
      likes: 67,
      downloads: 23,
    },
    {
      id: 3,
      title: "Leadership Summit 2023",
      category: "Non-Technical",
      type: "video",
      date: "2023-12-20",
      thumbnail: "/nwc-logo.jpg?height=300&width=400",
      videoUrl: "#",
      description: "Highlights from our leadership development summit",
      likes: 89,
      downloads: 34,
      duration: "5:42",
    },
    {
      id: 4,
      title: "Tech Fest Behind the Scenes",
      category: "Organizing",
      type: "photo",
      date: "2023-12-15",
      images: [
        "/nwc-logo.jpg?height=300&width=400",
        "/nwc-logo.jpg?height=300&width=400",
        "/nwc-logo.jpg?height=300&width=400",
        "/nwc-logo.jpg?height=300&width=400",
        "/nwc-logo.jpg?height=300&width=400",
      ],
      description: "Behind the scenes moments from our annual tech fest",
      likes: 56,
      downloads: 18,
    },
    {
      id: 5,
      title: "Web Development Bootcamp",
      category: "Technical",
      type: "video",
      date: "2023-11-25",
      thumbnail: "/nwc-logo.jpg?height=300&width=400",
      videoUrl: "#",
      description: "3-day intensive web development training session",
      likes: 78,
      downloads: 29,
      duration: "8:15",
    },
    {
      id: 6,
      title: "Design Workshop Creations",
      category: "Media",
      type: "photo",
      date: "2023-11-20",
      images: [
        "/nwc-logo.jpg?height=300&width=400",
        "/nwc-logo.jpg?height=300&width=400",
        "/nwc-logo.jpg?height=300&width=400",
      ],
      description: "Creative works from our graphic design workshop",
      likes: 43,
      downloads: 15,
    },
  ]

  const categories = [
    { id: "all", name: "All", count: galleryItems.length },
    { id: "Technical", name: "Technical", count: galleryItems.filter((item) => item.category === "Technical").length },
    { id: "Media", name: "Media", count: galleryItems.filter((item) => item.category === "Media").length },
    {
      id: "Non-Technical",
      name: "Non-Technical",
      count: galleryItems.filter((item) => item.category === "Non-Technical").length,
    },
    {
      id: "Organizing",
      name: "Organizing",
      count: galleryItems.filter((item) => item.category === "Organizing").length,
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Technical: "bg-blue-100 text-blue-800",
      Media: "bg-purple-100 text-purple-800",
      "Non-Technical": "bg-green-100 text-green-800",
      Organizing: "bg-orange-100 text-orange-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4">Media Gallery</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Memories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Relive the best moments from our events, workshops, and activities. Browse through our collection of photos
            and videos showcasing the vibrant life of NWC Association.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="grid" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="masonry">Masonry View</TabsTrigger>
            </TabsList>

            <TabsContent value="grid">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <div className="relative">
                      {item.type === "photo" ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="cursor-pointer relative">
                              <Image
                                src={item.images?.[0] || "/nwc-logo.jpg"}
                                alt={item.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                              {item.images && item.images.length > 1 && (
                                <Badge className="absolute top-3 right-3 bg-black/70 text-white">
                                  +{item.images.length - 1} more
                                </Badge>
                              )}
                            </div>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <div className="grid grid-cols-2 gap-4">
                              {item.images?.map((image, index) => (
                                <Image
                                  key={index}
                                  src={image || "/placeholder.svg"}
                                  alt={`${item.title} ${index + 1}`}
                                  width={400}
                                  height={300}
                                  className="w-full h-auto rounded-lg"
                                />
                              ))}
                            </div>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <div className="relative cursor-pointer">
                          <Image
                            src={item.thumbnail || "/placeholder.svg"}
                            alt={item.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <div className="bg-white/90 rounded-full p-3">
                              <Play className="h-6 w-6 text-gray-800" />
                            </div>
                          </div>
                          <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                            <Video className="h-3 w-3 mr-1" />
                            {item.duration}
                          </Badge>
                        </div>
                      )}
                      <Badge className={`absolute top-3 right-3 ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{item.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="h-4 w-4" />
                            <span>{item.downloads}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="masonry">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {filteredItems.map((item) => (
                  <Card
                    key={item.id}
                    className="break-inside-avoid overflow-hidden hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="relative">
                      <Image
                        src={
                          item.type === "photo"
                            ? item.images?.[0] || "/nwc-logo.jpg"
                            : item.thumbnail || "/nwc-logo.jpg"
                        }
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.type === "video" && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="bg-white/90 rounded-full p-3">
                            <Play className="h-6 w-6 text-gray-800" />
                          </div>
                        </div>
                      )}
                      <Badge className={`absolute top-3 right-3 ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{item.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="h-4 w-4" />
                            <span>{item.downloads}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Upload CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Memories</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have photos or videos from our events? Share them with the community and help us build our gallery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Camera className="mr-2 h-4 w-4" />
              Upload Photos
            </Button>
            <Button size="lg" variant="outline">
              <Video className="mr-2 h-4 w-4" />
              Upload Videos
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
