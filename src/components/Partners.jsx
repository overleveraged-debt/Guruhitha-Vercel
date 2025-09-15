import React, { useState, useEffect } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const Partners = () => {
  const [sectionRef, sectionVisible] = useScrollReveal()
  const [translateX, setTranslateX] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Financial partners using actual logos from partners folder
  // Use Vite's base URL to handle different deployment environments
  const baseUrl = import.meta.env.BASE_URL || '/'

  const partners = [
    {
      name: "HDFC Bank",
      logo: `${baseUrl}partners/HDFC_Bank_Logo.webp`,
      height: "h-12"
    },
    {
      name: "State Bank of India",
      logo: `${baseUrl}partners/sbi_logo.webp`,
      height: "h-14"
    },
    {
      name: "Axis Bank",
      logo: `${baseUrl}partners/Axis_Bank_logo.webp`,
      height: "h-12"
    },
    {
      name: "Yes Bank",
      logo: `${baseUrl}partners/Yes-Bank-logo.webp`,
      height: "h-12"
    },
    {
      name: "Canfin Homes",
      logo: `${baseUrl}partners/Canfin_Color_PNG.webp`,
      height: "h-12"
    },
    {
      name: "Home First Finance",
      logo: `${baseUrl}partners/homeFirstLogo.svg`,
      height: "h-12"
    },
    {
      name: "LIC Housing Finance",
      logo: `${baseUrl}partners/lic-hfl-logo.svg`,
      height: "h-12"
    },
    {
      name: "Financial Partner",
      logo: `${baseUrl}partners/logo_2.webp`,
      height: "h-12"
    },
    {
      name: "Financial Partner",
      logo: `${baseUrl}partners/logo-light.webp`,
      height: "h-12"
    },
    {
      name: "Financial Partner",
      logo: `${baseUrl}partners/product-jpeg-500x500.webp`,
      height: "h-12"
    }
  ]

  // Create duplicated partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners]

  // Continuous scrolling animation
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setTranslateX(prev => {
        const newTranslateX = prev - 1 // Move 1px to the left each interval
        // Reset when we've scrolled through one complete set of partners
        // Each partner takes up approximately 200px (including padding)
        const resetPoint = -(partners.length * 200)
        return newTranslateX <= resetPoint ? 0 : newTranslateX
      })
    }, 50) // Update every 50ms for smooth animation

    return () => clearInterval(interval)
  }, [partners.length, isPaused])

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div
        ref={sectionRef}
        className={`container mx-auto px-6 transition-all duration-800 ${
          sectionVisible ? 'reveal visible' : 'reveal'
        }`}
      >
        <h3 className="text-center text-2xl font-bold text-brand-navy mb-10">
          Our Financial Partners
        </h3>

        {/* Infinite Scrolling Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex items-center"
              style={{
                transform: `translateX(${translateX}px)`,
                width: 'fit-content'
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 mx-4 flex-shrink-0"
                  style={{ minWidth: '160px', width: '160px' }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`${partner.height} max-w-full object-contain`}
                    onError={(e) => {
                      console.error(`Failed to load logo: ${partner.logo}`)
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
