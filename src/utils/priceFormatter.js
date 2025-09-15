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
