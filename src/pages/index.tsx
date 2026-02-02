import { SEO } from "@/components/SEO";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Award, 
  CheckCircle2, 
  Star,
  Globe,
  Microscope,
  GraduationCap,
  FileText,
  Video,
  Sparkles,
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  Target,
  BookMarked,
  Calendar,
  User
} from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO 
        title="ScientisticEra - Premier Research Publication & Academic Services"
        description="Inaugurated by Hon. Shripad Yesso Naik Ji. Leading research publication house with 100+ papers published, 10+ webinars hosted, serving 500+ researchers globally."
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Header />
       

{/* Hero Section */}
<section className="relative w-full h-[480px] md:h-[520px] flex items-center">

  {/* Background Image */}
  <img
    src="/Home_page.png"
    alt="Scientistic Era Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Content Left Side */}
  <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
    <div className="max-w-2xl text-left">

      <p className="text-xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
        WELCOME TO SCIENTISTIC ERA
      </p>

      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
        Scientistic Era
      </h1>

      <div className="flex flex-wrap gap-4">
        <Link href="/about">
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg rounded-full">
            Know More
          </Button>
        </Link>

        <Link href="/contact">
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
            Contact Now
          </Button>
        </Link>
      </div>

    </div>
  </div>
</section>

        {/* Hero Section */}
        <section className="pb-20 px-4 relative overflow-hidden">
          {/* Background Image */}/
          
          <div className="absolute inset-0 z-0">
            <Image
              src="/about1.png"
              alt="ScientisticEra Background"
              fill
              className="object-cover opacity-10"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-95" />
          </div>
          
          {/* <div className="relative w-full h-[300px] md:h-[300px] mb-5">
           <img src="/Home_page.jpg" alt="" 
           className="w-full h-[480px] object-cover mb-5 mt-0"
           />
           </div> */}

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center space-y-6">
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm">
                <Award className="w-4 h-4 mr-2 inline" />
                Inaugurated by Government of India Minister
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Empowering Research Excellence Worldwide
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                India's premier research publication house, dedicated to advancing global knowledge through 
                ethical publication practices, expert guidance, and comprehensive academic services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link href="/services">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
                    Explore Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg">
                    Get Started Today
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>100% Ethical Publishing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Expert Peer Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Global Indexing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inauguration Highlight Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500">
          <div className="container mx-auto max-w-5xl">
            <Card className="border-2 border-cyan-300 shadow-2xl bg-white/95 backdrop-blur">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-6">
                  <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 text-base">
                    <Award className="w-5 h-5 mr-2 inline" />
                    OFFICIALLY INAUGURATED
                  </Badge>
                  
                  <div className="space-y-2">
                    <p className="text-lg md:text-xl text-gray-600 font-medium">
                      Inaugurated by
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                      Honourable Shripad Yesso Naik Ji
                    </h2>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400"></div>
                    <Sparkles className="w-6 h-6 text-cyan-500" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400"></div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-lg md:text-xl font-semibold text-gray-800">
                      Minister of State for New & Renewable Energy
                    </p>
                    <p className="text-base md:text-lg text-gray-600">
                      Government of India
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                      A proud moment for ScientisticEra, recognized and inaugurated by the Government of India, 
                      marking our commitment to advancing research and innovation in alignment with national objectives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        // </section>

                <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">

            {/* Left Image */}
            <div className="md:w-1/2 w-full flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/about1.png"
                  alt="Scientistic Era"
                  className="w-full max-w-md h-[550px] object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 w-full text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
                Webinar, Journal, Academician & Researcher Awards and E-Magazine
              </h1>

              <p className="font-semibold text-lg mb-4 text-gray-800">
                Inaugurated by “Honourable Shripad Yesso Naik Ji” Minister of State for New & Renewable Energy, Government of India
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Scientistic Era is a prominent platform that supports global academic and research excellence through its key services. It offers Webinars for real-time knowledge sharing, hosts Academician & Researcher Awards to recognize outstanding achievements, and publishes an E-Magazine to disseminate the latest research and insights. These services foster collaboration, celebrate innovation, and help connect the academic community worldwide.
              </p>
            </div>

          </div>
        </section>

        {/* <section className="py-20 px-4">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

   
    <div className="space-y-6 text-center md:text-left">
      <div className="flex justify-center md:justify-start">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/about1.png"
            alt="Scientistic Era"
            className="w-full max-w-md h-[450px] object-cover"
          />
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
        Webinar, Journal, Academician & Researcher Awards and E-Magazine
      </h1>

      <p className="font-semibold text-lg text-gray-800">
        Inaugurated by “Honourable Shripad Yesso Naik Ji” Minister of State for New & Renewable Energy, Government of India
      </p>
    </div>

   
    <div>
      <Card className="border-2 border-cyan-300 shadow-2xl bg-white/95 backdrop-blur">
        <CardContent className="p-8 md:p-12">
          <div className="text-center space-y-6">
            <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 text-base">
              <Award className="w-5 h-5 mr-2 inline" />
              OFFICIALLY INAUGURATED
            </Badge>

            <div className="space-y-2">
              <p className="text-lg md:text-xl text-gray-600 font-medium">
                Inaugurated by
              </p>
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                Honourable Shripad Yesso Naik Ji
              </h2>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <Sparkles className="w-6 h-6 text-cyan-500" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>

            <div className="space-y-2">
              <p className="text-lg md:text-xl font-semibold text-gray-800">
                Minister of State for New & Renewable Energy
              </p>
              <p className="text-base md:text-lg text-gray-600">
                Government of India
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              A proud moment for ScientisticEra, recognized and inaugurated by the Government of India,
              marking our commitment to advancing research and innovation in alignment with national objectives.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>

  </div>
</section> */}


        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
              <p className="text-xl text-blue-100">Driving research excellence across the globe</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-2 bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition-all">
                <FileText className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <div className="text-5xl font-bold">100+</div>
                <div className="text-lg text-blue-100">Research Papers Published</div>
              </div>
              <div className="text-center space-y-2 bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition-all">
                <Video className="w-12 h-12 mx-auto mb-4 text-purple-200" />
                <div className="text-5xl font-bold">10+</div>
                <div className="text-lg text-purple-100">Webinars Hosted</div>
              </div>
              <div className="text-center space-y-2 bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition-all">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-pink-200" />
                <div className="text-5xl font-bold">6+</div>
                <div className="text-lg text-pink-100">Premium Services</div>
              </div>
              <div className="text-center space-y-2 bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition-all">
                <Users className="w-12 h-12 mx-auto mb-4 text-yellow-200" />
                <div className="text-5xl font-bold">500+</div>
                <div className="text-lg text-yellow-100">Researchers Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="bg-purple-100 text-purple-700 px-4 py-2 text-sm mb-4">
                Why ScientisticEra
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Trusted Research Partner
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
                We combine government recognition, ethical practices, and expert guidance to accelerate your research journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all bg-white">
                <CardHeader>
                  <Shield className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-gray-900">Government Recognized</CardTitle>
                  <CardDescription className="text-gray-700">
                    Inaugurated by Hon. Minister Shripad Yesso Naik Ji, ensuring credibility and trust in every publication
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-purple-500 hover:shadow-xl transition-all bg-white">
                <CardHeader>
                  <Target className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle className="text-gray-900">100% Ethical Publishing</CardTitle>
                  <CardDescription className="text-gray-700">
                    Strict adherence to international publishing standards, zero tolerance for plagiarism or unethical practices
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-pink-500 hover:shadow-xl transition-all bg-white">
                <CardHeader>
                  <Zap className="w-12 h-12 text-pink-600 mb-4" />
                  <CardTitle className="text-gray-900">Fast Turnaround</CardTitle>
                  <CardDescription className="text-gray-700">
                    Quick peer review process with expert feedback, helping you publish faster without compromising quality
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-green-500 hover:shadow-xl transition-all bg-white">
                <CardHeader>
                  <Globe className="w-12 h-12 text-green-600 mb-4" />
                  <CardTitle className="text-gray-900">Global Indexing</CardTitle>
                  <CardDescription className="text-gray-700">
                    Publications indexed in prestigious databases including Google Scholar, ResearchGate, and international journals
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-indigo-500 hover:shadow-xl transition-all bg-white">
                <CardHeader>
                  <GraduationCap className="w-12 h-12 text-indigo-600 mb-4" />
                  <CardTitle className="text-gray-900">Expert Guidance</CardTitle>
                  <CardDescription className="text-gray-700">
                    PhD-qualified mentors and subject experts to guide you through research methodology, writing, and publication
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all bg-white">
                <CardHeader>
                  <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-gray-900">Comprehensive Support</CardTitle>
                  <CardDescription className="text-gray-700">
                    End-to-end research services from topic selection to final publication, with ongoing support at every stage
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Awards & Recognition Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-white/20 backdrop-blur text-white border-white/30 px-4 py-2 text-sm mb-4">
                <Award className="w-4 h-4 mr-2 inline" />
                Achievements & Accolades
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Awards & Recognition
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
                Celebrating excellence in research publication and academic innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Government Inaugurated</h3>
                  <p className="text-gray-700">
                    Officially inaugurated by Hon. Shripad Yesso Naik Ji, Minister of State, Government of India
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">ISO Certified</h3>
                  <p className="text-gray-700">
                    ISO certification ensuring highest quality standards in research publication services
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Global Recognition</h3>
                  <p className="text-gray-700">
                    Recognized by international research bodies and indexed in prestigious global databases
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence in Publishing</h3>
                  <p className="text-gray-700">
                    100+ successful publications in high-impact journals with rigorous peer review
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-violet-400 to-fuchsia-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted by 500+</h3>
                  <p className="text-gray-700">
                    Over 500 researchers and scholars trust us for their publication needs
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-2 border-white/50 hover:border-white hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation Leader</h3>
                  <p className="text-gray-700">
                    Leading the way in digital transformation of research publication processes
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-sm mb-4">
                Our Services
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Research Solutions
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
                From concept to publication, we provide every service you need to succeed in academic research
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-2xl transition-all border-2 hover:border-blue-500 bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <BookOpen className="w-14 h-14 text-blue-600 group-hover:scale-110 transition-transform" />
                    <Badge className="bg-blue-100 text-blue-700">Popular</Badge>
                  </div>
                  <CardTitle className="text-2xl mt-4 text-gray-900">Research Paper Publication</CardTitle>
                  <CardDescription className="text-base text-gray-700">
                    Expert assistance in publishing your research in high-impact, peer-reviewed journals with international recognition
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Journal selection and recommendation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Manuscript preparation and formatting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Peer review coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Global indexing support</span>
                    </li>
                  </ul>
                  <Link href="/services">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all border-2 hover:border-purple-500 bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Microscope className="w-14 h-14 text-purple-600 group-hover:scale-110 transition-transform" />
                    <Badge className="bg-purple-100 text-purple-700">Premium</Badge>
                  </div>
                  <CardTitle className="text-2xl mt-4 text-gray-900">Research Guidance & Mentorship</CardTitle>
                  <CardDescription className="text-base text-gray-700">
                    One-on-one mentorship from PhD scholars and subject experts to guide your entire research journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Research topic selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Literature review assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Methodology development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Data analysis support</span>
                    </li>
                  </ul>
                  <Link href="/services">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all border-2 hover:border-pink-500 bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Video className="w-14 h-14 text-pink-600 group-hover:scale-110 transition-transform" />
                    <Badge className="bg-pink-100 text-pink-700">Interactive</Badge>
                  </div>
                  <CardTitle className="text-2xl mt-4 text-gray-900">Webinars & Workshops</CardTitle>
                  <CardDescription className="text-base text-gray-700">
                    Regular online sessions covering latest research trends, publication ethics, and academic writing skills
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Monthly expert webinars</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Hands-on writing workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Q&A with industry experts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Certificate of participation</span>
                    </li>
                  </ul>
                  <Link href="/services">
                    <Button className="w-full bg-pink-600 hover:bg-pink-700">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all border-2 hover:border-green-500 bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <BookMarked className="w-14 h-14 text-green-600 group-hover:scale-110 transition-transform" />
                    <Badge className="bg-green-100 text-green-700">Essential</Badge>
                  </div>
                  <CardTitle className="text-2xl mt-4 text-gray-900">Thesis & Dissertation Support</CardTitle>
                  <CardDescription className="text-base text-gray-700">
                    Complete support for PhD and Master's students from proposal to final submission and defense preparation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Proposal development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Chapter-by-chapter review</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Statistical analysis help</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Defense presentation prep</span>
                    </li>
                  </ul>
                  <Link href="/services">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">What Researchers Say</h2>
              <p className="text-xl text-gray-600">
                Trusted by researchers worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-white border-2 border-gray-200 hover:border-blue-400 transition-all">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 mb-4">
                  "ScientisticEra helped me publish my research in a reputed journal. Their guidance throughout the process was invaluable."
                </p>
                <div className="font-bold text-gray-900">Dr. Priya Sharma</div>
                <div className="text-sm text-gray-600">Assistant Professor, IIT Delhi</div>
              </Card>

              <Card className="p-8 bg-white border-2 border-gray-200 hover:border-blue-400 transition-all">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 mb-4">
                  "The webinars conducted by ScientisticEra are highly informative and practical. They've enhanced my research skills significantly."
                </p>
                <div className="font-bold text-gray-900">Rahul Verma</div>
                <div className="text-sm text-gray-600">PhD Scholar, JNU</div>
              </Card>

              <Card className="p-8 bg-white border-2 border-gray-200 hover:border-blue-400 transition-all">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 mb-4">
                  "Professional, efficient, and supportive. ScientisticEra made my conference participation seamless and productive."
                </p>
                <div className="font-bold text-gray-900">Dr. Anil Kumar</div>
                <div className="text-sm text-gray-600">Senior Researcher, CSIR</div>
              </Card>
            </div>
          </div>
        </section> */}

        {/* Team Preview Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Dedicated professionals committed to your research success
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 bg-white/10 backdrop-blur border-2 border-white/20 hover:border-blue-400 transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Dr. Sudhanshu Kumar Jha</h3>
                <p className="text-blue-400 text-center mb-3">Founder & Director</p>
                <p className="text-gray-300 text-center text-sm">
                  Visionary leader with extensive experience in academic research and publication
                </p>
              </Card>

              <Card className="p-8 bg-white/10 backdrop-blur border-2 border-white/20 hover:border-blue-400 transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Ms. Mansi Negi</h3>
                <p className="text-blue-400 text-center mb-3">Co-Founder & Head BD</p>
                <p className="text-gray-300 text-center text-sm">
                  Strategic business development leader driving partnerships and growth
                </p>
              </Card>

              <Card className="p-8 bg-white/10 backdrop-blur border-2 border-white/20 hover:border-blue-400 transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Mr. Vishwajeet</h3>
                <p className="text-blue-400 text-center mb-3">Chief Technology Officer</p>
                <p className="text-gray-300 text-center text-sm">
                  Technology innovator transforming research processes through digital solutions
                </p>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-white/10 backdrop-blur border-2 border-white/20 hover:border-blue-400 transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Mr. Jaydeep S. Baghel</h3>
                <p className="text-blue-400 text-center mb-3">Research Head Operations</p>
                <p className="text-gray-300 text-center text-sm">
                  Operational excellence expert ensuring seamless research project execution
                </p>
              </Card>

              <Card className="p-8 bg-white/10 backdrop-blur border-2 border-white/20 hover:border-blue-400 transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Ms. Ishika Antil</h3>
                <p className="text-blue-400 text-center mb-3">Research Specialist (Intern)</p>
                <p className="text-gray-300 text-center text-sm">
                  Emerging research talent contributing to innovative research projects
                </p>
              </Card>

              <Card className="p-8 bg-white/10 backdrop-blur border-2 border-white/20 hover:border-blue-400 transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Ms. Himani Raj</h3>
                <p className="text-blue-400 text-center mb-3">Research (Intern)</p>
                <p className="text-gray-300 text-center text-sm">
                  Dedicated research intern supporting various research initiatives
                </p>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Meet the Full Team
              </Button>
            </div>
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Latest News & Updates
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Stay informed about our recent achievements and upcoming events
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 p-6 hover:border-purple-400 transition-all hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                  <span className="text-sm text-gray-700 font-medium">December 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">New Partnership with Leading Universities</h3>
                <p className="text-gray-700 mb-4">
                  We've established MOUs with 5 premier institutions to enhance research collaboration and student support.
                </p>
                <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 p-6 hover:border-purple-400 transition-all hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                  <span className="text-sm text-gray-700 font-medium">November 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">International Conference Success</h3>
                <p className="text-gray-700 mb-4">
                  Our researchers presented 25+ papers at IEEE International Conference with outstanding reception.
                </p>
                <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 p-6 hover:border-purple-400 transition-all hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                  <span className="text-sm text-gray-700 font-medium">October 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Webinar Series Launch</h3>
                <p className="text-gray-700 mb-4">
                  New monthly webinar series on research methodology and publication strategies begins this month.
                </p>
                <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                What Researchers Say About Us
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Success stories from our community of researchers and academics
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-2 border-gray-200 p-8 hover:border-purple-400 transition-all hover:shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Dr. Priya Sharma</h4>
                    <p className="text-sm text-gray-600">Assistant Professor, IIT Delhi</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "ScientisticEra helped me publish 3 papers in Scopus-indexed journals within 6 months. Their guidance throughout the process was invaluable. Highly recommended for research scholars!"
                </p>
              </Card>

              <Card className="bg-white border-2 border-gray-200 p-8 hover:border-purple-400 transition-all hover:shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Prof. Rajesh Kumar</h4>
                    <p className="text-sm text-gray-600">PhD Guide, Anna University</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "The PhD guidance program is exceptional. My students received mentorship from industry experts, and their thesis quality improved significantly. Thank you, ScientisticEra!"
                </p>
              </Card>

              <Card className="bg-white border-2 border-gray-200 p-8 hover:border-purple-400 transition-all hover:shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Ms. Anita Desai</h4>
                    <p className="text-sm text-gray-600">Research Scholar, NIT Trichy</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "I attended their webinar on research methodology and it completely transformed my approach. The practical tips and personalized feedback were game-changers for my work."
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 border-none shadow-2xl">
              <CardHeader className="text-center space-y-4 pb-8">
                <CardTitle className="text-4xl md:text-5xl font-bold text-white">
                  Ready to Elevate Your Research?
                </CardTitle>
                <CardDescription className="text-xl text-white/90 max-w-2xl mx-auto">
                  Join hundreds of researchers who trust ScientisticEra for their publication needs
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100">
                      Get Started Today
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}