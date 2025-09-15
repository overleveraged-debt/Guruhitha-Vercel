import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const Partners = () => {
  const [sectionRef, sectionVisible] = useScrollReveal()
  const [currentSlide, setCurrentSlide] = useState(0)

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

  // Number of partners to show per slide
  const partnersPerSlide = 6
  const totalSlides = Math.ceil(partners.length / partnersPerSlide)

  // Auto-play functionality - continuous infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex)
  }

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

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const slidePartners = partners.slice(
                  slideIndex * partnersPerSlide,
                  (slideIndex + 1) * partnersPerSlide
                )

                return (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center p-8">
                      {slidePartners.map((partner, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
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
                )
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-brand-gold hover:text-white transition-all duration-300 z-10"
                aria-label="Previous partners"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-brand-gold hover:text-white transition-all duration-300 z-10"
                aria-label="Next partners"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-brand-gold scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}


        </div>
      </div>
    </section>
  )
}

export default Partners
