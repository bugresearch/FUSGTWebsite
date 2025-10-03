"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function EventRegistrationPage() {
  const params = useParams()
  const eventId = params.id

  // Mock event data - in real app, fetch based on eventId
  const event = {
    id: eventId,
    title: "AI & Machine Learning Workshop",
    description:
      "Comprehensive workshop covering fundamentals of AI/ML with hands-on projects and real-world applications.",
    date: "2024-02-15",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Lab, Block A",
    domain: "Technical",
    price: "Free",
    instructor: "Dr. Rajesh Kumar",
    registrations: 45,
    maxRegistrations: 60,
  }

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    rollNumber: "",
    year: "",
    branch: "",
    domainInterest: "",
    experience: "",
    expectations: "",
    dietaryRestrictions: "",
    agreeTerms: false,
    agreeUpdates: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <CardTitle className="text-2xl text-green-600">Registration Successful!</CardTitle>
              <CardDescription>
                Thank you for registering for {event.title}. You will receive a confirmation email shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Event Details</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Please save this information and arrive 15 minutes early.</p>
                  <p>Check your email for additional instructions and materials.</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>
                  <Link href="/events">View More Events</Link>
                </Button>
                <Button variant="outline">
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6">
          <Link href="/events" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Event Info */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">{event.domain}</Badge>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-gray-500" />
                    {event.registrations}/{event.maxRegistrations} registered
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">{event.price}</div>
                  <div className="text-sm text-gray-600">Instructor: {event.instructor}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Event Registration</CardTitle>
                <CardDescription>
                  Fill out the form below to register for this event. All fields marked with * are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+91 9876543210"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="rollNumber">Roll Number *</Label>
                        <Input
                          id="rollNumber"
                          value={formData.rollNumber}
                          onChange={(e) => handleInputChange("rollNumber", e.target.value)}
                          placeholder="RA2011003010XXX"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Academic Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="year">Year of Study *</Label>
                        <Select onValueChange={(value) => handleInputChange("year", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1st">1st Year</SelectItem>
                            <SelectItem value="2nd">2nd Year</SelectItem>
                            <SelectItem value="3rd">3rd Year</SelectItem>
                            <SelectItem value="4th">4th Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="branch">Branch/Department *</Label>
                        <Select onValueChange={(value) => handleInputChange("branch", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your branch" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cse">Computer Science Engineering</SelectItem>
                            <SelectItem value="ece">Electronics & Communication</SelectItem>
                            <SelectItem value="eee">Electrical & Electronics</SelectItem>
                            <SelectItem value="mech">Mechanical Engineering</SelectItem>
                            <SelectItem value="civil">Civil Engineering</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Event Specific Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Event Preferences</h3>
                    <div>
                      <Label htmlFor="domainInterest">Domain of Interest *</Label>
                      <Select onValueChange={(value) => handleInputChange("domainInterest", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your domain of interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Technical</SelectItem>
                          <SelectItem value="media">Media</SelectItem>
                          <SelectItem value="non-technical">Non-Technical</SelectItem>
                          <SelectItem value="organizing">Organizing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="experience">Previous Experience (Optional)</Label>
                      <Textarea
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        placeholder="Tell us about any relevant experience or projects..."
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label htmlFor="expectations">What do you expect from this event? *</Label>
                      <Textarea
                        id="expectations"
                        value={formData.expectations}
                        onChange={(e) => handleInputChange("expectations", e.target.value)}
                        placeholder="Share your expectations and learning goals..."
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="dietaryRestrictions">Dietary Restrictions (Optional)</Label>
                      <Input
                        id="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
                        placeholder="Any dietary restrictions or allergies..."
                      />
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Terms & Conditions</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agreeTerms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                        />
                        <Label htmlFor="agreeTerms" className="text-sm leading-relaxed">
                          I agree to the terms and conditions of the event. I understand that registration is mandatory
                          and I will attend the full duration of the event. *
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agreeUpdates"
                          checked={formData.agreeUpdates}
                          onCheckedChange={(checked) => handleInputChange("agreeUpdates", checked as boolean)}
                        />
                        <Label htmlFor="agreeUpdates" className="text-sm leading-relaxed">
                          I would like to receive updates about future events and activities from NWC Association.
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button type="submit" className="w-full" disabled={isSubmitting || !formData.agreeTerms}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Registering...
                        </>
                      ) : (
                        "Complete Registration"
                      )}
                    </Button>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      By registering, you agree to our terms and conditions.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
