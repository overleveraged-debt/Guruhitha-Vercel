export default {
  name: 'formSubmission',
  title: 'Form Submission',
  type: 'document',
  icon: () => '📝',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name of the person who submitted the form',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Email address of the person',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Phone number of the person'
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      description: 'Message or inquiry from the person'
    },
    {
      name: 'formType',
      title: 'Form Type',
      type: 'string',
      description: 'Type of form submitted',
      options: {
        list: [
          {title: 'Contact Form', value: 'contact'},
          {title: 'Property Inquiry', value: 'property'},
          {title: 'Loan Application', value: 'loan'},
          {title: 'General Inquiry', value: 'general'}
        ],
        layout: 'dropdown'
      },
      initialValue: 'contact',
      validation: Rule => Rule.required()
    },
    {
      name: 'source',
      title: 'Source Page',
      type: 'string',
      description: 'Which page the form was submitted from',
      options: {
        list: [
          {title: 'Homepage', value: 'homepage'},
          {title: 'Properties Page', value: 'properties'},
          {title: 'Home Loans Page', value: 'home-loans'},
          {title: 'Contact Page', value: 'contact'}
        ],
        layout: 'dropdown'
      }
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      description: 'Current status of this inquiry',
      options: {
        list: [
          {title: 'New', value: 'new'},
          {title: 'In Progress', value: 'in-progress'},
          {title: 'Contacted', value: 'contacted'},
          {title: 'Closed', value: 'closed'}
        ],
        layout: 'radio'
      },
      initialValue: 'new'
    },
    {
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      description: 'Internal notes for team members (not visible to customers)'
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      description: 'When the form was submitted',
      initialValue: () => new Date().toISOString()
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      formType: 'formType',
      status: 'status',
      submittedAt: 'submittedAt'
    },
    prepare(selection) {
      const {title, subtitle, formType, status, submittedAt} = selection
      const date = submittedAt ? new Date(submittedAt).toLocaleDateString() : 'Unknown'
      return {
        title: `${title} (${formType})`,
        subtitle: `${subtitle} • ${status} • ${date}`
      }
    }
  },
  orderings: [
    {
      title: 'Newest First',
      name: 'newestFirst',
      by: [
        {field: 'submittedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Status',
      name: 'byStatus',
      by: [
        {field: 'status', direction: 'asc'},
        {field: 'submittedAt', direction: 'desc'}
      ]
    }
  ]
}
