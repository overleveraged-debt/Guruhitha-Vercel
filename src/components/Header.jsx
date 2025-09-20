import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Instagram, Facebook } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()

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
              alt="Guruhitha Properties"
              className="h-44 md:h-36 lg:h-60 w-auto object-contain filter drop-shadow-xl"
            />
          </div>

          {/* Navigation in center with solid red background */}
          <nav className="hidden md:flex items-center bg-red-800 rounded-full px-6 py-3 shadow-lg mx-8">
            <Link
              to="/"
              className={`text-white hover:text-yellow-300 transition-all duration-300 px-6 py-2 font-medium text-sm rounded-full hover:bg-red-700 ${
                location.pathname === '/' ? 'bg-red-700 text-yellow-300' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/properties"
              className={`text-white hover:text-yellow-300 transition-all duration-300 px-6 py-2 font-medium text-sm rounded-full hover:bg-red-700 ${
                location.pathname === '/properties' ? 'bg-red-700 text-yellow-300' : ''
              }`}
            >
              Properties
            </Link>
            <Link
              to="/home-loans"
              className={`text-white hover:text-yellow-300 transition-all duration-300 px-6 py-2 font-medium text-sm rounded-full hover:bg-red-700 ${
                location.pathname === '/home-loans' ? 'bg-red-700 text-yellow-300' : ''
              }`}
            >
              Home Loans
            </Link>

          </nav>

          {/* Social Media Icons - Mobile and Desktop */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2 md:gap-3">
              <a
                href="https://www.instagram.com/guruhitha_properties"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition-all duration-300 p-2 rounded-full hover:bg-white hover:bg-opacity-20"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/people/Guruhitha-Properties-and-Fintech/61564461780296/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition-all duration-300 p-2 rounded-full hover:bg-white hover:bg-opacity-20"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>

            {/* Contact Us Button - Desktop Only */}
            <a
              href="#contact"
              className="hidden md:block px-6 py-3 rounded-full transition-all duration-300 font-semibold shadow-lg text-sm transform hover:scale-105 text-white"
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
            <Link
              to="/"
              className={`block py-3 text-gray-800 hover:text-red-600 transition-colors font-medium border-b border-gray-100 ${
                location.pathname === '/' ? 'text-red-600 font-bold' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/properties"
              className={`block py-3 text-gray-800 hover:text-red-600 transition-colors font-medium border-b border-gray-100 ${
                location.pathname === '/properties' ? 'text-red-600 font-bold' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Properties
            </Link>
            <Link
              to="/home-loans"
              className={`block py-3 text-gray-800 hover:text-red-600 transition-colors font-medium border-b border-gray-100 ${
                location.pathname === '/home-loans' ? 'text-red-600 font-bold' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home Loans
            </Link>
            <a
              href="#contact"
              className="block mt-4 px-6 py-3 rounded-full transition-all text-center font-semibold shadow-lg text-white"
              style={{ backgroundColor: '#C89B3F' }}
              onClick={() => setIsMobileMenuOpen(false)}
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



