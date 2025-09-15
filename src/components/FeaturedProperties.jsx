import React, { useState, useEffect, useRef } from 'react'
import { MapPin, Bed, Bath, Square, Phone, Home, ChevronLeft, ChevronRight } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { sanityHelpers, urlFor } from '../lib/sanity'
import PropertyModal from './PropertyModal'
import { formatPriceCompact } from '../utils/priceFormatter'

const FeaturedProperties = () => {
  const [titleRef, titleVisible] = useScrollReveal()
  const [subtitleRef, subtitleVisible] = useScrollReveal()
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef(null)

  // Number of properties to show per slide (responsive)
  const [propertiesPerSlide, setPropertiesPerSlide] = useState(3)

  // Handle responsive properties per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPropertiesPerSlide(1) // Mobile: 1 property
      } else if (window.innerWidth < 1024) {
        setPropertiesPerSlide(2) // Tablet: 2 properties
      } else {
        setPropertiesPerSlide(3) // Desktop: 3 properties
      }
    }

    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Fetch featured properties from Sanity
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true)
        const featuredProps = await sanityHelpers.getFeaturedProperties()
        setProperties(featuredProps)
      } catch (error) {
        console.error('Error fetching featured properties:', error)
        // Fallback to empty array if Sanity fails
        setProperties([])
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  // Calculate total slides
  const totalSlides = Math.max(0, properties.length - propertiesPerSlide + 1)

  // Carousel navigation functions
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1)
    }
  }

  const openModal = (property) => {
    setSelectedProperty(property)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedProperty(null)
    setIsModalOpen(false)
  }

  const PropertyCard = ({ property, index }) => {
    const [cardRef, cardVisible] = useScrollReveal()

    // Use compact price formatting for cards

    // Format category for display
    const formatCategory = (category) => {
      switch (category) {
        case 'for-sale': return 'FOR SALE'
        case 'for-rent': return 'FOR RENT'
        case 'commercial': return 'COMMERCIAL'
        default: return category?.toUpperCase() || 'FOR SALE'
      }
    }

    return (
      <div
        ref={cardRef}
        className={`bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-800 h-full ${
          cardVisible ? 'reveal visible' : 'reveal'
        }`}
      >
        <div className="relative overflow-hidden">
          <img
            src={urlFor(property.featuredImage).width(400).height(300).url()}
            alt={property.title}
            className="w-full h-48 object-cover property-card-image"
          />
          <div className="absolute top-4 left-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full">
            {formatCategory(property.category)}
          </div>
          {property.propertyType && (
            <div className="absolute top-4 right-4 bg-brand-navy text-white text-xs font-bold px-3 py-1 rounded-full">
              {property.propertyType.toUpperCase()}
            </div>
          )}
        </div>
        <div className="p-6">
          <h4 className="text-xl font-bold text-brand-navy mb-2">{property.title}</h4>
          <p className="text-gray-500 mb-4 flex items-center">
            <MapPin size={16} className="mr-2" />
            {property.location}
          </p>
          <div className="flex justify-between items-center text-sm mb-4">
            {property.bhk && (
              <span className="flex items-center">
                <Home size={16} className="mr-1" />
                <strong>{property.bhk}</strong>
              </span>
            )}
            {property.propertyType && (
              <span className="flex items-center">
                <Home size={16} className="mr-1" />
                <strong>{property.propertyType.replace('-', ' ')}</strong>
              </span>
            )}
            {property.squareFootage && (
              <span className="flex items-center">
                <Square size={16} className="mr-1" />
                <strong>{property.squareFootage}</strong>&nbsp;sqft
              </span>
            )}
          </div>
          <p className="text-2xl font-extrabold text-brand-navy mb-4">{formatPriceCompact(property.price, property.priceDisplay)}</p>
          <div className="flex gap-2">
            <a
              href={`tel:${property.contactPhone}`}
              className="flex-1 text-center bg-brand-gold text-white px-4 py-3 rounded-lg hover:bg-brand-gold/90 transition-all font-semibold flex items-center justify-center"
            >
              <Phone size={16} className="mr-2" />
              Call Now
            </a>
            <button
              onClick={() => openModal(property)}
              className="flex-1 text-center bg-brand-navy text-white px-4 py-3 rounded-lg hover:bg-brand-navy/90 transition-all font-semibold"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="properties" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className={`text-sm font-bold uppercase text-brand-gold tracking-widest mb-2 transition-all duration-800 ${
              titleVisible ? 'reveal visible' : 'reveal'
            }`}
          >
            Featured Properties
          </h2>
          <h3
            ref={subtitleRef}
            className={`text-3xl md:text-4xl font-bold text-brand-navy transition-all duration-800 ${
              subtitleVisible ? 'reveal visible' : 'reveal'
            }`}
          >
            Explore Our Top Listings in Bangalore
          </h3>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-gold mx-auto mb-4"></div>
              <p className="text-brand-navy text-lg">Loading featured properties...</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && properties.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">No Featured Properties</h3>
            <p className="text-gray-600 mb-8">Featured properties will appear here once they are added to the CMS.</p>
          </div>
        )}

        {/* Properties Carousel */}
        {!loading && properties.length > 0 && (
          <div className="relative max-w-7xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * (100 / propertiesPerSlide)}%)`
                }}
              >
                {properties.map((property, index) => (
                  <div
                    key={property._id}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / propertiesPerSlide}%` }}
                  >
                    <PropertyCard property={property} index={index} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {properties.length > propertiesPerSlide && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 transition-all duration-300 z-10 ${
                    currentSlide === 0
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-brand-gold hover:text-white'
                  }`}
                  aria-label="Previous properties"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide >= totalSlides - 1}
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 transition-all duration-300 z-10 ${
                    currentSlide >= totalSlides - 1
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-brand-gold hover:text-white'
                  }`}
                  aria-label="Next properties"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Slide Indicators */}
            {properties.length > propertiesPerSlide && totalSlides > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
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
        )}
      </div>

      {/* Property Modal */}
      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

export default FeaturedProperties
