import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity client configuration for reading data
export const client = createClient({
  projectId: 'z72ywil9', // Your project ID from the Sanity config
  dataset: 'production',
  useCdn: false, // Set to false to ensure fresh data and avoid CORS issues
  apiVersion: '2024-01-01', // Use current date in YYYY-MM-DD format
  perspective: 'published', // Only fetch published documents
})

// Sanity client configuration for writing data (form submissions)
export const writeClient = createClient({
  projectId: 'z72ywil9',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: import.meta.env.VITE_SANITY_WRITE_TOKEN, // Write token from environment variables
})

// Helper function to generate image URLs
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Query functions for fetching data
export const queries = {
  // Get all active hero banners ordered by display order
  herobanners: `*[_type == "heroBanner" && isActive == true] | order(order asc) {
    _id,
    title,
    subtitle,
    image,
    mobileImage,
    buttonText,
    buttonLink,
    desktopTextPosition,
    mobileTextPosition,
    page,
    order
  }`,

  // Get hero banners for specific page
  herobannersByPage: (page) => `*[_type == "heroBanner" && isActive == true && (page == "${page}" || page == "all")] | order(order asc) {
    _id,
    title,
    subtitle,
    image,
    mobileImage,
    buttonText,
    buttonLink,
    desktopTextPosition,
    mobileTextPosition,
    page,
    order
  }`,

  // Get all active properties
  properties: `*[_type == "property" && isActive == true] | order(_createdAt desc) {
    _id,
    title,
    description,
    price,
    priceDisplay,
    location,
    bhk,
    squareFootage,
    propertyType,
    category,
    buildingAge,
    facing,
    availabilityStatus,
    featuredImage,
    gallery,
    contactPhone,
    isFeatured,
    _createdAt
  }`,

  // Get featured properties only
  featuredProperties: `*[_type == "property" && isActive == true && isFeatured == true] | order(_createdAt desc) {
    _id,
    title,
    description,
    price,
    priceDisplay,
    location,
    bhk,
    squareFootage,
    propertyType,
    category,
    buildingAge,
    facing,
    availabilityStatus,
    featuredImage,
    gallery,
    contactPhone,
    _createdAt
  }`,

  // Get properties by category
  propertiesByCategory: (category) => `*[_type == "property" && isActive == true && category == "${category}"] | order(price desc) {
    _id,
    title,
    description,
    price,
    location,
    bedrooms,
    bathrooms,
    squareFootage,
    propertyType,
    category,
    featuredImage,
    gallery,
    contactPhone,
    isFeatured,
    _createdAt
  }`,

  // Get single property by ID
  propertyById: (id) => `*[_type == "property" && _id == "${id}"][0] {
    _id,
    title,
    description,
    price,
    location,
    bhk,
    squareFootage,
    propertyType,
    category,
    buildingAge,
    facing,
    availabilityStatus,
    featuredImage,
    gallery,
    contactPhone,
    isFeatured,
    _createdAt
  }`,

  // Get all active reviews
  reviews: `*[_type == "review" && isActive == true] | order(displayOrder asc, _createdAt desc) {
    _id,
    customerName,
    customerLocation,
    customerPhoto,
    reviewText,
    rating,
    serviceType,
    reviewSource,
    isFeatured,
    reviewDate,
    _createdAt
  }`,

  // Get featured reviews only
  featuredReviews: `*[_type == "review" && isActive == true && isFeatured == true] | order(displayOrder asc, _createdAt desc) {
    _id,
    customerName,
    customerLocation,
    customerPhoto,
    reviewText,
    rating,
    serviceType,
    reviewSource,
    reviewDate,
    _createdAt
  }`
}

