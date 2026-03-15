import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Linkedin, GraduationCap, Target, Eye, ChevronLeft, ChevronRight,Globe, Users, ShieldCheck } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Link from "next/link";



import{
Zap
} from "lucide-react";




export default function OurStory() {
  const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.3
});
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#0b2a4a] text-white overflow-hidden">

        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: "url('/our_story_banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-28 mb-10">

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight pt-10">
            Pioneering Research Excellence
            <span className="text-blue-400">
              <br /> Since Inception
            </span>
          </h1>

          {/* <p className="mt-6 text-lg text-gray-300 max-w-3xl">
           We are India’s premier research publication house, dedicated to empowering researchers worldwide with ethical publication practices, expert guidance, and comprehensive academic services.
          </p> */}

        </div>

      </section>

      {/* Story Section */}
      {/* <section className="py-20 max-w-6xl mx-auto px-6"> */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center text-dark">

        <p className="text-gray-800 leading-relaxed text-xl">
          We are India’s premier research publication house, dedicated to empowering researchers worldwide with ethical publication practices, expert guidance, and comprehensive academic services.
        </p>
      </section>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Our Mission & Vision
        </h2>
        <p className="text-gray-600 mt-3">
          Guiding principles that drive ScientisticEra forward.
        </p>
      </div>

      {/* Mission & Vision */}
      <section className="pt-5 mb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">

            {/* <Card className="border-2 border-purple-200 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-50 to-white"> */}
            <Card className="border-2 border-purple-200 hover:shadow-2xl hover:-translate-y-2 duration-300 transition-all bg-gradient-to-br from-purple-50 to-white">
              <CardHeader className="items-center text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Eye className="w-10 h-10 text-purple-600" />
                  <CardTitle className="text-3xl text-gray-900">Our Vision</CardTitle>
                </div>

                <CardDescription className="text-base text-gray-900 leading-relaxed space-y-3 text-xl">
                  <p>
                    Envision a society where scientific knowledge is the primary lens through which we understand the world, heavily relying on empirical evidence and rigorous methodology to guide decision-making across all aspects of life, from policy to personal choices, potentially leading to a highly rational and technologically advanced society, but also raising concerns about the potential limitations of science in addressing complex human issues and ethical considerations.
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>

            {/* <Card className="border-2 border-blue-200 hover:shadow-2xl transition-all bg-gradient-to-br from-blue-50 to-white"> */}
            <Card className="border-2 border-purple-200 hover:shadow-2xl hover:-translate-y-2 duration-300 transition-all bg-gradient-to-br from-purple-50 to-white">

              <CardHeader className="items-center text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Target className="w-10 h-10 text-blue-600" />
                  <CardTitle className="text-3xl text-gray-900">Our Mission</CardTitle>
                </div>

                <CardDescription className="text-base text-gray-900 leading-relaxed space-y-3 text-xl">
                  <p>
                    To promote the widespread dissemination and understanding of scientific knowledge across various disciplines, aiming to empower individuals and societies to make informed decisions based on evidence-based research, while its vision is to create a future where scientific understanding is deeply integrated into all aspects of life, fostering progress and innovation through a robust scientific culture.
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Origin & Road Ahead */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* Title Side */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Our Origin <br /> & Road Ahead
            </h2>

            <div className="w-20 h-1 bg-blue-600 mt-4"></div>
          </div>

          {/* Content */}
          <div className="md:col-span-2 space-y-6 text-gray-700 text-lg leading-relaxed">

            <p>
              Scientistic Era Private Limited was founded in 2023 with a bold vision to redefine how research is supported, protected, and positioned globally. Inaugurated by <span className="font-semibold">Shripad Yesso Naik</span>, Minister of State for New & Renewable Energy, Government of India, the organization emerged from a deep understanding of the challenges faced by researchers in publication compliance, intellectual property protection, and global visibility.
            </p>

            <p>
              Our origin lies in bridging these critical gaps and building a structured ecosystem where innovation meets integrity.
            </p>

            <p>
              Looking ahead, we envision becoming a globally trusted academic and innovation partner, enabling seamless research dissemination, strengthening intellectual property governance, and fostering international collaborations across disciplines.
            </p>

            <p>
              Our roadmap is centered on building scalable research infrastructure, advancing publication excellence, and creating a future where every idea is not only published, but protected and positioned for global impact.
            </p>

          </div>

        </div>

      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Our Founder & Chairperson
          </h2>
          <p className="text-gray-800 mt-8 text-xl">
            Leadership, Innovation and Vision behind Scientistic Era Pvt. Ltd.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-gray-800 leading-relaxed text-lg">

            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Dr. Sudhanshu Kumar Jha
            </h2>

            <p className="italic text-gray-600">
              (M.Pharm in Medicinal Chemistry; Ph.D. in Pharmaceutical Sciences)
            </p>

            <p>
              Dr. Sudhanshu Kumar Jha (M.Pharm in Medicinal Chemistry; Ph.D. in Pharmaceutical Sciences) is the Founder and Director of Scientistic Era Pvt. Ltd., a Research and Development firm officially inaugurated by Hon’ble Shri Shripad Yesso Naik, Minister of State for New and Renewable Energy, Government of India.
            </p>

            <p>
              He is currently serving as a Scientist at the All India Institute of Ayurveda under the Department of Centre for Integrative Oncology, New Delhi, Government of India. Simultaneously, he holds the position of Editor-in-Chief of the Journal of Health Synapse (an international multidisciplinary peer-reviewed journal) and serves as the Research and Development Director at Hubs Ayurveda.
            </p>

            <p>
              Dr. Jha has contributed as a Researcher in the Pharma Department on a collaborative IMR project titled “Profiling of Phytochemicals in Ayurvedic Medicinal Formulations and Understanding Their Aggregation Behavior,” jointly undertaken by the Central Ayurveda Research Institute (Ministry of AYUSH, Government of India) and Indian Institute of Technology Gandhinagar.
            </p>

            <p>
              He is also currently serving as a Visiting Assistant Professor in the Department of Pharmaceutical Sciences at Major SD College of Education.
            </p>
          </div>

            <div className="overflow-hidden rounded-xl">
  <Image
    src="/og-image.png"
    alt="Dr. Sudhanshu Kumar Jha"
    width={550}
    height={720}
    className="rounded-xl shadow-lg mx-auto transition-transform duration-500 hover:scale-105 mb-5"
  />

            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-4">

              <a
                href="https://www.linkedin.com/company/scientisticera/"
                target="_blank"
                className="bg-blue-600 p-3 rounded-full text-white hover:scale-110 transition"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="#"
                target="_blank"
                className="bg-green-600 p-3 rounded-full text-white hover:scale-110 transition"
              >
                <GraduationCap size={22} />
              </a>

              <a
                href="#"
                target="_blank"
                className="bg-gray-800 p-3 rounded-full text-white hover:scale-110 transition"
              >
                <GraduationCap size={22} />
              </a>

            </div>
            

          </div>
          
        </div>
             <div className="max-w-7xl mx-auto px-6 text-left mt-8 space-y-6 text-gray-800 leading-relaxed text-lg">
            <p>
              Dr. Jha was honored with the prestigious Young Researcher Award – 2024 (Volume 9, Issue 3) by the Institute of Scholars (INSC) (Membership ID: 20248YRA69). He also received the Nobel Scientist Award 2025 at the International Scientific Awards 2025 by Scientific Laurels and was conferred the Young Scientist Award 2025 by the KTK Outstanding Achievers and Education Foundation.
            </p>

            <p>
              He has served as the Organizing Secretary for 10 national and international webinars hosted by Scientistic Era Pvt. Ltd.
            </p>

            <p>
              Beyond his research career, Dr. Jha is a former actor and model, with over 4 million views on a music video published on YouTube. He has previously held several professional roles, including Production Head (Pharma), Research Supervisor, Formulation Scientist, and Assistant Professor/Researcher.
            </p>

            <p>
              His core domain expertise lies in Medicinal Chemistry, with special emphasis on synthetic (wet lab) chemistry, advanced analytical techniques, and molecular docking studies of conventional drugs and medicinal plants. He is proficient in modern analytical instruments such as HPTLC, HPLC, LC-MS, and GC-MS, and actively conducts in-silico analyses. His research encompasses in-vitro and in-vivo pharmacological studies, molecular docking mechanisms, and network pharmacology.
            </p>

            <p>
              Dr. Jha has authored over 60 research and review articles in reputed journals, including publications under Nature (Scientific Reports), Wiley (Chemistry & Biodiversity), and Elsevier (Pharmacological Research – Natural Products). He has also contributed to 10 book chapters, authored five books on international platforms, and published one book on Amazon.
            </p>

            <p>
              In addition, he holds 10 published patents, four copyrights, 15 Indian design grants, and four international design patents from the United Kingdom. His academic impact includes 539 citations with an h-index of 16 on Google Scholar and 548 citations with an h-index of 14 on ResearchGate.
            </p>

            <p>
              His active involvement in more than 70 national and international conferences, seminars, and workshops reflects his strong commitment to scientific advancement, societal development, and national sustainable growth.
            </p>

            </div>

      </section>

{/* Achievements Section */}
<section className="py-10 bg-gray-50 overflow-hidden">

<div className="max-w-7xl mx-auto px-6 text-center">

     {/* <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 text-center">
      His Achievements
    </h2> */}

    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-3xl md:text-5xl mb-6">
            His Achievements
            </Badge>

    <div className="overflow-hidden relative">

      <div className="flex w-max animate-marquee gap-8">

        {/* First Set */}
        <img src="/Gallery-1.jpg" className="h-full w-96 rounded-xl shadow-lg" />
        <img src="/Gallery-2.jpg" className="h-full w-96 rounded-xl shadow-lg" />
        <img src="/Gallery-3.jpg" className="h-full w-96 rounded-xl shadow-lg" />
        <img src="/Gallery-1.jpg" className="h-full w-96 rounded-xl shadow-lg" />
        <img src="/Gallery-2.jpg" className="h-full w-96 rounded-xl shadow-lg" />

        {/* Duplicate Set */}
        <img src="/Gallery-3.jpg" className="h-full w-96 rounded-xl shadow-lg" />
        <img src="/Gallery-1.jpg" className="h-full w-96 rounded-xl shadow-lg" />
        <img src="/Gallery-2.jpg" className="h-full w-96 rounded-xl shadow-lg" />
        <img src="/Gallery-3.jpg" className="h-full w-96 rounded-xl shadow-lg" />
        <img src="/Gallery-1.jpg" className="h-full w-96 rounded-xl shadow-lg" />

      </div>
    </div>
  </div>

</section>

            <section className="py-20 bg-white">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="flex justify-between items-center mb-12">

<div>

<h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center">Our Leadership Team
</h2>

<p className="text-gray-600 mt-3 max-w-xl text-xl">
Meet the experts driving innovation in research and publication</p>

</div>

{/* ARROWS */}

<div className="flex gap-3 arrow">

<button className="team-prev w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 hover:bg-gray-400 transition">

<ChevronLeft size={22} />

</button>

<button className="team-next w-12 h-12 flex items-center justify-center rounded-full bg-[#0f1f3d] text-white hover:bg-[#162a4d] transition">

<ChevronRight size={22} />

</button>

</div>


</div>


{/* Slider */}

<Swiper
modules={[Navigation]}
spaceBetween={30}
slidesPerView={3}
loop={true}
navigation={{
  nextEl: ".team-next",
  prevEl: ".team-prev",
}}
onInit={(swiper) => {
// @ts-expect-error swiper navigation type issue
  swiper.params.navigation.prevEl = ".team-prev";
// @ts-expect-error swiper navigation type issue
  swiper.params.navigation.nextEl = ".team-next";

  swiper.navigation.init();
  swiper.navigation.update();
}}
breakpoints={{
  640: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
}}
>


{/* Member 1 */}

<SwiperSlide>
<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">

<Image
  src="/Team_01.png"
  alt="Team"
  width={400}
  height={400}
  className="w-full h-[420px] object-cover object-top"
/>

<div className="p-5 flex justify-between items-center">

<div>
<h3 className="font-semibold text-lg">Dr. Sudhanshu Kumar Jha</h3>
<p className="text-gray-500 text-sm">Founder & Director</p>
</div>

<a
  href="https://www.linkedin.com/in/USERNAME"
  target="_blank"
  rel="noopener noreferrer"
className="text-blue-600 hover:text-white hover:bg-blue-600 p-2 rounded-full transition"
>
  <Linkedin size={20} />
</a>
</div>

</div>
</SwiperSlide>

{/* Member 2 */}

<SwiperSlide>
<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">

<Image
  src="/Team_02.png"
  alt="Team"
  width={400}
  height={400}
  className="w-full h-[420px] object-cover object-top"
/>

<div className="p-5 flex justify-between items-center">

<div>
<h3 className="font-semibold text-lg">Ms. Mansi Negi</h3>
<p className="text-gray-500 text-sm">Co-Founder & Head BD</p>
</div>

<a
  href="https://www.linkedin.com/in/USERNAME"
  target="_blank"
  rel="noopener noreferrer"
className="text-blue-600 hover:text-white hover:bg-blue-600 p-2 rounded-full transition"
>
  <Linkedin size={20} />
</a>
</div>

</div>
</SwiperSlide>

{/* Member 3 */}

<SwiperSlide>
<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">

<Image
  src="/Team_03.png"
  alt="Team"
  width={400}
  height={400}
  className="w-full h-[420px] object-cover object-top"
/>

<div className="p-5 flex justify-between items-center">

<div>
<h3 className="font-semibold text-lg">Mr. Vishwajeet</h3>
<p className="text-gray-500 text-sm">Chief Technology Officer</p>
</div>

<a
  href="https://www.linkedin.com/in/USERNAME"
  target="_blank"
  rel="noopener noreferrer"
className="text-blue-600 hover:text-white hover:bg-blue-600 p-2 rounded-full transition"
>
  <Linkedin size={20} />
</a>
</div>

</div>
</SwiperSlide>

{/* Member 4 */}

<SwiperSlide>
<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">

<Image
  src="/Team_04.png"
  alt="Team"
  width={400}
  height={400}
  className="w-full h-[420px] object-cover object-top"
/>

<div className="p-5 flex justify-between items-center">

<div>
<h3 className="font-semibold text-lg">Mr. Jaydeep S. Baghel</h3>
<p className="text-gray-500 text-sm">Research Head Operations</p>
</div>

<a
  href="https://www.linkedin.com/in/USERNAME"
  target="_blank"
  rel="noopener noreferrer"
className="text-blue-600 hover:text-white hover:bg-blue-600 p-2 rounded-full transition"
>
  <Linkedin size={20} />
</a>
</div>

</div>
</SwiperSlide>

{/* Member 5 */}

<SwiperSlide>
<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">

<Image
  src="/Team_05.png"
  alt="Team"
  width={400}
  height={400}
  className="w-full h-[420px] object-cover object-top"
/>

<div className="p-5 flex justify-between items-center">

<div>
<h3 className="font-semibold text-lg">Ms. Ishika Antil</h3>
<p className="text-gray-500 text-sm">Research Specialist (Intern)</p>
</div>

<a
  href="https://www.linkedin.com/in/USERNAME"
  target="_blank"
  rel="noopener noreferrer"
className="text-blue-600 hover:text-white hover:bg-blue-600 p-2 rounded-full transition"
>
  <Linkedin size={20} />
</a>
</div>

</div>
</SwiperSlide>

{/* Member 6 */}

<SwiperSlide>
<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">

<Image
  src="/Team_06.png"
  alt="Team"
  width={400}
  height={400}
  className="w-full h-[420px] object-cover object-top"
/>

<div className="p-5 flex justify-between items-center">

<div>
<h3 className="font-semibold text-lg">Ms. Himani Raj</h3>
<p className="text-gray-500 text-sm">Research (Intern)</p>
</div>

<a
  href="https://www.linkedin.com/in/USERNAME"
  target="_blank"
  rel="noopener noreferrer"
className="text-blue-600 hover:text-white hover:bg-blue-600 p-2 rounded-full transition"
>
  <Linkedin size={20} />
</a>
</div>

</div>
</SwiperSlide>

</Swiper>

</div>

</section>


{/* ============== */}


<section className="py-24 bg-white">
  <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center mb-5"> Partners</h2>
<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
Strategic Partnerships & Academic Collaborations
</h2>

<p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
Building a strong global research ecosystem through institutional, publishing, and industry alliances.
</p>

<button className="mt-8 bg-[#0f1f3d] text-white px-8 py-3 rounded-lg hover:bg-[#162a4d] transition">
Become a Partner
</button>

</div>
</section>

{/* <section className="py-16 bg-gray-50">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

<div>
<h3 className="text-4xl font-bold text-blue-600">5+</h3>
<p className="text-gray-600 mt-2">MOU Partners</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-600">3+</h3>
<p className="text-gray-600 mt-2">Countries</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-600">15+</h3>
<p className="text-gray-600 mt-2">Joint Projects</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-600">2+</h3>
<p className="text-gray-600 mt-2">Years of Partnership</p>
</div>

</div>
</section> */}

<section ref={ref} className="py-20 bg-gray-50">
  

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

{/* Card 1 */}

<div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition text-center">

<h3 className="text-4xl font-bold text-blue-600">

{inView && <CountUp end={10} duration={2} />}+

</h3>

<p className="text-gray-600 mt-2">MOU Partners</p>

</div>

{/* Card 2 */}

<div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition text-center">

<h3 className="text-4xl font-bold text-blue-600">

{inView && <CountUp end={3} duration={2} />}+

</h3>

<p className="text-gray-600 mt-2">Countries</p>

</div>

{/* Card 3 */}

<div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition text-center">

<h3 className="text-4xl font-bold text-blue-600">

{inView && <CountUp end={35} duration={2} />}+

</h3>

<p className="text-gray-600 mt-2">Joint Projects</p>

</div>

{/* Card 4 */}

<div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition text-center">

<h3 className="text-4xl font-bold text-blue-600">

{inView && <CountUp end={4} duration={2} />}+

</h3>

<p className="text-gray-600 mt-2">Years of Partnership</p>

</div>

</div>

</section>


<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">Academic & Institutional Partners
</h2>

<p className="text-gray-600 mt-4 max-w-2xl mx-auto">
Collaborations with academic institutions and research bodies allow us to support scholars, faculty members, and students with structured guidance.
</p>

<div className="mt-12 flex justify-center items-center gap-10 flex-wrap">

<img src="/MOU_03.png" className="h-full w-96 object-contain transition duration-300 hover:scale-105 hover:shadow-xl"/>

</div>

</div>
</section>


<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">Publishing & Journal Platforms
</h2>

<p className="text-gray-600 mt-4 max-w-2xl mx-auto">
These platforms facilitate peer-reviewed publication, ISBN allocation and academic dissemination across interdisciplinary domains.
</p>

<div className="mt-12 grid md:grid-cols-3 gap-10 items-center">

<img src="/synapse.png" className="h-44 mx-auto object-contain grayscale hover:grayscale-0 transition"/>

<img src="/IJRD.png" className="h-44 mx-auto object-contain grayscale hover:grayscale-0 transition"/>

<img src="/scriptoria.png" className="h-44 mx-auto object-contain grayscale hover:grayscale-0 transition"/>

</div>
</div>
</section>


<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">

<h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">
Industry & Innovation Partners
</h3>

<p className="text-gray-600 mt-4 max-w-2xl mx-auto">
Our industry partnerships support innovation translation, patent filing assistance, and commercialization strategy.
</p>

<div className="mt-12 grid md:grid-cols-4 gap-10 items-center">

<img src="/MOU_01.png" className="h-44 mx-auto object-contain "/>

<img src="/MOU_02.png" className="h-44 mx-auto object-contain "/>

<img src="/MOU_04.png" className="h-44 mx-auto object-contain "/>

<img src="/MOU_05.png" className="h-44 mx-auto object-contain"/>

</div>

</div>
</section>

<section className="py-24 bg-gray-50 px-4">

<div className="max-w-6xl mx-auto">

<div className="text-center mb-16">

<h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">
Impact Enabled Through Strategic Collaborations
</h3>

<p className="text-gray-700 max-w-4xl mx-auto">
At Scientistic Era Private Limited, collaboration is architected as a performance-driven ecosystem designed to advance research excellence, intellectual property governance, and global academic visibility.
</p>

<p className="text-gray-700 mt-4 max-w-4xl mx-auto">
We operate at the intersection of academia, innovation, and regulatory frameworks — integrating institutional partnerships, peer-review publishing networks, and industry stakeholders to deliver measurable scholarly and IP outcomes aligned with international standards.
</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all">
<CardHeader>
<Zap className="w-12 h-12 text-blue-600 mb-4" />
<CardTitle>200+ Research Publications</CardTitle>
<CardDescription className="text-gray-700">
Indexed research and review publications across SCI, Scopus, and UGC-accredited journals.
</CardDescription>
</CardHeader>
</Card>

<Card className="border-2 hover:border-purple-500 hover:shadow-xl transition-all">
<CardHeader>
<Zap className="w-12 h-12 text-purple-600 mb-4" />
<CardTitle>100+ Patent Filings</CardTitle>
<CardDescription className="text-gray-700">
Patent filings and grants across domestic and international jurisdictions including utility and design protections.
</CardDescription>
</CardHeader>
</Card>

<Card className="border-2 hover:border-pink-500 hover:shadow-xl transition-all">
<CardHeader>
<Zap className="w-12 h-12 text-pink-600 mb-4" />
<CardTitle>70+ Scholarly Books</CardTitle>
<CardDescription className="text-gray-700">
Peer-reviewed scholarly books published with global ISBN accreditation.
</CardDescription>
</CardHeader>
</Card>

<Card className="border-2 hover:border-green-500 hover:shadow-xl transition-all">
<CardHeader>
<Zap className="w-12 h-12 text-green-600 mb-4" />
<CardTitle>50+ Copyright Registrations</CardTitle>
<CardDescription className="text-gray-700">
Safeguarding original intellectual assets through registered copyright protections.
</CardDescription>
</CardHeader>
</Card>

<Card className="border-2 hover:border-orange-500 hover:shadow-xl transition-all">
<CardHeader>
<Zap className="w-12 h-12 text-orange-600 mb-4" />
<CardTitle>25+ Trademark Filings</CardTitle>
<CardDescription className="text-gray-700">
Strengthening brand identity protection and innovation ownership.
</CardDescription>
</CardHeader>
</Card>

</div>

</div>

</section>

<section className="py-24 bg-white px-6">

<div className="max-w-7xl mx-auto">

{/* Heading */}

<div className="text-center mb-16">

<h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">
Partnership Benefits
</h2>

<p className="text-gray-800 max-w-2xl mx-auto text-xl">
Key advantages institutions and organizations gain through collaboration with Scientistic Era.
</p>

</div>


{/* Cards */}

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


{/* Card 1 */}

<div className="group bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl border border-transparent hover:border-blue-400 transition-all duration-300">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-5 group-hover:scale-110 transition">
<Globe size={22}/>
</div>

<h4 className="font-semibold text-lg mb-2">
Research Visibility
</h4>

<p className="text-gray-600 text-sm leading-relaxed">
Showcase institutional research through journals, digital platforms and academic initiatives.
</p>

</div>


{/* Card 2 */}

<div className="group bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl border border-transparent hover:border-purple-400 transition-all duration-300">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-5 group-hover:scale-110 transition">
<Users size={22}/>
</div>

<h4 className="font-semibold text-lg mb-2">
Expert Academic Network
</h4>

<p className="text-gray-600 text-sm leading-relaxed">
Access experienced researchers, editors and IPR professionals for collaborative growth.
</p>

</div>


{/* Card 3 */}

<div className="group bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl border border-transparent hover:border-green-400 transition-all duration-300">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-5 group-hover:scale-110 transition">
<ShieldCheck size={22}/>
</div>

<h4 className="font-semibold text-lg mb-2">
Publication & IPR Support
</h4>

<p className="text-gray-600 text-sm leading-relaxed">
Structured assistance for research publication and intellectual property facilitation.
</p>

</div>


{/* Card 4 */}

<div className="group bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl border border-transparent hover:border-pink-400 transition-all duration-300">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-pink-100 text-pink-600 mb-5 group-hover:scale-110 transition">
<GraduationCap size={22}/>
</div>

<h4 className="font-semibold text-lg mb-2">
Co-Branded Academic Programs
</h4>

<p className="text-gray-600 text-sm leading-relaxed">
Joint webinars, workshops and scholarly initiatives to enhance institutional credibility.
</p>

</div>


</div>

</div>

</section>

{/* <section className="py-24 bg-[#0f1f3d] text-white text-center">

<div className="max-w-4xl mx-auto px-6">

<h3 className="text-4xl font-bold">
Partner With Us
</h3>

<p className="mt-6 text-gray-300">
We invite academic institutions, journals, research bodies, startups, and industry professionals to collaborate in advancing research excellence and innovation-driven impact.
</p>

<button className="mt-8 bg-white text-[#0f1f3d] px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
Start Partnership
</button>

</div>

</section> */}


<section className="relative py-28 bg-gradient-to-r from-[#0f1f3d] via-blue-700 to-purple-700 overflow-hidden">

{/* Background Image */}

<div className="absolute inset-0 opacity-20">
<img
src="/partners-bg.png"   // same image use kar sakte ho
className="w-full h-full object-cover"
/>
</div>

{/* Content */}

<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

<h2 className="text-4xl md:text-5xl font-bold text-white">
Partner With Us
</h2>

<p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto">
We invite academic institutions, journals, research bodies, startups, and industry professionals to collaborate in advancing research excellence and innovation-driven impact.
</p>

<p className="mt-4 text-blue-200 max-w-3xl mx-auto">
Together we can strengthen global research visibility, protect intellectual property, and create meaningful academic collaborations worldwide.
</p>

{/* Glass Card */}

{/* <div className="mt-12 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-10 shadow-xl"> */}
<div className="mt-12 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">

<p className="text-white text-lg mb-6">
Join our growing network of academic institutions, journals, and innovation partners shaping the future of global research.
</p>

<Link href="/contact">
<button className="bg-white text-[#0f1f3d] font-semibold px-10 py-4 rounded-xl shadow-xl hover:scale-110 hover:bg-gray-100 transition duration-300 flex items-center gap-2 mx-auto">

Start Partnership →

</button>
</Link>


</div>

</div>

</section>
<div className="w-32 h-[2px] bg-white/30 mx-auto mt-12"></div>



      <Footer />
    </>
  );
}