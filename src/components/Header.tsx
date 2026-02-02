import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { 
      name: "About", 
      href: "/about",
      dropdown: [
        { name: "About Us", href: "/about" },
        { name: "IPR Services", href: "/ipr-services" },
        { name: "MOU Partners", href: "/mou-partners" },
      ]
    },
    { name: "Services", href: "/services" },
    { name: "Journals", href: "/journals" },
    { name: "Gallery", href: "/gallery" },
    { name: "Webinars", href: "/webinars" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => router.pathname === path;
  const isAboutActive = () => {
    return router.pathname === "/about" || 
           router.pathname === "/ipr-services" || 
           router.pathname === "/mou-partners";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all">
              <Image
                src="/WhatsApp_Image_2026-01-09_at_11.07.43_PM.jpeg"
                alt="ScientisticEra Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ScientisticEra
              </span>
              <span className="text-xs text-gray-600">Private Limited</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              item.dropdown ? (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  <button
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-1 ${
                      isAboutActive()
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {aboutDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm font-medium transition-colors ${
                            isActive(subItem.href)
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navigation.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="space-y-2">
                  <div
                    className={`px-4 py-3 rounded-lg font-medium transition-all cursor-pointer ${
                      isAboutActive()
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "text-gray-700 bg-gray-50"
                    }`}
                    onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? "rotate-180" : ""}`} />
                    </div>
                  </div>
                  
                  {aboutDropdownOpen && (
                    <div className="pl-4 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            isActive(subItem.href)
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}