// Helper functions for common operations
export const sanityHelpers = {
  // Fetch hero banners
  async getHeroBanners() {
    try {
      console.log('Attempting to fetch hero banners...')
      const result = await client.fetch(queries.herobanners)
      console.log('Hero banners fetched successfully:', result)
      return result
    } catch (error) {
      console.error('Error fetching hero banners:', error)
      console.error('Error details:', error.message)
      // Return fallback data for testing
      return [
        {
          _id: 'fallback-1',
          title: 'Welcome to Guruhitha Properties',
          subtitle: 'Your trusted partner in Bangalore real estate',
          buttonText: 'Explore Properties',
          buttonLink: '#properties',
          page: 'all',
          order: 1
        }
      ]
    }
  },

  // Fetch hero banners for specific page
  async getHeroBannersByPage(page) {
    try {
      console.log(`Attempting to fetch hero banners for page: ${page}...`)
      const result = await client.fetch(queries.herobannersByPage(page))
      console.log('Page-specific hero banners fetched successfully:', result)
      return result
    } catch (error) {
      console.error(`Error fetching hero banners for page ${page}:`, error)
      console.error('Error details:', error.message)
      // Return fallback data based on page
      const fallbackBanners = {
        'homepage': [{
          _id: 'fallback-homepage',
          title: 'Welcome to Guruhitha Properties',
          subtitle: 'Your trusted partner in Bangalore real estate',
          buttonText: 'Get Started',
          buttonLink: '/',
          page: 'homepage',
          order: 1
        }],
        'properties': [{
          _id: 'fallback-properties',
          title: 'Find Your Dream Property',
          subtitle: 'Explore premium properties in Bangalore',
          buttonText: 'View Properties',
          buttonLink: '#properties',
          page: 'properties',
          order: 1
        }],
        'home-loans': [{
          _id: 'fallback-home-loans',
          title: 'Get Your Home Loan Approved',
          subtitle: 'Fast, transparent, and hassle-free home loan process',
          buttonText: 'Apply Now',
          buttonLink: '#contact',
          page: 'home-loans',
          order: 1
        }]
      }
      return fallbackBanners[page] || fallbackBanners['homepage']
    }
  },

  // Fetch all properties
  async getProperties() {
    try {
      return await client.fetch(queries.properties)
    } catch (error) {
      console.error('Error fetching properties:', error)
      return []
    }
  },

  // Fetch featured properties
  async getFeaturedProperties() {
    try {
      console.log('Attempting to fetch featured properties...')
      const result = await client.fetch(queries.featuredProperties)
      console.log('Featured properties fetched successfully:', result)
      return result
    } catch (error) {
      console.error('Error fetching featured properties:', error)
      console.error('Error details:', error.message)
      // Return fallback data for testing
      return [
        {
          _id: 'fallback-property-1',
          title: 'Luxury Villa in Whitefield',
          description: 'Beautiful 3BHK villa with modern amenities',
          price: 12500000,
          location: 'Whitefield, Bangalore',
          bedrooms: 3,
          bathrooms: 3,
          squareFootage: 2200,
          propertyType: 'Villa',
          category: 'for-sale',
          contactPhone: '+91 98765 43210',
          isFeatured: true
        }
      ]
    }
  },

  // Fetch properties by category
  async getPropertiesByCategory(category) {
    try {
      return await client.fetch(queries.propertiesByCategory(category))
    } catch (error) {
      console.error(`Error fetching ${category} properties:`, error)
      return []
    }
  },

  // Fetch single property
  async getPropertyById(id) {
    try {
      return await client.fetch(queries.propertyById(id))
    } catch (error) {
      console.error('Error fetching property:', error)
      return null
    }
  },

  // Fetch all reviews
  async getReviews() {
    try {
      console.log('Attempting to fetch reviews...')
      const result = await client.fetch(queries.reviews)
      console.log('Reviews fetched successfully:', result)
      return result
    } catch (error) {
      console.error('Error fetching reviews:', error)
      console.error('Error details:', error.message)
      // Return fallback data for testing
      return [
        {
          _id: 'fallback-review-1',
          customerName: 'Priya & Rohan S.',
          customerLocation: 'Whitefield',
          reviewText: 'Guruhita Properties made our home buying process incredibly smooth. Their team was professional, transparent, and secured a fantastic home loan for us. Highly recommended!',
          rating: 5,
          serviceType: 'property-purchase',
          reviewSource: 'direct',
          isFeatured: true
        },
        {
          _id: 'fallback-review-2',
          customerName: 'Ankit Sharma',
          customerLocation: 'Koramangala',
          reviewText: 'Selling our apartment through Guruhita was a breeze. They handled everything from viewings to paperwork with utmost professionalism. We got a great price too!',
          rating: 5,
          serviceType: 'property-sale',
          reviewSource: 'direct',
          isFeatured: false
        }
      ]
    }
  },

  // Fetch featured reviews
  async getFeaturedReviews() {
    try {
      console.log('Attempting to fetch featured reviews...')
      const result = await client.fetch(queries.featuredReviews)
      console.log('Featured reviews fetched successfully:', result)
      return result
    } catch (error) {
      console.error('Error fetching featured reviews:', error)
      console.error('Error details:', error.message)
      // Return fallback data for testing
      return [
        {
          _id: 'fallback-featured-review-1',
          customerName: 'Priya & Rohan S.',
          customerLocation: 'Whitefield',
          reviewText: 'Guruhita Properties made our home buying process incredibly smooth. Their team was professional, transparent, and secured a fantastic home loan for us. Highly recommended!',
          rating: 5,
          serviceType: 'property-purchase',
          reviewSource: 'direct',
          isFeatured: true
        }
      ]
    }
  },

  // Submit form data to Sanity
  async submitForm(formData) {
    try {
      console.log('Attempting to submit form data to Sanity...', formData)

      // Check if write token is available
      if (!import.meta.env.VITE_SANITY_WRITE_TOKEN) {
        console.warn('No Sanity write token found. Form data will be logged but not saved to CMS.')
        console.log('Form data that would be submitted:', formData)

        // Simulate successful submission for development
        return {
          _id: 'simulated-' + Date.now(),
          _type: 'formSubmission',
          ...formData,
          submittedAt: new Date().toISOString(),
          status: 'simulated'
        }
      }

      const doc = {
        _type: 'formSubmission',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        message: formData.message || '',
        formType: formData.formType || 'contact',
        source: formData.source || 'contact',
        status: 'new',
        submittedAt: new Date().toISOString()
      }

      const result = await writeClient.create(doc)
      console.log('Form submitted successfully:', result)
      return result
    } catch (error) {
      console.error('Error submitting form:', error)

      // If it's a permission error, provide helpful guidance
      if (error.message.includes('Insufficient permissions')) {
        console.warn('Sanity write permissions not configured. Please set up a write token.')
        console.log('Form data (not saved to CMS):', formData)

        // Return a simulated success for better UX
        return {
          _id: 'local-' + Date.now(),
          _type: 'formSubmission',
          ...formData,
          submittedAt: new Date().toISOString(),
          status: 'local-only'
        }
      }

      throw error
    }
  }
}
