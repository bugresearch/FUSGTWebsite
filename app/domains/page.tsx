"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Code,
  Camera,
  Users,
  Calendar,
  Laptop,
  Palette,
  Megaphone,
  ClipboardList,
  ChevronDown,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Search,
  Filter,
  X,
  UserSearch,
} from "lucide-react"
import Link from "next/link"

interface TeamMember {
  name: string
  year: string
  branch: string
  regNumber: string
  role: string
  skills: string[]
  interests: string[]
  image: string
  social: { [key: string]: string }
  domain: string
}

export default function DomainsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDomain, setSelectedDomain] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [isSearchActive, setIsSearchActive] = useState(false)

  const domains = [
    {
      name: "Technical",
      description:
        "Dive into the world of technology with coding workshops, AI/ML sessions, web development, and software engineering projects.",
      icon: Code,
      color: "bg-blue-500",
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50",
      head: {
        name: "Piyush Kumar",
        position: "Technical Head",
        image: "/nwc-logo.jpg?height=100&width=100",
        bio: "Final year CSE student passionate about AI and full-stack development",
      },
      activities: ["Coding Bootcamps", "AI/ML Workshops", "Hackathons", "Open Source Contributions", "Tech Talks"],
      subDomains: [
        { name: "Web Development", icon: Laptop },
        { name: "AI/ML", icon: Code },
        { name: "Mobile Development", icon: Laptop },
        { name: "Data Science", icon: Code },
      ],
      members: [
        {
          name: "Arjun Sharma",
          year: "4th Year",
          branch: "CSE",
          regNumber: "RA2011003010001",
          role: "Technical Head",
          skills: ["React", "Node.js", "Python", "Machine Learning", "AWS"],
          interests: ["AI/ML", "Full Stack Development", "Cloud Computing"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "arjun@nwc.srm.edu", github: "#", linkedin: "#" },
          domain: "Technical",
        },
        {
          name: "Vikash Kumar",
          year: "3rd Year",
          branch: "CSE",
          regNumber: "RA2111003010045",
          role: "Web Development Lead",
          skills: ["JavaScript", "React", "Next.js", "MongoDB", "Express"],
          interests: ["Frontend Development", "UI/UX", "Web Performance"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "vikash@nwc.srm.edu", github: "#", linkedin: "#" },
          domain: "Technical",
        },
        {
          name: "Ananya Reddy",
          year: "3rd Year",
          branch: "CSE",
          regNumber: "RA2111003010078",
          role: "AI/ML Coordinator",
          skills: ["Python", "TensorFlow", "PyTorch", "Data Analysis", "OpenCV"],
          interests: ["Computer Vision", "NLP", "Deep Learning"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "ananya@nwc.srm.edu", github: "#", linkedin: "#" },
          domain: "Technical",
        },
        {
          name: "Rohit Gupta",
          year: "2nd Year",
          branch: "CSE",
          regNumber: "RA2211003010123",
          role: "Mobile App Developer",
          skills: ["Flutter", "Dart", "Firebase", "React Native", "Java"],
          interests: ["Mobile Development", "Cross-platform Apps", "UI Design"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "rohit@nwc.srm.edu", github: "#", linkedin: "#" },
          domain: "Technical",
        },
        {
          name: "Shreya Patel",
          year: "2nd Year",
          branch: "IT",
          regNumber: "RA2211004010089",
          role: "Data Science Enthusiast",
          skills: ["Python", "R", "SQL", "Tableau", "Pandas"],
          interests: ["Data Visualization", "Statistical Analysis", "Business Intelligence"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "shreya@nwc.srm.edu", github: "#", linkedin: "#" },
          domain: "Technical",
        },
      ],
    },
    {
      name: "Media",
      description:
        "Express creativity through photography, graphic design, video production, and content creation for digital platforms.",
      icon: Camera,
      color: "bg-purple-500",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50",
      head: {
        name: "Priya Patel",
        position: "Media Head",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Creative designer and photographer with expertise in visual storytelling",
      },
      activities: [
        "Photography Contests",
        "Design Workshops",
        "Video Production",
        "Social Media Management",
        "Brand Design",
      ],
      subDomains: [
        { name: "Photography", icon: Camera },
        { name: "Graphic Design", icon: Palette },
        { name: "Video Editing", icon: Camera },
        { name: "Content Writing", icon: Megaphone },
      ],
      members: [
        {
          name: "Priya Patel",
          year: "3rd Year",
          branch: "CSE",
          regNumber: "RA2111003010034",
          role: "Media Head",
          skills: ["Photoshop", "Illustrator", "Premiere Pro", "Photography", "Branding"],
          interests: ["Visual Design", "Photography", "Brand Identity"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "priya@nwc.srm.edu", instagram: "#", linkedin: "#" },
          domain: "Media",
        },
        {
          name: "Karthik Raj",
          year: "3rd Year",
          branch: "ECE",
          regNumber: "RA2111005010067",
          role: "Photography Lead",
          skills: ["DSLR Photography", "Lightroom", "Portrait Photography", "Event Photography"],
          interests: ["Street Photography", "Portraits", "Event Coverage"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "karthik@nwc.srm.edu", instagram: "#", linkedin: "#" },
          domain: "Media",
        },
        {
          name: "Meera Singh",
          year: "2nd Year",
          branch: "CSE",
          regNumber: "RA2211003010156",
          role: "Graphic Designer",
          skills: ["Figma", "Canva", "Illustrator", "UI Design", "Logo Design"],
          interests: ["Digital Art", "UI/UX Design", "Brand Design"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "meera@nwc.srm.edu", instagram: "#", linkedin: "#" },
          domain: "Media",
        },
        {
          name: "Aditya Verma",
          year: "2nd Year",
          branch: "IT",
          regNumber: "RA2211004010098",
          role: "Video Editor",
          skills: ["Final Cut Pro", "After Effects", "DaVinci Resolve", "Motion Graphics"],
          interests: ["Video Production", "Motion Graphics", "Storytelling"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "aditya@nwc.srm.edu", instagram: "#", linkedin: "#" },
          domain: "Media",
        },
        {
          name: "Kavya Nair",
          year: "1st Year",
          branch: "CSE",
          regNumber: "RA2311003010201",
          role: "Content Writer",
          skills: ["Creative Writing", "Copywriting", "Social Media", "Blog Writing"],
          interests: ["Content Strategy", "Creative Writing", "Digital Marketing"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "kavya@nwc.srm.edu", instagram: "#", linkedin: "#" },
          domain: "Media",
        },
      ],
    },
    {
      name: "Non-Technical",
      description:
        "Develop leadership skills, strategic thinking, and business acumen through management workshops and leadership programs.",
      icon: Users,
      color: "bg-green-500",
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
      head: {
        name: "Rahul Kumar",
        position: "Non-Technical Head",
        image: "/placeholder.svg?height=100&width=100",
        bio: "MBA student with experience in project management and team leadership",
      },
      activities: [
        "Leadership Workshops",
        "Case Study Competitions",
        "Public Speaking",
        "Team Building",
        "Strategic Planning",
      ],
      subDomains: [
        { name: "Leadership", icon: Users },
        { name: "Management", icon: ClipboardList },
        { name: "Public Speaking", icon: Megaphone },
        { name: "Strategy", icon: ClipboardList },
      ],
      members: [
        {
          name: "Rahul Kumar",
          year: "4th Year",
          branch: "MBA",
          regNumber: "RA2011006010012",
          role: "Non-Technical Head",
          skills: ["Leadership", "Project Management", "Public Speaking", "Strategic Planning"],
          interests: ["Team Leadership", "Business Strategy", "Entrepreneurship"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "rahul@nwc.srm.edu", linkedin: "#" },
          domain: "Non-Technical",
        },
        {
          name: "Divya Sharma",
          year: "3rd Year",
          branch: "BBA",
          regNumber: "RA2111007010023",
          role: "Leadership Coordinator",
          skills: ["Team Management", "Communication", "Negotiation", "Conflict Resolution"],
          interests: ["Human Resources", "Team Dynamics", "Leadership Development"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "divya@nwc.srm.edu", linkedin: "#" },
          domain: "Non-Technical",
        },
        {
          name: "Arjun Menon",
          year: "3rd Year",
          branch: "CSE",
          regNumber: "RA2111003010087",
          role: "Public Speaking Lead",
          skills: ["Public Speaking", "Presentation", "Debate", "Communication"],
          interests: ["Oratory", "Debate", "Communication Skills"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "arjun.menon@nwc.srm.edu", linkedin: "#" },
          domain: "Non-Technical",
        },
        {
          name: "Pooja Agarwal",
          year: "2nd Year",
          branch: "BBA",
          regNumber: "RA2211007010045",
          role: "Strategy Analyst",
          skills: ["Business Analysis", "Market Research", "Strategic Planning", "Data Analysis"],
          interests: ["Business Strategy", "Market Analysis", "Consulting"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "pooja@nwc.srm.edu", linkedin: "#" },
          domain: "Non-Technical",
        },
      ],
    },
    {
      name: "Organizing",
      description:
        "Master the art of event planning, coordination, and execution while building strong organizational and management skills.",
      icon: Calendar,
      color: "bg-orange-500",
      borderColor: "border-orange-200",
      bgColor: "bg-orange-50",
      head: {
        name: "Sneha Reddy",
        position: "Organizing Head",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Event management specialist with experience in large-scale event coordination",
      },
      activities: [
        "Event Planning",
        "Logistics Management",
        "Vendor Coordination",
        "Budget Management",
        "Team Coordination",
      ],
      subDomains: [
        { name: "Event Planning", icon: Calendar },
        { name: "Logistics", icon: ClipboardList },
        { name: "Coordination", icon: Users },
        { name: "Management", icon: ClipboardList },
      ],
      members: [
        {
          name: "Sneha Reddy",
          year: "3rd Year",
          branch: "CSE",
          regNumber: "RA2111003010056",
          role: "Organizing Head",
          skills: ["Event Planning", "Project Management", "Logistics", "Budget Management"],
          interests: ["Event Management", "Project Coordination", "Team Leadership"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "sneha@nwc.srm.edu", linkedin: "#", instagram: "#" },
          domain: "Organizing",
        },
        {
          name: "Ravi Krishnan",
          year: "3rd Year",
          branch: "ECE",
          regNumber: "RA2111005010089",
          role: "Logistics Coordinator",
          skills: ["Logistics Management", "Vendor Relations", "Supply Chain", "Coordination"],
          interests: ["Operations Management", "Supply Chain", "Process Optimization"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "ravi@nwc.srm.edu", linkedin: "#" },
          domain: "Organizing",
        },
        {
          name: "Nisha Gupta",
          year: "2nd Year",
          branch: "CSE",
          regNumber: "RA2211003010134",
          role: "Event Coordinator",
          skills: ["Event Coordination", "Time Management", "Communication", "Problem Solving"],
          interests: ["Event Planning", "Team Coordination", "Creative Planning"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "nisha@nwc.srm.edu", linkedin: "#", instagram: "#" },
          domain: "Organizing",
        },
        {
          name: "Akash Jain",
          year: "2nd Year",
          branch: "IT",
          regNumber: "RA2211004010076",
          role: "Budget Manager",
          skills: ["Financial Planning", "Budget Management", "Cost Analysis", "Excel"],
          interests: ["Financial Management", "Budget Planning", "Resource Optimization"],
          image: "/placeholder.svg?height=120&width=120",
          social: { email: "akash@nwc.srm.edu", linkedin: "#" },
          domain: "Organizing",
        },
      ],
    },
  ]

  // Flatten all members for search
  const allMembers: TeamMember[] = useMemo(() => {
    return domains.flatMap((domain) => domain.members.map((member) => ({
      ...member,
      domain: domain.name,
    })))
  }, [domains])


  // Search and filter logic
  const filteredMembers = useMemo(() => {
    let filtered = allMembers

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter((member) => {
        return (
          member.name.toLowerCase().includes(query) ||
          member.role.toLowerCase().includes(query) ||
          member.skills.some((skill) => skill.toLowerCase().includes(query)) ||
          member.interests.some((interest) => interest.toLowerCase().includes(query)) ||
          member.branch.toLowerCase().includes(query) ||
          member.domain.toLowerCase().includes(query)
        )
      })
    }

    // Filter by domain
    if (selectedDomain !== "all") {
      filtered = filtered.filter((member) => member.domain === selectedDomain)
    }

    // Filter by year
    if (selectedYear !== "all") {
      filtered = filtered.filter((member) => member.year === selectedYear)
    }

    return filtered
  }, [allMembers, searchQuery, selectedDomain, selectedYear])

  // Get unique values for filters
  const uniqueYears = useMemo(() => {
    const years = [...new Set(allMembers.map((member) => member.year))]
    return years.sort()
  }, [allMembers])

  const getSocialIcon = (platform: string) => {
    const icons: { [key: string]: any } = {
      linkedin: Linkedin,
      github: Github,
      instagram: Instagram,
      email: Mail,
    }
    return icons[platform] || Mail
  }

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text
    const regex = new RegExp(`(${query})`, "gi")
    const parts = text.split(regex)
    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      ),
    )
  }

  const clearSearch = () => {
    setSearchQuery("")
    setSelectedDomain("all")
    setSelectedYear("all")
    setIsSearchActive(false)
  }

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4">Our Domains</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Domains</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your passion and develop your skills across our four core domains. Each domain offers unique
            opportunities for growth and learning with dedicated team members ready to guide you.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <UserSearch className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Find Team Members</h2>
            </div>
            {(searchQuery || selectedDomain !== "all" || selectedYear !== "all") && (
              <Button variant="outline" onClick={clearSearch} className="flex items-center space-x-2">
                <X className="h-4 w-4" />
                <span>Clear Filters</span>
              </Button>
            )}
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {/* Search Input */}
            <div className="md:col-span-2">
              <Label htmlFor="search" className="text-sm font-medium mb-2 block">
                Search by name, skills, interests, or role
              </Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="search"
                  placeholder="e.g., React, Photography, Leadership..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setIsSearchActive(e.target.value.length > 0)
                  }}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Domain Filter */}
            <div>
              <Label className="text-sm font-medium mb-2 block">Domain</Label>
              <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                <SelectTrigger>
                  <SelectValue placeholder="All Domains" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Domains</SelectItem>
                  <SelectItem value="Technical">Technical</SelectItem>
                  <SelectItem value="Media">Media</SelectItem>
                  <SelectItem value="Non-Technical">Non-Technical</SelectItem>
                  <SelectItem value="Organizing">Organizing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Year Filter */}
            <div>
              <Label className="text-sm font-medium mb-2 block">Year</Label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="All Years" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {uniqueYears.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search Results Summary */}
          {(searchQuery || selectedDomain !== "all" || selectedYear !== "all") && (
            <div className="mb-6">
              <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">
                    Found {filteredMembers.length} member{filteredMembers.length !== 1 ? "s" : ""}
                    {searchQuery && ` matching "${searchQuery}"`}
                    {selectedDomain !== "all" && ` in ${selectedDomain}`}
                    {selectedYear !== "all" && ` from ${selectedYear}`}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Search Results */}
      {(searchQuery || selectedDomain !== "all" || selectedYear !== "all") && (
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            {filteredMembers.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMembers.map((member, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center pb-4">
                      <Avatar className="w-20 h-20 mx-auto mb-3">
                        <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-lg">{highlightText(member.name, searchQuery)}</CardTitle>
                      <CardDescription className="font-medium text-blue-600">
                        {highlightText(member.role, searchQuery)}
                      </CardDescription>
                      <div className="flex justify-center space-x-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {member.year}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {member.branch}
                        </Badge>
                        <Badge className="text-xs bg-blue-100 text-blue-800">{member.domain}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Registration Number */}
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">Registration Number</p>
                        <p className="text-sm font-mono bg-gray-100 px-2 py-1 rounded text-center">
                          {member.regNumber}
                        </p>
                      </div>

                      {/* Skills */}
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-2">Skills</p>
                        <div className="flex flex-wrap gap-1">
                          {member.skills.slice(0, 3).map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {highlightText(skill, searchQuery)}
                            </Badge>
                          ))}
                          {member.skills.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{member.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Interests */}
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-2">Interests</p>
                        <div className="flex flex-wrap gap-1">
                          {member.interests.map((interest, interestIndex) => (
                            <Badge key={interestIndex} variant="outline" className="text-xs">
                              {highlightText(interest, searchQuery)}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center space-x-2 pt-2">
                        {Object.entries(member.social).map(([platform, link]) => {
                          const IconComponent = getSocialIcon(platform)
                          return (
                            <Button
                              key={platform}
                              variant="outline"
                              size="sm"
                              className="w-8 h-8 p-0 hover:bg-blue-50"
                              asChild
                            >
                              <Link href={link as string}>
                                <IconComponent className="h-3 w-3" />
                              </Link>
                            </Button>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <UserSearch className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No members found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search criteria or browse all domains below.</p>
                <Button onClick={clearSearch} variant="outline">
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Domains with Team Members (Original Layout) */}
      {!isSearchActive && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto space-y-16">
            {domains.map((domain, index) => (
              <div key={domain.name} className={`${domain.bgColor} rounded-2xl p-8`}>
                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                  {/* Domain Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 ${domain.color} rounded-xl flex items-center justify-center`}>
                        <domain.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">{domain.name}</h2>
                        <p className="text-gray-600 mt-2">{domain.description}</p>
                      </div>
                    </div>

                    {/* Sub-domains */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-4">Sub-domains</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {domain.subDomains.map((subDomain, idx) => (
                          <div key={idx} className="flex items-center space-x-3 bg-white rounded-lg p-3">
                            <subDomain.icon className="h-5 w-5 text-gray-600" />
                            <span className="font-medium">{subDomain.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Activities */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Key Activities</h3>
                      <div className="flex flex-wrap gap-2">
                        {domain.activities.map((activity, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-white">
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Domain Head */}
                  <div>
                    <Card className={`${domain.borderColor} border-2`}>
                      <CardHeader className="text-center">
                        <Avatar className="w-24 h-24 mx-auto mb-4">
                          <AvatarImage src={domain.head.image || "/placeholder.svg"} alt={domain.head.name} />
                          <AvatarFallback>
                            {domain.head.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-xl">{domain.head.name}</CardTitle>
                        <CardDescription className="font-medium">{domain.head.position}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 text-center">{domain.head.bio}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Team Members Section */}
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full mb-6 bg-white hover:bg-gray-50">
                      <Users className="mr-2 h-4 w-4" />
                      View Team Members ({domain.members.length})
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {domain.members.map((member, memberIndex) => (
                        <Card key={memberIndex} className="bg-white hover:shadow-lg transition-shadow">
                          <CardHeader className="text-center pb-4">
                            <Avatar className="w-20 h-20 mx-auto mb-3">
                              <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                              <AvatarFallback>
                                {member.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <CardTitle className="text-lg">{member.name}</CardTitle>
                            <CardDescription className="font-medium text-blue-600">{member.role}</CardDescription>
                            <div className="flex justify-center space-x-2 mt-2">
                              <Badge variant="outline" className="text-xs">
                                {member.year}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {member.branch}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {/* Registration Number */}
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-1">Registration Number</p>
                              <p className="text-sm font-mono bg-gray-100 px-2 py-1 rounded text-center">
                                {member.regNumber}
                              </p>
                            </div>

                            {/* Skills */}
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-2">Skills</p>
                              <div className="flex flex-wrap gap-1">
                                {member.skills.slice(0, 3).map((skill, skillIndex) => (
                                  <Badge key={skillIndex} variant="secondary" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                                {member.skills.length > 3 && (
                                  <Badge variant="secondary" className="text-xs">
                                    +{member.skills.length - 3}
                                  </Badge>
                                )}
                              </div>
                            </div>

                            {/* Interests */}
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-2">Interests</p>
                              <div className="flex flex-wrap gap-1">
                                {member.interests.map((interest, interestIndex) => (
                                  <Badge key={interestIndex} variant="outline" className="text-xs">
                                    {interest}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex justify-center space-x-2 pt-2">
                              {Object.entries(member.social).map(([platform, link]) => {
                                const IconComponent = getSocialIcon(platform)
                                return (
                                  <Button
                                    key={platform}
                                    variant="outline"
                                    size="sm"
                                    className="w-8 h-8 p-0 hover:bg-blue-50"
                                    asChild
                                  >
                                    <Link href={link as string}>
                                      <IconComponent className="h-3 w-3" />
                                    </Link>
                                  </Button>
                                )
                              })}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Join CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join a Domain?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Connect with our amazing team members and start your journey in your preferred domain. Each team is ready to
            welcome and guide new members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">Contact Domain Heads</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/events">Join Our Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
