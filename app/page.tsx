"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Trophy, ArrowRight, Star, Target, Eye, CalendarDays, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isVisible, setIsVisible] = useState(false)
   const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const getClientFormattedDate = (dateStr: string): string => {
    try {
      return new Date(dateStr).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    } catch {
      return dateStr
    }
  }

  const stats = [
    { icon: Users, label: "Aktif Üye", value: "200+" },
    { icon: Calendar, label: "Etkinlik", value: "50+" },
    { icon: Trophy, label: "Ödül", value: "15+" },
    { icon: Star, label: "Yıl", value: "5+" },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Workshop: AI & ML Fundamentals",
      date: "2024-02-15",
      time: "10:00 AM",
      domain: "Technical",
      registrations: 45,
    },
    {
      id: 2,
      title: "Photography Contest",
      date: "2024-02-20",
      time: "2:00 PM",
      domain: "Media",
      registrations: 32,
    },
    {
      id: 3,
      title: "Leadership Summit",
      date: "2024-02-25",
      time: "9:00 AM",
      domain: "Non-Technical",
      registrations: 28,
    },
  ]

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Real-time Clock */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div
          className={`relative max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Real-time Date and Time */}
          <div className="mb-6 space-y-2">
            <div className="flex items-center justify-center space-x-4 text-blue-200">
              <div className="flex items-center space-x-2">
                <CalendarDays className="h-5 w-5" />
                <span className="text-lg font-medium">{formatDate(currentTime)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span className="text-lg font-mono">{formatTime(currentTime)}</span>
              </div>
            </div>
          </div>

          <Badge className="mb-4 bg-white/10 text-white border-white/20 animate-fade-in">
            Fırat Üniversitesi Siber Güvenlik Topluluğu
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-slide-up">
            Fırat Üniversitesi Siber Güvenlik Topluluğu
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-slide-up delay-200">
          Siber dünyayı keşfetmek ve geleceğini güvence altına almak senin elinde! Hadi katıl, öğren, uygula ve fark yarat!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/events" className="flex items-center">
                Etkinlikleri Keşfet <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-900 hover:bg-white/10 transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/about">Daha Fazla Bilgi</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 transform transition-all duration-300 hover:bg-blue-200 hover:rotate-12">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview with Animation */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Fırat Üniversitesi Siber Güvenlik Topluluğu Hakkında</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Eye className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Vizyonumuz</h3>
                    <p className="text-gray-600">
                      Fırat Üniversitesi Siber Güvenlik Topluluğu, öğrencilerini siber güvenlik alanında yetkin, etik ve yaratıcı bireyler olarak yetiştirerek, ulusal ve uluslararası alanda saygın bir topluluk olmayı hedeflemektedir.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Misyonumuz</h3>
                    <p className="text-gray-600">
                      Topluluk olarak amacımız, öğrencilerimize hem teorik hem pratik siber güvenlik bilgisi kazandırmak, çeşitli etkinlikler ve CTF yarışmalarıyla deneyimlerini artırmak, akademik ve sektörel iş birlikleriyle kariyerlerini desteklemek ve etik bir şekilde güvenli internet kullanımını yaygınlaştırarak geleceğin siber güvenlik uzmanlarını yetiştirmektir.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-6 transform hover:scale-105 transition-all duration-200">
                <Link href="/about">Daha Fazla Bilgi Edin</Link>
              </Button>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg transform rotate-3 opacity-20"></div>
              <Image
                src="/sgt-logo.png?height=400&width=500"
                alt="Fırat Üniversitesi Siber Güvenlik Topluluğu"
                width={500}
                height={400}
                className="rounded-lg shadow-lg relative z-10 transform transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Domains Preview with Staggered Animation */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Komitelerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Komitelerimizi keşfederek size en uygun komitede kendinizi geliştirmeye başlayabilirsiniz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "CTF", description: "CTF ve Red Teaming alanında çalışmalar gerçekleştirir.", color: "bg-red-500" },
              { name: "Eğitim", description: "Kulüp içerisindeki eğitimlerin planlanmasını gerçekleştirir.", color: "bg-purple-500" },
              { name: "Tasarım & Sosyal Medya", description: "Grafik tasarımları ve sosyal medya yönetimini gerçekleştirir.", color: "bg-green-500" },
              { name: "Sponsorluk & Kurumsal İletişim", description: "İletişim ve sponsorluk konusundaki süreçlerimizi yönetir.", color: "bg-orange-500" },
            ].map((domain, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 ${domain.color} rounded-lg mb-4 flex items-center justify-center transform transition-all duration-300 hover:rotate-12`}
                  >
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <CardTitle>{domain.name}</CardTitle>
                  <CardDescription>{domain.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 animate-fade-in delay-500">
            <Button className="transform hover:scale-105 transition-all duration-200">
              <Link href="/domains">Tüm Komiteleri Gör</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events with Animation */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Yaklaşan Etkinlikler</h2>
            <p className="text-gray-600">Don't miss out on our exciting upcoming events and workshops.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.id}
                className={`hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <Badge className="w-fit mb-2 animate-pulse">{event.domain}</Badge>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                   <CardDescription>
                    {isMounted ? getClientFormattedDate(event.date) : ""} at {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{event.registrations} Katılımcı</span>
                    <Button size="sm" className="transform hover:scale-105 transition-all duration-200">
                      <Link href={`/events/${event.id}/register`}>Kayıt Ol</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 animate-fade-in delay-700">
            <Button className="transform hover:scale-105 transition-all duration-200">
              <Link href="/events">Tüm Etkinlikleri Görüntüle</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <section className="py-16 px-4 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-purple-900 opacity-90"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Aramıza Katılmaya Hazır Mısınız?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Siber dünyayı keşfetmek ve geleceğini güvence altına almak senin elinde! Hadi katıl, öğren, uygula ve fark yarat!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/events">Etkinlikleri Görüntüle</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-900 hover:bg-white/10 transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/contact">İletişime Geç</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
