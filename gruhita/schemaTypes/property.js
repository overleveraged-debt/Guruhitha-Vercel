export default {
  name: 'property',
  title: 'Property Listing',
  type: 'document',
  icon: () => '🏡',
  fields: [
    // Basic Information
    {
      name: 'title',
      title: 'Property Title',
      type: 'string',
      description: 'Attractive title for the property listing',
      validation: Rule => Rule.required().max(100)
    },
    {
      name: 'description',
      title: 'Property Description',
      type: 'text',
      description: 'Detailed description of the property features and amenities',
      validation: Rule => Rule.required().max(1000)
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Property price in your local currency',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'location',
      title: 'Location/Address',
      type: 'string',
      description: 'Full address or area name',
      validation: Rule => Rule.required()
    },
    
    // Property Details
    {
      name: 'bhk',
      title: 'BHK Configuration',
      type: 'string',
      description: 'Property configuration (e.g., 1 BHK, 2 BHK, 3 BHK, etc.)',
      options: {
        list: [
          {title: '1 BHK', value: '1 BHK'},
          {title: '2 BHK', value: '2 BHK'},
          {title: '3 BHK', value: '3 BHK'},
          {title: '4 BHK', value: '4 BHK'},
          {title: '5 BHK', value: '5 BHK'},
          {title: 'Studio', value: 'Studio'},
          {title: 'Duplex', value: 'Duplex'},
          {title: 'Penthouse', value: 'Penthouse'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'squareFootage',
      title: 'Square Footage',
      type: 'number',
      description: 'Total area in square feet',
      validation: Rule => Rule.min(0)
    },
    {
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      description: 'Type of property',
      options: {
        list: [
          {title: 'Apartment', value: 'apartment'},
          {title: 'House', value: 'house'},
          {title: 'Villa', value: 'villa'},
          {title: 'Site', value: 'site'},
          {title: 'Plot', value: 'plot'},
          {title: 'Commercial Building', value: 'commercial-building'},
          {title: 'Condo', value: 'condo'},
          {title: 'Townhouse', value: 'townhouse'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'buildingAge',
      title: 'Building Age',
      type: 'string',
      description: 'Age of the building/property',
      options: {
        list: [
          {title: 'Under Construction', value: 'under-construction'},
          {title: 'Ready to Move', value: 'ready-to-move'},
          {title: '1-2 Years', value: '1-2-years'},
          {title: '3-5 Years', value: '3-5-years'},
          {title: '5-10 Years', value: '5-10-years'},
          {title: '10+ Years', value: '10-plus-years'}
        ]
      }
    },
    {
      name: 'facing',
      title: 'Property Facing',
      type: 'string',
      description: 'Direction the property faces',
      options: {
        list: [
          {title: 'North', value: 'north'},
          {title: 'South', value: 'south'},
          {title: 'East', value: 'east'},
          {title: 'West', value: 'west'},
          {title: 'North-East', value: 'north-east'},
          {title: 'North-West', value: 'north-west'},
          {title: 'South-East', value: 'south-east'},
          {title: 'South-West', value: 'south-west'}
        ]
      }
    },

    // Category
    {
      name: 'category',
      title: 'Property Category',
      type: 'string',
      description: 'Whether the property is for sale, rent, or commercial use',
      options: {
        list: [
          {title: 'For Sale', value: 'for-sale'},
          {title: 'For Rent', value: 'for-rent'},
          {title: 'Commercial', value: 'commercial'}
        ]
      },
      validation: Rule => Rule.required()
    },
    
    // Images
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Main image that represents this property (appears in listings)',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'gallery',
      title: 'Property Gallery',
      type: 'array',
      description: 'Additional images of the property',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              title: 'Image Caption',
              type: 'string',
              description: 'Optional description for this image'
            }
          ]
        }
      ],
      options: {
        layout: 'grid'
      }
    },
    
    // Contact Information
    {
      name: 'contactPhone',
      title: 'Contact Phone Number',
      type: 'string',
      description: 'Phone number for inquiries about this property',
      validation: Rule => Rule.required()
    },
    
    // Status and Visibility
    {
      name: 'availabilityStatus',
      title: 'Property Status',
      type: 'string',
      description: 'Current availability status of the property',
      options: {
        list: [
          {title: 'Available', value: 'available'},
          {title: 'Sold', value: 'sold'},
          {title: 'Under Negotiation', value: 'under-negotiation'},
          {title: 'Reserved', value: 'reserved'}
        ]
      },
      initialValue: 'available',
      validation: Rule => Rule.required()
    },
    {
      name: 'isActive',
      title: 'Show on Website',
      type: 'boolean',
      description: 'Toggle to show or hide this property from the website',
      initialValue: true
    },
    {
      name: 'isFeatured',
      title: 'Featured Property',
      type: 'boolean',
      description: 'Mark as featured to highlight this property',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      location: 'location',
      category: 'category',
      bhk: 'bhk',
      availabilityStatus: 'availabilityStatus',
      media: 'featuredImage',
      isActive: 'isActive',
      isFeatured: 'isFeatured'
    },
    prepare(selection) {
      const {title, price, location, category, bhk, availabilityStatus, media, isActive, isFeatured} = selection
      const statusIcon = !isActive ? ' (Hidden)' : isFeatured ? ' ⭐' : ''
      const availabilityIcon = availabilityStatus === 'sold' ? ' 🔴' : availabilityStatus === 'available' ? ' 🟢' : ' 🟡'
      return {
        title: `${title}${statusIcon}${availabilityIcon}`,
        subtitle: `₹${price?.toLocaleString()} • ${bhk || 'N/A'} • ${location} • ${category}`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Price (High to Low)',
      name: 'priceDesc',
      by: [
        {field: 'price', direction: 'desc'}
      ]
    },
    {
      title: 'Price (Low to High)',
      name: 'priceAsc',
      by: [
        {field: 'price', direction: 'asc'}
      ]
    },
    {
      title: 'Recently Added',
      name: 'newest',
      by: [
        {field: '_createdAt', direction: 'desc'}
      ]
    }
  ]
}
