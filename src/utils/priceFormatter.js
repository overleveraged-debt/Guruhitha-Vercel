// Utility functions for price formatting

export const formatPriceNumeric = (price) => {
  // Format price in Indian numbering system (80,00,000)
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

export const formatPriceText = (price) => {
  // Format price in text format (80 Lakhs, 1.2 Crores)
  if (price >= 10000000) {
    const crores = price / 10000000
    return `₹${crores % 1 === 0 ? crores.toFixed(0) : crores.toFixed(1)} Crore${crores > 1 ? 's' : ''}`
  } else if (price >= 100000) {
    const lakhs = price / 100000
    return `₹${lakhs % 1 === 0 ? lakhs.toFixed(0) : lakhs.toFixed(1)} Lakh${lakhs > 1 ? 's' : ''}`
  } else if (price >= 1000) {
    const thousands = price / 1000
    return `₹${thousands % 1 === 0 ? thousands.toFixed(0) : thousands.toFixed(1)} Thousand${thousands > 1 ? 's' : ''}`
  } else {
    return `₹${price.toLocaleString('en-IN')}`
  }
}

export const formatPriceBoth = (price) => {
  // Format price showing both numeric and text format
  const numeric = formatPriceNumeric(price)
  const text = formatPriceText(price)
  
  // Only show both if they're different and meaningful
  if (price >= 100000) {
    return {
      numeric: numeric,
      text: text,
      display: `${text} (${numeric})`
    }
  } else {
    return {
      numeric: numeric,
      text: text,
      display: numeric
    }
  }
}

export const formatPriceCompact = (price, priceDisplay) => {
  // If custom price display text is provided, use that
  if (priceDisplay && priceDisplay.trim()) {
    return priceDisplay
  }

  // If no price is provided, return default text
  if (!price || price === 0) {
    return 'Contact for Price'
  }

  // Compact format for cards and listings
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(1)} Cr`
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(0)} L`
  } else {
    return `₹${price.toLocaleString('en-IN')}`
  }
}

// New unified price formatter for single price field
export const formatPrice = (price) => {
  // If no price provided, return default
  if (!price) {
    return 'Contact for Price'
  }

  // Handle numeric values (old data)
  if (typeof price === 'number') {
    if (price === 0) {
      return 'Contact for Price'
    }
    // Format numeric price using existing logic
    return formatPriceText(price)
  }

  // Handle string values (new data)
  if (typeof price === 'string') {
    if (price.trim() === '') {
      return 'Contact for Price'
    }
    return price.trim()
  }

  // Fallback
  return 'Contact for Price'
}

// Enhanced price formatter that provides both display and numeric info
export const formatPriceDetailed = (price) => {
  if (!price) {
    return {
      text: 'Contact for Price',
      numeric: 'Contact for Price',
      display: 'Contact for Price'
    }
  }

  // Handle numeric values (old data)
  if (typeof price === 'number') {
    if (price === 0) {
      return {
        text: 'Contact for Price',
        numeric: 'Contact for Price',
        display: 'Contact for Price'
      }
    }
    // Format numeric price using existing logic
    const formatted = formatPriceBoth(price)
    return {
      text: formatted.text,
      numeric: formatted.numeric,
      display: formatted.display
    }
  }

  // Handle string values (new data)
  if (typeof price === 'string') {
    if (price.trim() === '') {
      return {
        text: 'Contact for Price',
        numeric: 'Contact for Price',
        display: 'Contact for Price'
      }
    }

    const cleanPrice = price.trim()

    // Check if it's a pure number string
    const numericValue = parseFloat(cleanPrice.replace(/[₹,\s]/g, ''))
    if (!isNaN(numericValue) && /^\d+(\.\d+)?$/.test(cleanPrice.replace(/[₹,\s]/g, ''))) {
      // It's a numeric value, format it nicely
      const formatted = formatPriceBoth(numericValue)
      return {
        text: formatted.text,
        numeric: formatted.numeric,
        display: formatted.display
      }
    }

    // It's text format, return as-is
    return {
      text: cleanPrice,
      numeric: cleanPrice,
      display: cleanPrice
    }
  }

  // Fallback
  return {
    text: 'Contact for Price',
    numeric: 'Contact for Price',
    display: 'Contact for Price'
  }
}
