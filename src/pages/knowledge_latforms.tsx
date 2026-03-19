import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { BookOpen, Award, Lightbulb } from "lucide-react";

export default function KnowledgePlatforms() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="py-28 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3] pb-2">
            Knowledge Platforms
          </h1>

          <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
            Empowering knowledge sharing, academic excellence, and innovation through our dedicated platforms for researchers, scholars, and professionals.
          </p>

        </div>
      </section>


      {/* UNIVERSAL E-MAGAZINE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
              Digital Publication Platform
            </span>

            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Universal E-Magazine
            </h2>

            <p className="mt-4 text-gray-600">
              The Universal E-Magazine is a digital platform showcasing research highlights, academic insights, innovations, and thought leadership from scholars and professionals across disciplines.
            </p>

            <h4 className="mt-6 font-semibold text-gray-800">
              Inside the Magazine:
            </h4>

            <ul className="mt-3 space-y-2 text-gray-700">
              <li>• Research articles and perspectives</li>
              <li>• Innovation and startup stories</li>
              <li>• Academic insights and commentary</li>
              <li>• Knowledge sharing across disciplines</li>
            </ul>

            <Link href="/contact">
              <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Read the Magazine →
              </button>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center text-gray-400">
            Magazine Preview (Add Image/Slider)
          </div>

        </div>
      </section>


      {/* SCIENTISTIC ERA AWARDS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center text-gray-400">
            Awards Showcase (Add Image/Slider)
          </div>

          {/* RIGHT */}
          <div>

            <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
              Recognition & Excellence
            </span>

            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Scientistic Era Awards
            </h2>

            <p className="mt-4 text-gray-600">
              The Scientistic Era Awards recognize outstanding contributions in research, innovation, and academic excellence. The initiative celebrates researchers, scholars, and professionals who are advancing knowledge and creating meaningful impact across disciplines.
            </p>

            <h4 className="mt-6 font-semibold text-gray-800">
              Key Recognitions:
            </h4>

            <ul className="mt-3 space-y-2 text-gray-700">
              <li>• Recognition for outstanding research contributions</li>
              <li>• Awards for innovation and academic excellence</li>
              <li>• Opportunities for emerging researchers and scholars</li>
              <li>• Global visibility within the academic community</li>
            </ul>

            <Link href="/contact">
              <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                Explore the Awards →
              </button>
            </Link>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}