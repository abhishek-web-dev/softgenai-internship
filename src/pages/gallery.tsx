import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ZoomIn, Camera, Video, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const certificates = [
    "/Gallery-1.jpg",
    "/Gallery-2.jpg",
    "/Gallery-3.jpg",
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % certificates.length);
    }, 4000); // 4 sec per slide

    return () => clearInterval(interval);
  }, []);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
  };


  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <>
      <SEO
        title="Gallery - ScientisticEra Private Limited"
        description="Explore our image and video gallery showcasing events, conferences, awards, and government recognition at ScientisticEra."
      />
      <Header />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
              <Camera className="w-5 h-5" />
              <span className="font-semibold">Media Gallery</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Capturing moments of excellence, innovation, and collaboration in research and academia
            </p>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="images" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="images" className="text-lg">
                  <Camera className="w-5 h-5 mr-2" />
                  Image Gallery
                </TabsTrigger>
                <TabsTrigger value="videos" className="text-lg">
                  <Video className="w-5 h-5 mr-2" />
                  Video Gallery
                </TabsTrigger>
              </TabsList>

              {/* Image Gallery Tab */}
              <TabsContent value="images">
                <div className="space-y-12">
                  {/* Auto-Sliding Carousel */}
                  {/* <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Featured Images
                      </h2>
                      <p className="text-gray-600">Showcasing our achievements and milestones</p>
                    </div>

                    <div className="relative">
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white"> */}
                  {/* Carousel Slides */}
                  {/* <div 
                          className="flex transition-transform duration-700 ease-out"
                          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                          {galleryImages.map((image, index) => (
                            <div key={index} className="min-w-full">
                              <div className="relative aspect-video w-full cursor-pointer" onClick={() => setSelectedImage(image.src)}>
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  fill
                                  className="object-contain bg-gray-100"
                                  priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                                  <div className="text-white text-center">
                                    <ZoomIn className="w-12 h-12 mx-auto mb-2" />
                                    <p className="text-lg font-semibold">{image.caption}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="p-6 text-center bg-white">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{image.alt}</h3>
                                <p className="text-gray-600">{image.caption}</p>
                              </div>
                            </div>
                          ))}
                        </div> */}

                  {/* Navigation Arrows */}
                  {/* <button
                          onClick={prevSlide}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-6 h-6 text-gray-800" />
                        </button>
                        
                        <button
                          onClick={nextSlide}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-6 h-6 text-gray-800" />
                        </button> */}

                  {/* Dots Navigation */}
                  {/* <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                          {galleryImages.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => goToSlide(index)}
                              className={`w-3 h-3 rounded-full transition-all ${
                                currentSlide === index
                                  ? "bg-blue-600 w-8"
                                  : "bg-white/60 hover:bg-white"
                              }`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div> */}

                  {/* Auto-play Control */}
                  {/* <div className="text-center mt-6">
                        <button
                          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                          className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          {isAutoPlaying ? "⏸ Pause slideshow" : "▶ Resume slideshow"}
                        </button>
                      </div>
                    </div>
                  </div> */}

                  <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto bg-[#FEF8DD]">
                      {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              1st International Webinar
            </h2> */}
                      <img src="/Gallery_01.png" alt=""
                        width={1200} height={600}
                        // className="mx-auto w-full max-w-4xl rounded-xl shadow-lg border border-gray-300"
                        className="mx-auto w-full h-[750px] max-w-4xl rounded-xl shadow-xl border border-gray-200 bg-white p-2"
                      />
                    </div>
                  </section>

                  {/* Image Grid - All Images */}
                  {/* <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-8">All Images</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {galleryImages.map((image, index) => (
                        <Card 
                          key={index}
                          className="group cursor-pointer hover:shadow-xl transition-all overflow-hidden"
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <CardContent className="p-0">
                            <div className="relative h-64 overflow-hidden">
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <ZoomIn className="w-12 h-12 text-white" />
                              </div>
                            </div>
                            <div className="p-4">
                              <h4 className="font-bold text-gray-900 mb-1">{image.alt}</h4>
                              <p className="text-sm text-gray-600">{image.caption}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div> */}
                </div>
                {/* <section>
               <h2 className="text-6xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Here's Some Certification
            </h2>
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                  <img src="/Gallery-1.jpg" alt="" className="w-[500px] h-[600px] object-cover rounded-xl shadow-lg" />
<img src="/Gallery-2.jpg" alt="" className="w-[500px] h-[600px] object-cover rounded-xl shadow-lg" />
<img src="/Gallery-3.jpg" alt="" className="w-[500px] h-[600px] object-cover rounded-xl shadow-lg" />
                </div>
              </section> */}

                <section className="py-20">
                  <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Here's Some Certification
                  </h2>

                  <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl">

                    {/* Slides */}
                    <div
                      className="flex transition-transform duration-700 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {certificates.map((img, index) => (
                        <div key={index} className="min-w-full flex justify-center bg-white p-6">
                          <img
                            src={img}
                            alt="Certificate"
                            className="h-[600px] object-contain rounded-xl"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                      {certificates.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentSlide(i)}
                          className={`w-3 h-3 rounded-full transition-all ${currentSlide === i ? "bg-blue-600 scale-125" : "bg-gray-300"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </section>

              </TabsContent>

              <TabsContent value="videos">
  <div className="text-center py-20">
    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-5">
      Watch Our Videos on YouTube
    </h1>

    <p className="text-gray-600 text-lg mb-8">
      Click below to explore webinars, research sessions, and expert talks on our official YouTube channel.
    </p>

    <a
      href="https://youtube.com/@scientisticera?si=DHNhgCuJ8Et2AHJh"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-700 to-rose-600 hover:from-indigo-700 hover:via-purple-800 hover:to-rose-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl shadow-purple-500/30 transition transform hover:scale-105 backdrop-blur"
    >
      ▶ Visit Our YouTube Channel
    </a>
  </div>
</TabsContent>



              {/* Video Gallery Tab */}
              {/* <TabsContent value="videos">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Video Collection
                    </h2>
                    <p className="text-gray-600">Watch our webinars, events, and ceremonies</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video) => (
                      <Card key={video.id} className="group hover:shadow-xl transition-all overflow-hidden">
                        <CardContent className="p-0">
                          <div className="relative h-48 overflow-hidden cursor-pointer">
                            <Image
                              src={video.thumbnail}
                              alt={video.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play className="w-8 h-8 text-blue-600 ml-1" />
                              </div>
                            </div>
                            <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              {video.duration}
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {video.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">{video.description}</p>
                            <p className="text-xs text-gray-500">{video.date}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent> */}
            </Tabs>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
              <Image
                src={selectedImage}
                alt="Gallery Image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}