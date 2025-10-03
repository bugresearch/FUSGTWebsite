import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  const coreTeam = [
    {
      name: "Eda Gün",
      position: "Başkan",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Final year CSE student passionate about technology and leadership. Leading NWC with vision and innovation.",
      domain: "Yönetim Kurulu",
      year: "3. Sınıf",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "aditya@nwc.srm.edu",
      },
    },
    {
      name: "Yunus Emre Çakar",
      position: "Başkan Yardımcısı",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Strategic thinker and excellent communicator. Supporting the president in all major initiatives.",
      domain: "Yönetim Kurulu",
      year: "3. Sınıf",
      social: {
        linkedin: "#",
        instagram: "#",
        email: "kavya@nwc.srm.edu",
      },
    },
    {
      name: "Arjun Sharma",
      position: "Sekreter",
      image: "/placeholder.svg?height=150&width=150",
      bio: "AI/ML enthusiast and full-stack developer. Leading technical initiatives and workshops.",
      domain: "Yönetim Kurulu",
      year: "3. Sınıf",
      social: {
        linkedin: "#",
        github: "#",
        email: "arjun@nwc.srm.edu",
      },
    },
    {
      name: "Deniz Bektaş",
      position: "Teknik İşlerden Sorumlu Yönetim Kurulu Üyesi",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Creative designer and photographer. Managing all visual content and brand identity.",
      domain: "Yönetim Kurulu",
      year: "4. Sınıf",
      social: {
        linkedin: "#",
        instagram: "#",
        email: "priya@nwc.srm.edu",
      },
    },
    {
      name: "Onur Öcal",
      position: "İdari İşlerden Sorumlu Yönetim Kurulu Üyesi",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Event management specialist. Coordinating all club events and activities.",
      domain: "Yönetim Kurulu",
      year: "3. Sınıf",
      social: {
        linkedin: "#",
        instagram: "#",
        email: "sneha@nwc.srm.edu",
      },
    },
    {
      name: "Vikram Joshi",
      position: "CTF Koordinatörü",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Detail-oriented and organized. Managing club documentation and communications.",
      domain: "CTF",
      year: "2nd Year",
      social: {
        linkedin: "#",
        email: "vikram@nwc.srm.edu",
      },
    },
    {
      name: "Ananya Gupta",
      position: "Eğitim Koordinatörü",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Finance and budget management expert. Ensuring transparent financial operations.",
      domain: "Eğitim",
      year: "3rd Year",
      social: {
        linkedin: "#",
        email: "ananya@nwc.srm.edu",
      },
    },
    {
      name: "Ananya Gupta",
      position: "Tasarım & Sosyal Medya Koordinatörü",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Finance and budget management expert. Ensuring transparent financial operations.",
      domain: "Tasarım & Sosyal Medya",
      year: "3rd Year",
      social: {
        linkedin: "#",
        email: "ananya@nwc.srm.edu",
      },
    },
    {
      name: "Ananya Gupta",
      position: "Sponsorluk & Kurumsal İletişim Koordinatörü",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Finance and budget management expert. Ensuring transparent financial operations.",
      domain: "Sponsorluk & Kurumsal İletişim",
      year: "3rd Year",
      social: {
        linkedin: "#",
        email: "ananya@nwc.srm.edu",
      },
    },
  ]

  const getDomainColor = (domain: string) => {
    const colors: { [key: string]: string } = {
      Leadership: "bg-blue-100 text-blue-800",
      Management: "bg-green-100 text-green-800",
      Technical: "bg-purple-100 text-purple-800",
      Media: "bg-pink-100 text-pink-800",
      "Non-Technical": "bg-orange-100 text-orange-800",
      Organizing: "bg-yellow-100 text-yellow-800",
      Administration: "bg-gray-100 text-gray-800",
      Finance: "bg-indigo-100 text-indigo-800",
    }
    return colors[domain] || "bg-gray-100 text-gray-800"
  }

  const getSocialIcon = (platform: string) => {
    const icons: { [key: string]: any } = {
      linkedin: Linkedin,
      github: Github,
      twitter: Twitter,
      instagram: Instagram,
      email: Mail,
    }
    return icons[platform] || Mail
  }

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4">Ekibimiz</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Çekirdek Ekibimiz İle Tanışın</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fırat Üniversitesi Siber Güvenlik Kulübü'nün yöneten ve vizyonumuzu ileriye taşıyan özverili kişileri tanıyın. Çeşitlilik içeren ekibimiz, her biri kendi alanında uzman bir çok kişiden meydana geliyor.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreTeam.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="text-center pb-4">
                  <Avatar className="w-32 h-32 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                    <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback className="text-2xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                  <CardDescription className="font-semibold text-lg text-blue-600 mb-2">
                    {member.position}
                  </CardDescription>
                  <div className="flex justify-center space-x-2 mb-3">
                    <Badge className={getDomainColor(member.domain)}>{member.domain}</Badge>
                    <Badge variant="outline">{member.year}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center space-x-2">
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
                            <IconComponent className="h-4 w-4" />
                          </Link>
                        </Button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ekibimize Katılmak Mı İstiyorsunuz?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Çekirdek ekibimize katılacak tutkulu ve kendini adamış öğrenciler arıyoruz. Liderlik fırsatlarıyla ilgileniyorsanız, bizimle iletişime geçin!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Link href="/contact">Çekirdek Ekip Başvurusu</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/events">Etkinliklere Katıl</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">9</div>
              <div className="text-gray-600">Çekirdek Ekip Üyesi</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5</div>
              <div className="text-gray-600">Yönetim Kurulu Üyesi</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-gray-600">Koordinatör</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">200+</div>
              <div className="text-gray-600">Aktif Üye</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
