export default {
  name: 'review',
  title: 'Customer Review',
  type: 'document',
  icon: () => '⭐',
  fields: [
    // Customer Information
    {
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      description: 'Full name of the customer',
      validation: Rule => Rule.required().max(100)
    },
    {
      name: 'customerLocation',
      title: 'Customer Location',
      type: 'string',
      description: 'Location/area where the customer is from (e.g., Whitefield, Koramangala)',
      validation: Rule => Rule.required().max(100)
    },
    {
      name: 'customerPhoto',
      title: 'Customer Photo',
      type: 'image',
      description: 'Photo of the customer (optional)',
      options: {
        hotspot: true,
      }
    },
    
    // Review Content
    {
      name: 'reviewText',
      title: 'Review Text',
      type: 'text',
      description: 'The customer review/testimonial',
      validation: Rule => Rule.required().max(500)
    },
    {
      name: 'rating',
      title: 'Star Rating',
      type: 'number',
      description: 'Rating out of 5 stars',
      validation: Rule => Rule.required().min(1).max(5).integer(),
      initialValue: 5
    },
    
    // Service Information
    {
      name: 'serviceType',
      title: 'Service Type',
      type: 'string',
      description: 'What service was provided to this customer',
      options: {
        list: [
          {title: 'Property Purchase', value: 'property-purchase'},
          {title: 'Property Sale', value: 'property-sale'},
          {title: 'Home Loan', value: 'home-loan'},
          {title: 'Construction Loan', value: 'construction-loan'},
          {title: 'Loan Against Property', value: 'loan-against-property'},
          {title: 'Property Consultation', value: 'property-consultation'},
          {title: 'Legal Services', value: 'legal-services'},
          {title: 'Other', value: 'other'}
        ]
      },
      validation: Rule => Rule.required()
    },
    
    // Review Source
    {
      name: 'reviewSource',
      title: 'Review Source',
      type: 'string',
      description: 'Where this review came from',
      options: {
        list: [
          {title: 'Google Reviews', value: 'google'},
          {title: 'Direct Feedback', value: 'direct'},
          {title: 'WhatsApp', value: 'whatsapp'},
          {title: 'Email', value: 'email'},
          {title: 'Phone Call', value: 'phone'},
          {title: 'In Person', value: 'in-person'}
        ]
      },
      initialValue: 'direct'
    },
    
    // Display Settings
    {
      name: 'isActive',
      title: 'Show on Website',
      type: 'boolean',
      description: 'Toggle to show or hide this review from the website',
      initialValue: true
    },
    {
      name: 'isFeatured',
      title: 'Featured Review',
      type: 'boolean',
      description: 'Mark as featured to highlight this review',
      initialValue: false
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this review (lower numbers appear first)',
      validation: Rule => Rule.integer().min(0),
      initialValue: 0
    },
    
    // Metadata
    {
      name: 'reviewDate',
      title: 'Review Date',
      type: 'date',
      description: 'Date when the review was given',
      initialValue: () => new Date().toISOString().split('T')[0]
    }
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'reviewText',
      location: 'customerLocation',
      rating: 'rating',
      serviceType: 'serviceType',
      media: 'customerPhoto',
      isActive: 'isActive',
      isFeatured: 'isFeatured'
    },
    prepare(selection) {
      const {title, subtitle, location, rating, serviceType, media, isActive, isFeatured} = selection
      const stars = '⭐'.repeat(rating || 5)
      const status = !isActive ? ' (Hidden)' : isFeatured ? ' 🌟' : ''
      const service = serviceType ? serviceType.replace('-', ' ').toUpperCase() : ''
      
      return {
        title: `${title}${status} ${stars}`,
        subtitle: `${location} • ${service} • ${subtitle?.substring(0, 60)}...`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [
        {field: 'displayOrder', direction: 'asc'},
        {field: '_createdAt', direction: 'desc'}
      ]
    },
    {
      title: 'Rating (High to Low)',
      name: 'ratingDesc',
      by: [
        {field: 'rating', direction: 'desc'},
        {field: '_createdAt', direction: 'desc'}
      ]
    },
    {
      title: 'Most Recent',
      name: 'newest',
      by: [
        {field: 'reviewDate', direction: 'desc'},
        {field: '_createdAt', direction: 'desc'}
      ]
    }
  ]
}
