export default {
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'document',
  icon: () => '🏠',
  fields: [
    {
      name: 'title',
      title: 'Banner Title',
      type: 'string',
      description: 'Main heading text for the banner',
      validation: Rule => Rule.required().max(100).warning('Keep titles under 100 characters for better display')
    },
    {
      name: 'subtitle',
      title: 'Banner Subtitle',
      type: 'text',
      description: 'Supporting text that appears below the title',
      validation: Rule => Rule.max(200).warning('Keep subtitles under 200 characters for better readability')
    },
    {
      name: 'image',
      title: 'Desktop Background Image',
      type: 'image',
      description: 'High-quality background image for desktop/tablet (recommended: 1200x600px)',
      options: {
        hotspot: true, // Enables image cropping
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'mobileImage',
      title: 'Mobile Background Image (Optional)',
      type: 'image',
      description: 'Optimized image for mobile devices (recommended: 800x1200px). If not provided, desktop image will be used.',
      options: {
        hotspot: true, // Enables image cropping
      }
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text displayed on the call-to-action button',
      initialValue: 'Explore Properties'
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      description: 'URL or page section the button should link to (e.g., #properties, /contact)',
      initialValue: '#properties'
    },
    {
      name: 'page',
      title: 'Page',
      type: 'string',
      description: 'Select which page this banner should appear on',
      options: {
        list: [
          {title: 'Homepage', value: 'homepage'},
          {title: 'Properties Page', value: 'properties'},
          {title: 'Home Loans Page', value: 'home-loans'},
          {title: 'All Pages', value: 'all'}
        ],
        layout: 'dropdown'
      },
      initialValue: 'all',
      validation: Rule => Rule.required()
    },
    {
      name: 'desktopTextPosition',
      title: 'Desktop Text Position',
      type: 'string',
      description: 'Choose where the text should appear on desktop/tablet',
      options: {
        list: [
          {title: 'Top', value: 'top'},
          {title: 'Center', value: 'center'},
          {title: 'Bottom', value: 'bottom'},
          {title: 'Hide Text', value: 'none'}
        ],
        layout: 'radio'
      },
      initialValue: 'center'
    },
    {
      name: 'mobileTextPosition',
      title: 'Mobile Text Position',
      type: 'string',
      description: 'Choose where the text should appear on mobile devices',
      options: {
        list: [
          {title: 'Top', value: 'top'},
          {title: 'Center', value: 'center'},
          {title: 'Bottom', value: 'bottom'},
          {title: 'Hide Text', value: 'none'}
        ],
        layout: 'radio'
      },
      initialValue: 'center'
    },
    {
      name: 'isActive',
      title: 'Show this Banner',
      type: 'boolean',
      description: 'Toggle to show or hide this banner from the website',
      initialValue: true
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this banner appears (1 = first, 2 = second, etc.)',
      validation: Rule => Rule.required().min(1).integer()
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
      order: 'order',
      isActive: 'isActive'
    },
    prepare(selection) {
      const {title, subtitle, media, order, isActive} = selection
      return {
        title: `${order}. ${title}`,
        subtitle: isActive ? subtitle : `${subtitle} (Hidden)`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
}
