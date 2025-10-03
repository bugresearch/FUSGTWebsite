"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, Instagram, Linkedin, Twitter, Facebook } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: "E-Posta",
      details: "info@firatsiber.com",
      description: "Bize istediğiniz zaman mail gönderebilirsiniz.",
    },
    {
      icon: Phone,
      title: "Whatsapp Grubu",
      details: "Üyelere Özel",
      description: "Whatsapp grubumuzda her gün 06:00 - 00:00 saatleri arasında bize ulaşabilirsiniz.",
    },
    {
      icon: MapPin,
      title: "Ofisimiz",
      details: "Teknoloji Fakültesi A BLOK No: 123",
      description: "Ofisimizde bizi ziyaret edebilirsiniz",
    },
    {
      icon: Clock,
      title: "Ofis Saatleri",
      details: "Pazartesi-Cuma: 9:00 - 17:00",
      description: "Ofise gelmeden önce bizimle farklı bir kanaldan iletişime geçiniz.",
    },
  ]

  const socialLinks = [
    { icon: Instagram, name: "Instagram", url: "https://www.instagram.com/nwc_srmofficial/?__pwa=1", color: "text-pink-600" },
    { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/company/nwcsrmist/", color: "text-blue-600" }
  ]

  const handleInputChange = (field: string, value: string) => {
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
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-600">Mesaj başarıyla gönderildi!</CardTitle>
              <CardDescription>İletişime geçtiğiniz için teşekkürler. Size 24 saat içerisinde dönüş sağlayacağız.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>
                  <Link href="/events">Etkinliklere Katıl</Link>
                </Button>
                <Button variant="outline">
                  <Link href="/">Anasayfa'ya Dön</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4">Contact Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">İletişim</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Etkinliklerimizle ilgili sorularınız mı var, ekibimize katılmak mı istiyorsunuz veya daha fazla bilgi mi ihtiyacınız var? Sizi dinliyoruz.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-2">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Mesaj Bırakın</CardTitle>
                  <CardDescription>
                    İletişim formunu doldurun. Size en kısa sürede dönüş sağlayacağız.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">İsim Soyisim *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-Posta Adresiniz *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Teelfon Numaranız</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+91 9876543210"
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">İletişim Sebebi *</Label>
                        <Select onValueChange={(value) => handleInputChange("category", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Kategori Seçiniz" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">Genel Sorular</SelectItem>
                            <SelectItem value="events">Etkinlik Bilgileri</SelectItem>
                            <SelectItem value="membership">Üyelik</SelectItem>
                            <SelectItem value="collaboration">İşbirliği</SelectItem>
                            <SelectItem value="feedback">Geri Bildirim</SelectItem>
                            <SelectItem value="support">Teknik Destek</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Konu *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Brief subject of your message"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Mesajınız *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Gönder
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle>Sıkça Sorulan Sorular</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Siber Güvenlik Topluluğu'na nasıl katılırım?</h4>
                    <p className="text-sm text-gray-600">
                      Etkinliklerimize katılarak, atölye çalışmalarımıza katılarak, bizimle doğrudan iletişim kurarak, stant günlerinde standımızı ziyaret ederek veya bu sayfa üzerinden bizimle iletişime geçerek topluluğumuza katılabilirsiniz. Tüm bölümlerden ve tüm sınıflardan öğrencileri topluluğumuza bekliyoruz.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tüm etkinlikleriniz ücretsiz mi?</h4>
                    <p className="text-sm text-gray-600">
                      Mümkün olan tüm etkinliklerimizi ücretsiz tutmak için elimizden geleni yapmaktayız. Workshoplar, konferanslar, eğitimler ve CTF etkinliklerimiz tamamen ücretsizdir. Piknik, ekip yemeği gibi etkinliklerde mümkün olan en düşük ücretleri sunmaya çalışıyoruz.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Size bir etkinlik önerebilir miyim?</h4>
                    <p className="text-sm text-gray-600">
                      Elbette bizimle iletişim kurmanız yeterli. Etkinlik fikirleriniz topluluğumuz için değerlidir.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Bizi Sosyal Medyadan Takip Edin</CardTitle>
                  <CardDescription>
                    Gelişmelerden ve duyurulardan haberdar olmak için bizi sosyal medya hesaplarımızdan takip edebilirsiniz.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button key={index} variant="outline" size="sm" className="flex items-center space-x-2" asChild>
                        <Link href={social.url}>
                          <social.icon className={`h-4 w-4 ${social.color}`} />
                          <span>{social.name}</span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardHeader>
                  <CardTitle>Konumumuz</CardTitle>
                  <CardDescription>
                    Fırat Üniversitesi Rektörlük Kampüsünü ziyaret ettiğinizde bizleri Teknoloji Fakültesi binası 123 numaralı odada bulabilirsiniz.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-64 overflow-hidden rounded-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.391080052149!2d80.04133681482238!3d12.823928621183186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f72dc2d49d75%3A0xd03fdd35a58505e6!2sUB%20Building%2C%20SRM%20University!5e0!3m2!1sen!2sin!4v1620000000000"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
