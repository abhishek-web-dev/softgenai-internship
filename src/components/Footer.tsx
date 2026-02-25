import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_2fr_1fr_1fr_1.2fr] gap-8"> */}
          {/* Company Info */}
         
          <div className="flex flex-col space-y-4 lg:col-span-3">
            <div className="flex items-center space-x-3">
              <div className="relative w-16 h-16 overflow-hidden ring-2 ring-blue-500/30">
                <Image
                  src="/WhatsApp_Image_2026-01-09_at_11.07.43_PM.png"
                  alt="ScientisticEra Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-600">
                  ScientisticEra
                </h3>
                <p className="text-m text-white-400">Pvt Ltd</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering researchers and academics with world-class publication services, 
              PhD guidance, and comprehensive research support.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61565407943656"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Scientisticera"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/scientisticeraofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-4 lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Research Development & Publication Support</li>
              <li className="text-gray-300">Thesis & Dissertation Consultancy</li>
              <li className="text-gray-300">Research Mentorship & Methodology Guidance</li>
              <li className="text-gray-300">IPR & Innovation Support</li>
              <li className="text-gray-300">Research Training & Scholarly Programs</li>
            </ul>
          </div>

          {/* Initiatives */}
          <div className="flex flex-col space-y-4 lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-white">Initiatives</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Webinar</li>
              <li className="text-gray-300"> Awards</li>
              <li className="text-gray-300">E-Magazine </li>
              <li className="text-gray-300">Journal of Health Synapse</li>
              <li className="text-gray-300">Scriptoria Publications</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4 lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          

          {/* Contact Info */}
          {/* <div> */}
          {/* <div className="flex flex-col space-y-4"> */}
          <div className="flex flex-col space-y-4 lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:contact@scientisticera.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    contact@scientisticera.com
                  </a>
                  <br />
                  {/* <a
                    href="mailto:support@scientisticera.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    support@scientisticera.com
                  </a> */}
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>+91 7068507857</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Bahadurgarh, Haryana<br />
                  124507, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} ScientisticEra Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}