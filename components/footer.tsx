import Link from "next/link"
import { Instagram, Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "Hakkımızda", href: "/about" },
    { name: "Komiteler", href: "/domains" },
    { name: "Ekibimiz", href: "/team" },
    { name: "Etkinlikler", href: "/events" },
    { name: "İletişim", href: "/contact" },
  ]

  const domains = [
    { name: "CTF Koordinatörlüğü", href: "/domains#technical" },
    { name: "Eğitim Koordinatörlüğü", href: "/domains#media" },
    { name: "Tasarım & Sosyal Medya Koordinatörlüğü", href: "/domains#non-technical" },
    { name: "Sponsorluk & Kurumsal İletişim Koordinatörlüğü", href: "/domains#organizing" },
  ]

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/fusgt/?__pwa=1", name: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/nwcsrmist/", name: "LinkedIn" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SGT</span>
              </div>
              <span className="font-bold text-xl">FUSGT</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              FIrat Üniversitesi Siber Güvenlik Kulübü, Fırat Üniveristesi öğrecilerinin; siber güvenlik konusundaki farkındalıklarını arttırmak, sektöre hazırlamak, network edinmelerini sağlamak amacıyla kurulmuş bir öğrenci topluluğudur. 
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Domains */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Komitelerimiz</h3>
            <ul className="space-y-2">
              {domains.map((domain, index) => (
                <li key={index}>
                  <Link href={domain.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {domain.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">info@firatsiber.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Fırat Üniversitesi
                  <br />
                  Rektörlük Kampüsü, Teknoloji Fakültesi A BLOK 
                  <br />
                  Merkez/Elazığ
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Fırat Üniversitesi Siber Güvenlik Topluluğu. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kullanım Sözleşmesi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
