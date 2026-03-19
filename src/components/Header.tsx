import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/our-about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Research Consultancy", href: "/research_consultancy" },
        { name: "Intellectual Property (IPR)", href: "/ipr" },
        { name: "Academic Publishing", href: "/academic_publishing" },
        { name: "Knowledge Platforms", href: "/knowledge_latforms" },
        { name: "Collaboration & Institutional Support", href: "/collaboration" },
      ],
    },
    { name: "Webinars", href: "/webinars" },
    { name: "Journals", href: "/journals" },
    { name: "Publications", href: "/gallery" },
    { name: "Pharmaceutics", href: "/medicine" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => router.pathname === path;

  const isDropdownActive = (dropdownItems) => {
    return dropdownItems?.some((item) => item.href === router.pathname);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 mt-2">
            <Image
              src="/New_Logo.png"
              alt="ScientisticEra Logo"
              width={150}
              height={80}
              className="object-contain"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-blue-600">
                ScientisticEra
              </span>
              <span className="text-sm text-gray-600">Pvt Ltd</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative group">

                  {/* BUTTON */}
                  <button
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-1 ${
                      isDropdownActive(item.dropdown)
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* DROPDOWN */}
                  <div className="absolute left-0 top-full mt-1 w-60 opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible 
                  transition-all duration-200 z-50">

                    {/* Invisible hover bridge */}
                    <div className="absolute -top-3 left-0 w-full h-3"></div>

                    <div className="bg-white rounded-xl shadow-xl border border-gray-200 py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm font-medium transition-all ${
                            isActive(subItem.href)
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
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
            )}
          </div>

          {/* MOBILE BUTTON */}
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

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="space-y-2">
                  <div
                    className={`px-4 py-3 rounded-lg font-medium transition-all cursor-pointer ${
                      isDropdownActive(item.dropdown)
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "text-gray-700 bg-gray-50"
                    }`}
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      )
                    }
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {activeDropdown === item.name && (
                    <div className="pl-4 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
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
                  className="block px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
}