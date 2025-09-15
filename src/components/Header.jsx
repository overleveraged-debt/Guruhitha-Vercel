import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Use Vite's base URL to handle different deployment environments
  const baseUrl = import.meta.env.BASE_URL || '/'

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Handle scroll to hide/show header - IMPROVED VERSION
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past 50px - hide header
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-transform duration-300 header-force-top ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`} style={{ margin: 0, padding: 0, position: 'fixed' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="px-8 pt-0 pb-0 md:pt-0 md:pb-24 flex justify-between items-center">
          {/* Logo on the left - MUCH BIGGER as per red box marking */}
          <div className="flex items-center flex-shrink-0">
            <img
              src={`${baseUrl}Guruhita LOGO.png`}
              alt="Guruhita Properties"
              className="h-44 md:h-36 lg:h-60 w-auto object-contain filter drop-shadow-xl"
            />
          </div>

          {/* Navigation in center with solid red background */}
          <nav className="hidden md:flex items-center bg-red-800 rounded-full px-6 py-3 shadow-lg mx-8">
            <a
              href="#properties"
              className="text-white hover:text-yellow-300 transition-all duration-300 px-6 py-2 font-medium text-sm rounded-full hover:bg-red-700"
            >
              Properties
            </a>
            <a
              href="#about"
              className="text-white hover:text-yellow-300 transition-all duration-300 px-6 py-2 font-medium text-sm rounded-full hover:bg-red-700"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-white hover:text-yellow-300 transition-all duration-300 px-6 py-2 font-medium text-sm rounded-full hover:bg-red-700"
            >
              Services
            </a>
          </nav>

          {/* Contact Us button on the right - Custom gold color */}
          <div className="hidden md:flex flex-shrink-0 items-center">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full transition-all duration-300 font-semibold shadow-lg text-sm transform hover:scale-105 text-white"
              style={{ backgroundColor: '#C89B3F' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#B8893A'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#C89B3F'}
            >
              Contact Us
            </a>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-yellow-300 transition-colors p-3 bg-red-800 rounded-full shadow-lg"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-xl">
          <div className="px-6 py-6 space-y-4">
            <a href="#properties" className="block py-3 text-gray-800 hover:text-red-600 transition-colors font-medium border-b border-gray-100">Properties</a>
            <a href="#about" className="block py-3 text-gray-800 hover:text-red-600 transition-colors font-medium border-b border-gray-100">About Us</a>
            <a href="#services" className="block py-3 text-gray-800 hover:text-red-600 transition-colors font-medium border-b border-gray-100">Services</a>
            <a
              href="#contact"
              className="block mt-4 px-6 py-3 rounded-full transition-all text-center font-semibold shadow-lg text-white"
              style={{ backgroundColor: '#C89B3F' }}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header



