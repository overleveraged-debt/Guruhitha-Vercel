import React, { useState } from 'react'
import { X, Phone, MapPin, Home, Calendar, Compass, ChevronLeft, ChevronRight, Square, Building, Clock } from 'lucide-react'
import { urlFor } from '../lib/sanity'
import { formatPriceDetailed } from '../utils/priceFormatter'

const PropertyModal = ({ property, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Touch/Swipe state for image navigation
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  if (!isOpen || !property) return null

  // Format price for display
  const priceFormatted = formatPriceDetailed(property.price)

  // Format category for display
  const formatCategory = (category) => {
    switch (category) {
      case 'for-sale': return 'FOR SALE'
      case 'for-rent': return 'FOR RENT'
      case 'commercial': return 'COMMERCIAL'
      default: return category?.toUpperCase() || 'FOR SALE'
    }
  }

  // Format availability status
  const formatAvailabilityStatus = (status) => {
    switch (status) {
      case 'available': return { text: 'Available', color: 'text-green-600 bg-green-100' }
      case 'sold': return { text: 'Sold', color: 'text-red-600 bg-red-100' }
      case 'under-negotiation': return { text: 'Under Negotiation', color: 'text-yellow-600 bg-yellow-100' }
      case 'reserved': return { text: 'Reserved', color: 'text-blue-600 bg-blue-100' }
      default: return { text: 'Available', color: 'text-green-600 bg-green-100' }
    }
  }

  // Get all images (featured + gallery)
  const allImages = [
    property.featuredImage,
    ...(property.gallery || [])
  ].filter(Boolean)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  const availabilityStatus = formatAvailabilityStatus(property.availabilityStatus)

  // Touch/Swipe handlers for image navigation
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && allImages.length > 1) {
      nextImage()
    } else if (isRightSwipe && allImages.length > 1) {
      prevImage()
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-brand-navy">{property.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image Gallery */}
          {allImages.length > 0 && (
            <div className="mb-6">
              <div
                className="relative"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <img
                  src={urlFor(allImages[currentImageIndex]).width(800).height(500).url()}
                  alt={property.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
                
                {/* Image Navigation */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                    >
                      <ChevronRight size={20} />
                    </button>
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {allImages.length}
                    </div>
                  </>
                )}
              </div>
              
              {/* Thumbnail Strip */}
              {allImages.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex ? 'border-brand-gold' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={urlFor(image).width(100).height(100).url()}
                        alt={`${property.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Property Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              {/* Price and Status */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-3xl font-bold text-brand-gold block">{priceFormatted.display}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${availabilityStatus.color}`}>
                    {availabilityStatus.text}
                  </span>
                </div>
                <span className="inline-block bg-brand-navy text-white px-3 py-1 rounded-full text-sm font-medium">
                  {formatCategory(property.category)}
                </span>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-navy mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              {/* Property Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-navy mb-3">Property Features</h3>
                <div className="grid grid-cols-1 gap-3">
                  {property.bhk && ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK'].includes(property.bhk) && (
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Home size={20} className="text-brand-gold flex-shrink-0" />
                      <div>
                        <span className="text-sm text-gray-500 block"></span>
                        <span className="text-gray-800 font-medium">{property.bhk}</span>
                      </div>
                    </div>
                  )}
                  {property.squareFootage && (
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Square size={20} className="text-brand-gold flex-shrink-0" />
                      <div>
                        <span className="text-sm text-gray-500 block">Area</span>
                        <span className="text-gray-800 font-medium">{property.squareFootage} sq ft</span>
                      </div>
                    </div>
                  )}
                  {property.propertyType && (
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Building size={20} className="text-brand-gold flex-shrink-0" />
                      <div>
                        <span className="text-sm text-gray-500 block">Property Type</span>
                        <span className="text-gray-800 font-medium capitalize">{property.propertyType.replace('-', ' ')}</span>
                      </div>
                    </div>
                  )}
                  {property.buildingAge && (
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Clock size={20} className="text-brand-gold flex-shrink-0" />
                      <div>
                        <span className="text-sm text-gray-500 block">Building Age</span>
                        <span className="text-gray-800 font-medium">{property.buildingAge}</span>
                      </div>
                    </div>
                  )}
                  {property.facing && (
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Compass size={20} className="text-brand-gold flex-shrink-0" />
                      <div>
                        <span className="text-sm text-gray-500 block">Facing Direction</span>
                        <span className="text-gray-800 font-medium capitalize">{property.facing.replace('-', ' ')} Facing</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Location */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-navy mb-2">Location</h3>
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="text-brand-gold mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{property.location}</span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-navy mb-3">Contact Information</h3>
                <div className="bg-brand-beige p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone size={18} className="text-brand-gold" />
                    <a 
                      href={`tel:${property.contactPhone}`}
                      className="text-brand-navy font-medium hover:text-brand-gold transition-colors"
                    >
                      {property.contactPhone}
                    </a>
                  </div>
                  <button
                    onClick={() => window.open(`tel:${property.contactPhone}`)}
                    className="w-full bg-brand-gold text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all font-medium"
                  >
                    Call Now
                  </button>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyModal
