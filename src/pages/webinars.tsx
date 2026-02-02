import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, Users, Video, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Webinars() {
  const upcomingWebinars = [
    {
      title: "Advanced Research Methodology in Social Sciences",
      date: "February 15, 2026",
      time: "3:00 PM - 5:00 PM IST",
      speaker: "Dr. Rajesh Kumar",
      designation: "Professor, IIT Delhi",
      participants: "250+ Registered",
      topics: ["Qualitative Analysis", "Data Collection", "Ethics in Research"],
      status: "Registration Open"
    },
    {
      title: "Patent Filing & IPR Protection for Researchers",
      date: "February 22, 2026",
      time: "4:00 PM - 6:00 PM IST",
      speaker: "Dr. Priya Sharma",
      designation: "IPR Consultant & Patent Attorney",
      participants: "180+ Registered",
      topics: ["Patent Process", "Copyright", "Trademark Basics"],
      status: "Registration Open"
    },
    {
      title: "Publishing in High Impact Journals",
      date: "March 5, 2026",
      time: "2:00 PM - 4:00 PM IST",
      speaker: "Dr. Anil Verma",
      designation: "Editor, International Journal of Science",
      participants: "300+ Registered",
      topics: ["Manuscript Preparation", "Peer Review", "Publication Ethics"],
      status: "Registration Open"
    },
  ];

  const pastWebinars = [
    {
      title: "Research Paper Writing Workshop",
      date: "January 10, 2026",
      participants: "500+ Attended",
      recording: "Available",
      rating: "4.8/5.0"
    },
    {
      title: "Statistical Analysis using SPSS",
      date: "December 20, 2025",
      participants: "420+ Attended",
      recording: "Available",
      rating: "4.9/5.0"
    },
    {
      title: "Scopus Indexed Publication Guide",
      date: "December 5, 2025",
      participants: "650+ Attended",
      recording: "Available",
      rating: "4.7/5.0"
    },
    {
      title: "UGC Care Listed Journals - Complete Guide",
      date: "November 18, 2025",
      participants: "380+ Attended",
      recording: "Available",
      rating: "4.8/5.0"
    },
  ];

  const webinarStats = [
    { icon: Video, label: "Total Webinars", value: "50+" },
    { icon: Users, label: "Total Participants", value: "10,000+" },
    { icon: Award, label: "Expert Speakers", value: "75+" },
    { icon: BookOpen, label: "Hours of Learning", value: "200+" },
  ];

  return (
    <>
      <SEO 
        title="Webinars - ScientisticEra Private Limited"
        description="Join our expert-led webinars on research methodology, publication strategies, IPR protection, and academic excellence."
      />
      <Header />
      
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Research Webinars & Workshops
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Learn from industry experts and enhance your research skills through our comprehensive webinar series
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8">
                Register Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8">
                View Recordings
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {webinarStats.map((stat, idx) => (
                <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Upcoming Webinars
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingWebinars.map((webinar, idx) => (
                <Card key={idx} className="hover:shadow-2xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                        {webinar.status}
                      </span>
                      <Video className="w-8 h-8 text-purple-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {webinar.title}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-5 h-5 mr-3 text-blue-600" />
                        <span>{webinar.time}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Users className="w-5 h-5 mr-3 text-blue-600" />
                        <span>{webinar.participants}</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
                      <p className="font-semibold text-gray-900 mb-1">{webinar.speaker}</p>
                      <p className="text-sm text-gray-600">{webinar.designation}</p>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Topics Covered:</p>
                      <div className="flex flex-wrap gap-2">
                        {webinar.topics.map((topic, topicIdx) => (
                          <span key={topicIdx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Register for Free
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Past Webinars - Recordings Available
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastWebinars.map((webinar, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 flex-1">
                        {webinar.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold whitespace-nowrap ml-2">
                        {webinar.recording}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{webinar.date}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-700">
                        <Users className="w-4 h-4 mr-2 text-blue-600" />
                        <span>{webinar.participants}</span>
                      </div>
                      <div className="flex items-center text-yellow-600">
                        <Award className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{webinar.rating}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4">
                      Watch Recording
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto bg-[#FEF8DD]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              1st International Webinar
            </h2>
            <img src="/1st_International_webinar.png" alt="" 
            width={1200}  height={600}
            // className="mx-auto w-full max-w-4xl rounded-xl shadow-lg border border-gray-300"
            className="mx-auto w-full max-w-4xl rounded-xl shadow-xl border border-gray-200 bg-white p-2"
            />
          </div>
        </section>

         <section className="py-16 px-4">         
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Here's Some Collaborative National Webinar
            </h2>   
            <div className="flex flex-col md:flex-row gap-8 justify-center items-start">        
          <div className="flex-1 bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              First National Webinar
            </h2>
            <img src="/1st_national_webinar.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl"
            />
          </div>

          <div className="flex-1 bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Second National Webinar
            </h2>
            <img src="/2nd_national_webinar.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl"
            />
          </div>          
          </div>          
        </section>

        <section className="py-16 px-4">         
                      <div className="flex flex-col md:flex-row gap-8 justify-center items-start">        
          <div className="flex-1 bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Third National Webinar
            </h2>
            <img src="/3rd_national_webinar.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl"
            />
          </div>

          <div className="flex-1 bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fourth National Webinar
            </h2>
            <img src="/4th_national_webinar.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl"
            />
          </div>          
          </div>          
        </section>

        <section className="py-16 px-4">         
                      <div className="flex flex-col md:flex-row gap-8 justify-center items-start">        
          <div className="flex-1 bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fifth National Webinar
            </h2>
            <img src="/5th_national_webinar.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl"
            />
          </div>

          <div className="flex-1 bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sixth National Webinar
            </h2>
            <img src="/6th_national_webinar.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl"
            />
          </div>          
          </div>          
        </section>

        <section className="py-16 px-4">         
                      <div className="flex flex-col md:flex-row gap-8 justify-center items-start">        
          <div className="flex-1 bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Seventh National Webinar
            </h2>
            <img src="/7th_national_webinar.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl"
            />
          </div>

          <div className="flex-1 bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Eighth National Webinar
            </h2>
            <img src="/8th_national_webinar.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl"
            />
          </div>          
          </div>          
        </section>
              <div className=" bg-[#E4FFF6]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nineth National Webinar
            </h2>
            <img src="/9th_national_webinar.png" alt="" 
            className="mx-auto w-full max-w-2xl h-[550px] object-contain rounded-xl shadow-xl mb-5"
            />
          </div>


        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Host a Webinar with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Share your expertise with our global community of researchers and academicians
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8">
                Become a Speaker
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}