import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { sanityHelpers, urlFor } from '../lib/sanity'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [titleRef, titleVisible] = useScrollReveal()
  const [subtitleRef, subtitleVisible] = useScrollReveal()
  const [sliderRef, sliderVisible] = useScrollReveal()
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch reviews from Sanity
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true)
        const reviews = await sanityHelpers.getReviews()

        // Transform Sanity reviews to testimonial format
        const transformedReviews = reviews.map(review => ({
          id: review._id,
          image: review.customerPhoto ? urlFor(review.customerPhoto).width(200).height(200).url() : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
          text: review.reviewText,
          author: `${review.customerName}, ${review.customerLocation}`,
          rating: review.rating,
          serviceType: review.serviceType
        }))

        setTestimonials(transformedReviews)
      } catch (error) {
        console.error('Error fetching reviews:', error)
        // Fallback testimonials are already handled in sanityHelpers
        setTestimonials([])
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  // Calculate how many testimonials to show per slide
  const testimonialsPerSlide = {
    mobile: 1,
    desktop: 3
  }

  // Get current testimonials per slide based on screen size
  const getCurrentTestimonialsPerSlide = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 ? testimonialsPerSlide.desktop : testimonialsPerSlide.mobile
    }
    return testimonialsPerSlide.desktop
  }

  const [testimonialsPerSlideState, setTestimonialsPerSlideState] = useState(getCurrentTestimonialsPerSlide())

  // Update testimonials per slide on window resize
  useEffect(() => {
    const handleResize = () => {
      setTestimonialsPerSlideState(getCurrentTestimonialsPerSlide())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxSlides = Math.max(0, testimonials.length - testimonialsPerSlideState + 1)

  const nextTestimonial = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides)
  }

  const prevTestimonial = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides)
  }

  // Get visible testimonials for current slide
  const getVisibleTestimonials = () => {
    return testimonials.slice(currentSlide, currentSlide + testimonialsPerSlideState)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2
          ref={titleRef}
          className={`text-sm font-bold uppercase text-gray-600 tracking-widest mb-2 transition-all duration-800 ${
            titleVisible ? 'reveal visible' : 'reveal'
          }`}
        >
          WHAT OUR CUSTOMERS SAY
        </h2>
        <h3
          ref={subtitleRef}
          className={`text-3xl md:text-4xl font-bold text-gray-800 mb-16 transition-all duration-800 ${
            subtitleVisible ? 'reveal visible' : 'reveal'
          }`}
        >
          OUR TESTIMONIALS
        </h3>
        <div
          ref={sliderRef}
          className={`relative max-w-7xl mx-auto transition-all duration-800 ${
            sliderVisible ? 'reveal visible' : 'reveal'
          }`}
        >
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentSlide}-${index}`}
                className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ backgroundColor: '#F5F0E8' }}
              >
                {/* Customer Photo */}
                <div className="flex justify-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 text-center italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="text-center">
                  <h4 className="font-bold text-gray-800 text-lg mb-1">
                    {testimonial.author.split(',')[0]}
                  </h4>
                  <p className="text-gray-600 text-sm uppercase tracking-wide font-medium">
                    {testimonial.serviceType || 'Customer'}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.author.split(',')[1]?.trim() || ''}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > testimonialsPerSlideState && (
            <>
              <button
                onClick={prevTestimonial}
                disabled={currentSlide === 0}
                className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronLeft size={24} className="text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                disabled={currentSlide >= maxSlides - 1}
                className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronRight size={24} className="text-gray-600" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {testimonials.length > testimonialsPerSlideState && (
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: maxSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-brand-gold'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Google Reviews Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Guruhitha+Properties+%26+Fintech/@13.0286164,77.4857604,17z/data=!4m8!3m7!1s0x3bae3d3bc9160895:0x45ffa40b8ecf12e5!8m2!3d13.0286164!4d77.4883353!9m1!1b1!16s%2Fg%2F11m5tvvlkq?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View More Testimonials On Google
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
