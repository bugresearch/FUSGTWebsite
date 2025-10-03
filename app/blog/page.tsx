"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Search, Tag, ArrowRight, Heart, MessageCircle, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const blogPosts = [
    {
      id: 1,
      title: "How AI is Transforming Student Learning at SRM",
      excerpt:
        "Exploring the impact of artificial intelligence on education and how students can leverage AI tools for better learning outcomes.",
      content: "Full article content here...",
      category: "Technical",
      author: {
        name: "Arjun Sharma",
        avatar: "/nwc-logo.jpg?height=40&width=40",
        role: "Technical Head",
      },
      publishedAt: "2024-01-20",
      readTime: "5 min read",
      image: "/nwc-logo.jpg?height=300&width=600",
      likes: 45,
      comments: 12,
      featured: true,
      tags: ["AI", "Machine Learning", "Education", "Technology"],
    },
    {
      id: 2,
      title: "Photography Tips: Capturing the Perfect Event Moments",
      excerpt: "Learn professional photography techniques to capture stunning photos at college events and workshops.",
      content: "Full article content here...",
      category: "Media",
      author: {
        name: "Priya Patel",
        avatar: "/nwc-logo.jpg?height=40&width=40",
        role: "Media Head",
      },
      publishedAt: "2024-01-18",
      readTime: "7 min read",
      image: "/nwc-logo.jpg?height=300&width=600",
      likes: 67,
      comments: 23,
      featured: false,
      tags: ["Photography", "Events", "Tips", "Creative"],
    },
    {
      id: 3,
      title: "Leadership Lessons from Our Annual Summit",
      excerpt: "Key takeaways and insights from industry leaders who spoke at our leadership development summit.",
      content: "Full article content here...",
      category: "Non-Technical",
      author: {
        name: "Rahul Kumar",
        avatar: "/nwc-logo.jpg?height=40&width=40",
        role: "Non-Technical Head",
      },
      publishedAt: "2024-01-15",
      readTime: "6 min read",
      image: "/nwc-logo.jpg?height=300&width=600",
      likes: 89,
      comments: 34,
      featured: true,
      tags: ["Leadership", "Summit", "Professional Development"],
    },
    {
      id: 4,
      title: "Behind the Scenes: Organizing a Successful Tech Fest",
      excerpt: "A detailed look at the planning, coordination, and execution of our annual technology festival.",
      content: "Full article content here...",
      category: "Organizing",
      author: {
        name: "Sneha Reddy",
        avatar: "/nwc-logo.jpg?height=40&width=40",
        role: "Organizing Head",
      },
      publishedAt: "2024-01-12",
      readTime: "8 min read",
      image: "/nwc-logo.jpg?height=300&width=600",
      likes: 56,
      comments: 18,
      featured: false,
      tags: ["Event Management", "Tech Fest", "Organization", "Planning"],
    },
    {
      id: 5,
      title: "Student Spotlight: Innovative Projects by NWC Members",
      excerpt: "Showcasing remarkable projects and achievements by our talented club members across different domains.",
      content: "Full article content here...",
      category: "Achievements",
      author: {
        name: "Editorial Team",
        avatar: "/nwc-logo.jpg?height=40&width=40",
        role: "NWC Association",
      },
      publishedAt: "2024-01-10",
      readTime: "4 min read",
      image: "/nwc-logo.jpg?height=300&width=600",
      likes: 78,
      comments: 29,
      featured: false,
      tags: ["Students", "Projects", "Innovation", "Achievements"],
    },
    {
      id: 6,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Exploring emerging technologies and frameworks that are shaping the future of web development.",
      content: "Full article content here...",
      category: "Technical",
      author: {
        name: "Vikash Kumar",
        avatar: "/nwc-logo.jpg?height=40&width=40",
        role: "Web Development Lead",
      },
      publishedAt: "2024-01-08",
      readTime: "9 min read",
      image: "/nwc-logo.jpg?height=300&width=600",
      likes: 92,
      comments: 41,
      featured: false,
      tags: ["Web Development", "Trends", "Technology", "Future"],
    },
  ]

  const categories = [
    { id: "all", name: "All Posts", count: blogPosts.length },
    { id: "Technical", name: "Technical", count: blogPosts.filter((post) => post.category === "Technical").length },
    { id: "Media", name: "Media", count: blogPosts.filter((post) => post.category === "Media").length },
    {
      id: "Non-Technical",
      name: "Non-Technical",
      count: blogPosts.filter((post) => post.category === "Non-Technical").length,
    },
    { id: "Organizing", name: "Organizing", count: blogPosts.filter((post) => post.category === "Organizing").length },
    {
      id: "Achievements",
      name: "Achievements",
      count: blogPosts.filter((post) => post.category === "Achievements").length,
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Technical: "bg-blue-100 text-blue-800",
      Media: "bg-purple-100 text-purple-800",
      "Non-Technical": "bg-green-100 text-green-800",
      Organizing: "bg-orange-100 text-orange-800",
      Achievements: "bg-yellow-100 text-yellow-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4">Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">FUSGT Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Topluluğumuza ait duyurular ve blog yazılarına bu bölümden ulaşabilirsiniz.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-1"
              >
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "all" && searchQuery === "" && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Öne Çıkan Yazılar</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative">
                    <Image
                      src={post.image || "/nwc-logo.jpg?height=300&width=600"}
                      alt={post.title}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white">Öne Çıkan</Badge>
                    <Badge className={`absolute top-4 right-4 ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={post.author.avatar || "/nwc-logo.jpg"} alt={post.author.name} />
                          <AvatarFallback>
                            {post.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{post.author.name}</p>
                          <p className="text-xs text-gray-500">{post.author.role}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <Button size="sm">
                        <Link href={`/blog/${post.id}`} className="flex items-center">
                          Yazıyı Oku <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              {selectedCategory === "all" ? "Tüm Yazılar" : `${selectedCategory} Yazılar`}
              {searchQuery && ` matching "${searchQuery}"`}
            </h2>
            <p className="text-gray-600">{filteredPosts.length} yazı bulundu</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative">
                  <Image
                    src={post.image || "/nwc-logo.jpg?height=400&width=400"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-3 right-3 ${getCategoryColor(post.category)}`}>{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-3">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={post.author.avatar || "/nwc-logo.jpg"} alt={post.author.name} />
                      <AvatarFallback className="text-xs">
                        {post.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{post.author.name}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Tag className="h-2 w-2 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-3 w-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Hiçbir Yazı Bulunamadı</h3>
              <p className="text-gray-500 mb-4">Aradığınız kriterlere uygun herhangi bir yazı bulunamadı.</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
              >
                Filtreleri Temizle
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">E-Posta Bülteni</h2>
          <p className="text-xl mb-8 text-blue-100">
            En yeni yazılarımıza bültene üye olarak anında erişebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Mail adresinizi giriniz" className="bg-white text-gray-900" />
            <Button className="bg-white text-blue-900 hover:bg-blue-50">Abone Ol</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
