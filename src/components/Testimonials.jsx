import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { sanityHelpers, urlFor } from '../lib/sanity'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-brand-beige">
      <div className="container mx-auto px-6 text-center">
        <h2
          ref={titleRef}
          className={`text-sm font-bold uppercase text-brand-gold tracking-widest mb-2 transition-all duration-800 ${
            titleVisible ? 'reveal visible' : 'reveal'
          }`}
        >
          Client Testimonials
        </h2>
        <h3
          ref={subtitleRef}
          className={`text-3xl md:text-4xl font-bold text-brand-navy mb-12 transition-all duration-800 ${
            subtitleVisible ? 'reveal visible' : 'reveal'
          }`}
        >
          What Our Clients Say
        </h3>
        <div
          ref={sliderRef}
          className={`relative max-w-3xl mx-auto transition-all duration-800 ${
            sliderVisible ? 'reveal visible' : 'reveal'
          }`}
        >
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-item text-center transition-opacity duration-500 ${
                  index === currentTestimonial ? 'block' : 'hidden'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt="Client Photo"
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-brand-gold"
                />
                {/* Star Rating */}
                {testimonial.rating && (
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
                <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                <p className="font-bold text-brand-navy">- {testimonial.author}</p>
              </div>
            ))}
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-16 bg-white/50 hover:bg-white/80 p-2 rounded-full transition-colors shadow-md"
          >
            <ChevronLeft size={24} stroke="#1A2E44" strokeWidth={2} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 bg-white/50 hover:bg-white/80 p-2 rounded-full transition-colors shadow-md"
          >
            <ChevronRight size={24} stroke="#1A2E44" strokeWidth={2} />
          </button>
        </div>

        {/* Google Reviews Button */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/Guruhitha+Properties+%26+Fintech/@13.0286164,77.4857604,17z/data=!4m8!3m7!1s0x3bae3d3bc9160895:0x45ffa40b8ecf12e5!8m2!3d13.0286164!4d77.4883353!9m1!1b1!16s%2Fg%2F11m5tvvlkq?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-gold text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <ExternalLink size={20} />
            View All Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
