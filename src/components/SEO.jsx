import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  siteName = 'Guruhitha Properties'
}) => {
  const baseUrl = 'https://guruhithaproperties.in' // Updated to match actual domain
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : `${baseUrl}/Guruhita LOGO.png`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Guruhitha Properties" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "Guruhitha Properties",
          "alternateName": "Guruhitha Properties and Fintech",
          "url": baseUrl,
          "logo": `${baseUrl}/Guruhita LOGO.png`,
          "description": "Premium real estate services and home loan solutions in Bangalore. Specializing in BDA/BMRDA approved plots, residential and commercial properties with expert guidance.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
          },
          "areaServed": {
            "@type": "City",
            "name": "Bangalore"
          },
          "serviceType": [
            "Real Estate Sales",
            "Property Buying",
            "Property Selling",
            "Home Loans",
            "Construction Loans",
            "Property Investment Consulting"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-98765-43210",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi", "Kannada"]
          },
          "sameAs": [
            "https://www.instagram.com/guruhitha_properties",
            "https://www.facebook.com/people/Guruhitha-Properties-and-Fintech/61564461780296/"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150"
          }
        })}
      </script>
    </Helmet>
  )
}

// Pre-defined SEO configurations for different pages
export const seoConfigs = {
  homepage: {
    title: 'Guruhitha Properties - Premium Real Estate & Home Loans in Bangalore',
    description: '🏠 Find your dream home in Bangalore with Guruhitha Properties! Premium BDA/BMRDA approved plots, residential & commercial properties + instant home loan approvals. Expert guidance, transparent deals, 100% legal verification. Your trusted real estate partner since inception.',
    keywords: 'Bangalore real estate, BDA plots, BMRDA plots, home loans Bangalore, property for sale, residential plots, commercial properties, real estate agent Bangalore, property buying, Guruhitha Properties',
    url: '/'
  },
  properties: {
    title: 'Premium Properties for Sale in Bangalore | BDA & BMRDA Approved',
    description: '🏡 Discover premium properties in Bangalore! BDA/BMRDA approved plots, luxury villas, apartments & commercial spaces. 100% legal verification, transparent pricing, expert guidance. Find your perfect property with Guruhitha Properties.',
    keywords: 'properties for sale Bangalore, BDA approved plots, BMRDA plots, residential properties, commercial properties, luxury villas, apartments Bangalore, approved plots, individual buildings',
    url: '/properties'
  },
  homeLoans: {
    title: 'Home Loans in Bangalore - Instant Approval | Best Rates 2024',
    description: '💰 Get home loans with lowest interest rates & instant approval in Bangalore! Construction loans, purchase loans, renovation loans, loan against property. Expert financial advisory, hassle-free process, quick disbursement.',
    keywords: 'home loans Bangalore, lowest interest rates, instant approval, construction loans, purchase loans, renovation loans, loan against property, home loan eligibility, financial advisory',
    url: '/home-loans'
  }
}

export default SEO
