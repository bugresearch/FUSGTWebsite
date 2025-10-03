import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Target, Eye, Heart, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const achievements = [
    {
      title: "Best Technical Club 2023",
      description: "Awarded by SRM University for outstanding technical contributions",
    },
    {
      title: "Innovation Award",
      description: "Recognized for innovative project implementations and student engagement",
    },
    {
      title: "Community Impact",
      description: "Acknowledged for positive impact on student community and skill development",
    },
  ]

  const values = [
    { icon: Lightbulb, title: "İnovasyon", description: "Yaratıcı düşünmeyi, yapılmayanı yapmayı seviyoruz." },
    { icon: Users, title: "İşbirliği", description: "Güçlü ekipler ve güçlü işbirlikleri oluştururuz." },
    { icon: Heart, title: "Kapsayıcılık", description: "Her teknik seviyeden üyeye kapımız açık." },
    { icon: Target, title: "Mükemmellik", description: "Yaptığımız her işte en yüksek standartları hedefliyoruz." },
  ]

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Hakkımızda</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fırat Üniveristesi Siber Güvenlik Topluluğu</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FIrat Üniversitesi Siber Güvenlik Kulübü, Fırat Üniveristesi öğrecilerinin; siber güvenlik konusundaki farkındalıklarını arttırmak, sektöre hazırlamak, network edinmelerini sağlamak amacıyla kurulmuş bir öğrenci topluluğudur.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Eye className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Vizyonumuz</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Fırat Üniversitesi Siber Güvenlik Topluluğu, öğrencilerini siber güvenlik alanında yetkin, etik ve yaratıcı bireyler olarak yetiştirerek, ulusal ve uluslararası alanda saygın bir topluluk olmayı hedeflemektedir.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Target className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Misyonumuz</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Topluluk olarak amacımız, öğrencilerimize hem teorik hem pratik siber güvenlik bilgisi kazandırmak, çeşitli etkinlikler ve CTF yarışmalarıyla deneyimlerini artırmak, akademik ve sektörel iş birlikleriyle kariyerlerini desteklemek ve etik bir şekilde güvenli internet kullanımını yaygınlaştırarak geleceğin siber güvenlik uzmanlarını yetiştirmektir.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Tarihçemiz</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2019, the NWC Association began as a small group of passionate students who wanted to
                  create a platform for learning and growth beyond traditional academics.
                </p>
                <p>
                  Over the years, we've grown into one of the most active and influential student organizations at SRM
                  University, with over 200 active members and a track record of successful events, workshops, and
                  initiatives.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, community building, and a commitment to
                  excellence that has earned us recognition both within the university and beyond.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/sgt-logo.png?height=400&width=500"
                alt="Fırat Üniversitesi Siber Güvenlik Topluluğu"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Değerlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bu değerler, yaptığımız her şeyin temelini oluşturur ve topluluğumuzun kültürünü şekillendirir.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Başarılarımız</h2>
            <p className="text-gray-600">Bugüne kadar edindiğimiz sayısız başarıdan birkaçı...</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <Trophy className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Aktif Üye</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Etkinlik</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Ödül</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-600">Yıl</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
