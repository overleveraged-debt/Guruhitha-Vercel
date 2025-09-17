// 🎯 GOOGLE ANALYTICS CONFIGURATION
// ⚠️  ONLY CHANGE THIS LINE - Replace 'G-XXXXXXXXXX' with your Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-PX74RRJF3H'

// 📝 How to get your Measurement ID:
// 1. Go to https://analytics.google.com
// 2. Create account and property for your website
// 3. Copy the Measurement ID (starts with G-)
// 4. Replace 'G-XXXXXXXXXX' above with your real ID
// 5. Commit and push - that's it! 🚀

// Check if we're in production and have a valid GA ID
const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost'
const hasValidGA = GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX'
const shouldTrack = isProduction && hasValidGA

// Initialize Google Analytics
export const initGA = () => {
  if (!shouldTrack) {
    console.log('Google Analytics disabled: Not in production or invalid GA ID')
    return
  }

  try {
    // Load gtag script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script1)

    // Initialize gtag
    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
    `
    document.head.appendChild(script2)

    console.log('Google Analytics initialized successfully')
  } catch (error) {
    console.error('Error initializing Google Analytics:', error)
  }
}

// Track page views
export const trackPageView = (url, title) => {
  if (!shouldTrack) return

  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
        page_title: title,
      })
    } catch (error) {
      console.error('Error tracking page view:', error)
    }
  }
}

// Track property interactions
export const trackPropertyInteraction = (action, propertyId, propertyTitle, propertyPrice, propertyLocation) => {
  if (!shouldTrack) return

  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', action, {
        event_category: 'Property',
        event_label: propertyTitle,
        property_id: propertyId,
        property_title: propertyTitle,
        property_price: propertyPrice,
        property_location: propertyLocation,
        value: propertyPrice
      })
    } catch (error) {
      console.error('Error tracking property interaction:', error)
    }
  }
}

// Track property views
export const trackPropertyView = (propertyId, propertyTitle, propertyPrice, propertyLocation) => {
  trackPropertyInteraction('view_property', propertyId, propertyTitle, propertyPrice, propertyLocation)
}

// Track property clicks
export const trackPropertyClick = (propertyId, propertyTitle, propertyPrice, propertyLocation) => {
  trackPropertyInteraction('click_property', propertyId, propertyTitle, propertyPrice, propertyLocation)
}

// Track contact button clicks
export const trackContactClick = (propertyId, propertyTitle, contactMethod = 'phone') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_click', {
      event_category: 'Contact',
      event_label: `${contactMethod}_${propertyTitle}`,
      property_id: propertyId,
      contact_method: contactMethod
    })
  }
}

// Track search interactions
export const trackSearch = (searchTerm, category = 'all') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'search', {
      search_term: searchTerm,
      search_category: category
    })
  }
}

// Track hero banner interactions
export const trackHeroBannerClick = (bannerTitle, buttonText, buttonLink) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'hero_banner_click', {
      event_category: 'Hero Banner',
      event_label: bannerTitle,
      button_text: buttonText,
      button_link: buttonLink
    })
  }
}

// Track review interactions
export const trackReviewInteraction = (action, reviewId, customerName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: 'Review',
      event_label: customerName,
      review_id: reviewId
    })
  }
}
