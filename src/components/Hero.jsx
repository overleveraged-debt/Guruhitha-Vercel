import { useState, useEffect } from 'react'
import { sanityHelpers, urlFor } from '../lib/sanity'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slides, setSlides] = useState([])
  const [loading, setLoading] = useState(true)
  const slideInterval = 5000 // 5 seconds

  // Fetch hero banners from Sanity
  useEffect(() => {
    const fetchHeroBanners = async () => {
      try {
        setLoading(true)
        const banners = await sanityHelpers.getHeroBanners()

        // Transform Sanity data to match component structure
        const transformedSlides = banners.map(banner => ({
          image: banner.image ? urlFor(banner.image).width(1200).quality(90).url() : null,
          title: banner.title,
          subtitle: banner.subtitle,
          buttonText: banner.buttonText || 'Explore Properties',
          buttonLink: banner.buttonLink || '#properties'
        }))

        setSlides(transformedSlides)
      } catch (error) {
        console.error('Error fetching hero banners:', error)
        // Fallback to default slide if Sanity fails
        setSlides([{
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          title: "Find Your Dream Home in Bangalore",
          subtitle: "Exclusive properties and tailored home loan solutions under one roof.",
          buttonText: "Explore Properties",
          buttonLink: "#properties"
        }])
      } finally {
        setLoading(false)
      }
    }

    fetchHeroBanners()
  }, [])

  useEffect(() => {
    if (slides.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, slideInterval)

      return () => clearInterval(timer)
    }
  }, [slides.length])



  // Show loading state while fetching data
  if (loading) {
    return (
      <section id="hero" className="relative w-full bg-brand-beige py-8 px-4 md:px-8">
        <div className="container mx-auto pt-28 md:pt-24">
          <div className="flex items-center justify-center h-64 md:h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-gold mx-auto mb-4"></div>
              <p className="text-brand-navy text-lg">Loading hero banners...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Show message if no slides available
  if (!slides.length) {
    return (
      <section id="hero" className="relative w-full bg-brand-beige py-8 px-4 md:px-8">
        <div className="container mx-auto pt-28 md:pt-24">
          <div className="flex items-center justify-center h-64 md:h-96">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">No hero banners available</h2>
              <p className="text-brand-navy/70">Please add some hero banners in the CMS.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="hero" className="relative w-full bg-brand-beige px-4 md:px-8">
      <div className="container mx-auto pt-28 md:pt-28 lg:pt-36">
        {/* Carousel Container with relative positioning */}
        <div className="relative w-full bg-white rounded-xl shadow-xl border border-gray-100 md:bg-transparent md:rounded-xl md:shadow-lg md:border-0 overflow-hidden">
          <div className="relative h-64 md:h-[450px] lg:h-[550px] bg-black">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-contain md:object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10 flex items-center justify-center">
                  <div className="px-4 md:px-8 w-full max-w-4xl text-center">
                    <div className="text-white">
                      <h1 className="text-xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-sm md:text-xl lg:text-2xl mb-4 md:mb-8 leading-snug opacity-90">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button positioned at bottom center above dots */}
                <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-20">
                  <a href={slide.buttonLink} className="bg-brand-gold text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-lg font-semibold hover:bg-opacity-90 transition-all inline-block shadow-lg">
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Indicators - positioned for compact hero */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-1">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-brand-gold'
                : 'bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero


