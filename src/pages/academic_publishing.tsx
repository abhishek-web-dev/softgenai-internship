import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { BookOpen, Library, FileText, CheckCircle, Layers } from "lucide-react";

export default function AcademicPublishing() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="py-28 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Academic Publishing Services
          </h1>

          <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
            Supporting researchers and academicians in publishing high-quality scholarly work through peer-reviewed journals and academic books.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition">
                Submit Research Article
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-8 py-4 rounded-xl border-2 border-purple-500 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition">
                Publish Book
              </button>
            </Link>
          </div>

        </div>
      </section>


      {/* PART 1 - BOOK PUBLISHING */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Scholarly Book Publishing
            </h2>

            <p className="text-gray-600 mb-6">
              Supporting researchers, academicians, and subject experts in publishing high-quality scholarly books and edited volumes through a professional academic publishing process.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Academic book publishing for researchers and faculty</li>
              <li>✔ Edited volumes and multi-author books</li>
              <li>✔ Conference proceedings publication</li>
              <li>✔ ISBN allocation and copyright support</li>
              <li>✔ Professional editing, formatting, and typesetting</li>
              <li>✔ Print and digital publication options</li>
            </ul>

            <p className="mt-6 text-sm text-gray-500">
              Our books are published through our dedicated academic publishing division, ensuring professional editorial standards and global academic visibility.
            </p>

            <Link href="/contact">
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Explore Our Publishing House →
              </button>
            </Link>
          </div>

          {/* RIGHT (IMAGE PLACEHOLDER) */}
          <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center text-gray-400">
            Books Showcase (Add Slider Here)
          </div>

        </div>
      </section>


      {/* PART 2 - JOURNALS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center text-gray-400">
            Journals Showcase (Add Slider Here)
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Academic Journal Platforms
            </h2>

            <p className="text-gray-600 mb-6">
              Facilitating publication of research articles in peer-reviewed academic journals across diverse disciplines.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Support for publishing in reputed peer-reviewed journals</li>
              <li>✔ Guidance for Scopus, Web of Science, UGC-CARE indexed journals</li>
              <li>✔ Manuscript preparation and submission support</li>
              <li>✔ Editorial and peer-review coordination</li>
            </ul>

            <p className="mt-6 text-gray-600 text-sm">
              We also host our own scholarly journals:
            </p>

            <ul className="mt-3 text-sm text-gray-700 space-y-1">
              <li>• Journal of Health Synapse</li>
              <li>• International Journal of Research and Development in Pharmacy & Life Sciences</li>
            </ul>

            <Link href="/contact">
              <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                View Our Journals →
              </button>
            </Link>
          </div>

        </div>
      </section>


      {/* PART 3 - PRE-PUBLICATION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pre-Publication Support
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive support to prepare manuscripts according to international publishing standards.
          </p>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              ✔ Manuscript editing and proofreading
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              ✔ Reference formatting (APA / MLA / Vancouver)
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              ✔ Plagiarism check & improvement
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              ✔ Journal formatting & submission
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              ✔ Research article structuring
            </div>

          </div>

          <Link href="/contact">
            <button className="mt-10 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition">
              Get Publishing Support →
            </button>
          </Link>

        </div>
      </section>

      <Footer />
    </>
  );
}

