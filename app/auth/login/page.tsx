"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Lock, User, AlertCircle, CheckCircle, GraduationCap, Users, Shield, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface LoginFormData {
  email: string
  password: string
  clubId?: string
  adminKey?: string
}

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("student")
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    clubId: "",
    adminKey: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
    setError("")
  }

  const validateSRMEmail = (email: string) => {
    const srmEmailRegex = /^[a-zA-Z]{2}\d{4}@srmist\.edu\.in$/
    return srmEmailRegex.test(email)
  }

  const validateClubEmail = (email: string) => {
    const clubEmailRegex = /^[a-zA-Z0-9._%+-]+@nwc\.srm\.edu$/
    return clubEmailRegex.test(email)
  }

  const validateAdminEmail = (email: string) => {
    const adminEmailRegex = /^admin@nwc\.srm\.edu$/
    return adminEmailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Validation based on login type
      if (activeTab === "student") {
        if (!validateSRMEmail(formData.email)) {
          throw new Error("Please use your SRM email address (format: pg1234@srmist.edu.in)")
        }
      } else if (activeTab === "member") {
        if (!validateClubEmail(formData.email)) {
          throw new Error("Please use your NWC club email address (format: name@nwc.srm.edu)")
        }
        if (!formData.clubId) {
          throw new Error("Club Member ID is required")
        }
      } else if (activeTab === "admin") {
        if (!validateAdminEmail(formData.email)) {
          throw new Error("Please use the admin email address (admin@nwc.srm.edu)")
        }
        if (!formData.adminKey) {
          throw new Error("Admin access key is required")
        }
      }

      // Simulate authentication
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock authentication logic
      let userData: any = {}
      let redirectPath = "/"

      if (activeTab === "student") {
        userData = {
          email: formData.email,
          name: "Student Name",
          regNumber: formData.email.split("@")[0].toUpperCase(),
          type: "student",
          loginTime: new Date().toISOString(),
        }
        redirectPath = "/dashboard"
      } else if (activeTab === "member") {
        userData = {
          email: formData.email,
          name: "Club Member",
          clubId: formData.clubId,
          type: "member",
          role: "Core Team Member",
          loginTime: new Date().toISOString(),
        }
        redirectPath = "/member-dashboard"
      } else if (activeTab === "admin") {
        userData = {
          email: formData.email,
          name: "Administrator",
          type: "admin",
          permissions: ["all"],
          loginTime: new Date().toISOString(),
        }
        redirectPath = "/admin"
      }

      setSuccess(`Login successful! Redirecting to ${activeTab} dashboard...`)

      // Store user session
      localStorage.setItem("user", JSON.stringify(userData))

      setTimeout(() => {
        router.push(redirectPath)
      }, 1500)
    } catch (err: any) {
      setError(err.message || "Invalid credentials. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const getDemoCredentials = () => {
    switch (activeTab) {
      case "student":
        return {
          email: "pg1234@srmist.edu.in",
          password: "student123",
          additional: null,
        }
      case "member":
        return {
          email: "arjun@nwc.srm.edu",
          password: "member123",
          additional: "NWC2024001",
        }
      case "admin":
        return {
          email: "admin@nwc.srm.edu",
          password: "admin123",
          additional: "NWC_ADMIN_2024",
        }
      default:
        return { email: "", password: "", additional: null }
    }
  }

  const getTabConfig = () => {
    switch (activeTab) {
      case "student":
        return {
          icon: GraduationCap,
          title: "Fırat Üniversitesi Öğrenci Girişi",
          description: "Fırat Üniversitesi öğrencileri sisteme buradan giriş yapmalıdır.",
          emailLabel: "Fırat Üniversitesi Öğrenci Maili",
          emailPlaceholder: "205260043@firat.edu.tr",
          emailHelper: "Resmi Fırat Üniversitesi E-Posta adresinizi kullanınız.",
          additionalField: null,
          color: "blue",
        }
      case "member":
        return {
          icon: Users,
          title: "FUSGT Üye Girişi",
          description: "Fırat Üniversitesi Siber Güvenlik Topluluğu üyeleri buradan giriş yapmalıdır.",
          emailLabel: "Fırat Üniversitesi Öğrenci Maili",
          emailPlaceholder: "205260043@firat.edu.tr",
          emailHelper: "Resmi Fırat Üniversitesi E-Posta adresinizi kullanınız.",
          additionalField: {
            label: "FUSGT Üye Numarası",
            placeholder: "SGT2025001",
            helper: "Üyelik sırasında size verilen üye numarasıdır.",
          },
          color: "purple",
        }
      case "admin":
        return {
          icon: Shield,
          title: "Yönetim Girişi",
          description: "Fırat Üniversitesi Siber Güvenlik Topluluğu Yönetim Kurulu üyeleri buradan giriş yapmalıdır.",
          emailLabel: "Fırat Üniversitesi Öğrenci Maili",
          emailPlaceholder: "admin@nwc.srm.edu",
          emailHelper: "Resmi Fırat Üniversitesi E-Posta adresinizi kullanınız.",
          additionalField: {
            label: "Yönetim Paneli Gizli Anahtarı",
            placeholder: "Gizli Anahtarı Giriniz",
            helper: "Bu anahtar yalnızca yönetim kurulu üyeleri ile paylaşılmaktadır.",
          },
          color: "red",
        }
      default:
        return {
          icon: User,
          title: "Login",
          description: "",
          emailLabel: "Email",
          emailPlaceholder: "",
          emailHelper: "",
          additionalField: null,
          color: "gray",
        }
    }
  }

  const config = getTabConfig()
  const demo = getDemoCredentials()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-12 px-4">
      <div className="max-w-lg w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <config.icon className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Fırat Üniversitesi Siber Güvenlik Topluluğu</h2>
          <p className="mt-2 text-gray-600">Kullanıcı tipinizi seçerek devam ediniz.</p>
        </div>

        {/* Login Tabs */}
        <Card className="shadow-xl">
          <CardHeader className="pb-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="student" className="flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">Öğrenci</span>
                </TabsTrigger>
                <TabsTrigger value="member" className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span className="hidden sm:inline">Üye</span>
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="hidden sm:inline">Yönetim Kurulu</span>
                </TabsTrigger>
              </TabsList>

              <div className="mt-6">
                <CardTitle className="flex items-center space-x-2">
                  <config.icon className={`h-5 w-5 text-${config.color}-600`} />
                  <span>{config.title}</span>
                </CardTitle>
                <CardDescription className="mt-1">{config.description}</CardDescription>
              </div>
            </Tabs>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <Label htmlFor="email">{config.emailLabel}</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder={config.emailPlaceholder}
                    className="pl-10"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">{config.emailHelper}</p>
              </div>

              {/* Additional Field (Club ID or Admin Key) */}
              {config.additionalField && (
                <div>
                  <Label htmlFor="additional">{config.additionalField.label}</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="additional"
                      type="text"
                      value={activeTab === "member" ? formData.clubId : formData.adminKey}
                      onChange={(e) =>
                        handleInputChange(activeTab === "member" ? "clubId" : "adminKey", e.target.value)
                      }
                      placeholder={config.additionalField.placeholder}
                      className="pl-10"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{config.additionalField.helper}</p>
                </div>
              )}

              {/* Password Field */}
              <div>
                <Label htmlFor="password">Parola</Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    placeholder="Parolanızı Giriniz"
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Error Alert */}
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Success Alert */}
              {success && (
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">{success}</AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Giriş Yapılıyor...
                  </>
                ) : (
                  `Sign In as ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`
                )}
              </Button>

              {/* Forgot Password */}
              <div className="text-center">
                <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                  Parolanızı mı unuttunuz?
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Registration Links */}
        <div className="text-center space-y-2">
          {activeTab === "member" && (
            <p className="text-gray-600">
              Kulübümüze üye mi olmak istiyorsunuz?{" "}
              <Link href="/contact" className="text-blue-600 hover:text-blue-500 font-medium">
                İletişime Geçin
              </Link>
            </p>
          )}
          {activeTab === "admin" && (
            <p className="text-gray-600">
              Yönetim kurulu erişimine mi ihtiyacınız var?{" "}
              <Link href="/contact" className="text-blue-600 hover:text-blue-500 font-medium">
                İletişime Geçin
              </Link>
            </p>
          )}
        </div>

        {/* User Type Descriptions */}
        <Card className="bg-gray-50">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-gray-800 mb-3">Kullanıcı Tipleri</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <GraduationCap className="h-4 w-4 text-blue-600 mt-0.5" />
                <div>
                  <strong className="text-blue-600">Öğrenci:</strong> Kulübümüzün üyesi olmayan Fırat Üniversitesi öğrencileri buradan giriş yapabilirler.
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Users className="h-4 w-4 text-purple-600 mt-0.5" />
                <div>
                  <strong className="text-purple-600">Üye:</strong> Kulüp üyelerimiz buradan giriş yapabilirler.
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Shield className="h-4 w-4 text-red-600 mt-0.5" />
                <div>
                  <strong className="text-red-600">Yönetim Kurulu:</strong> Yönetim Kurulu üyelerimiz buradan giriş yapabilirler.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help */}
        <div className="text-center text-sm text-gray-500">
          <p>
            Yardıma mı ihtiyacınız var?{" "}
            <Link href="/contact" className="text-blue-600 hover:text-blue-500">
              İletişime Geçin
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
