# Gruhita CMS Setup Guide

## 🎉 Congratulations! Your Sanity CMS Integration is Complete

Your Gruhita website now has a powerful, user-friendly Content Management System powered by Sanity.io. Here's everything you need to know:

## 📁 What Was Created

### 1. Sanity Studio (CMS Interface)
- **Location**: `gruhita/` folder
- **Custom branding**: Gruhita colors and logo
- **User-friendly interface**: Organized content sections

### 2. Content Schemas
- **Hero Banners**: Manage homepage slider images and text
- **Property Listings**: Complete property management system

### 3. React Integration
- **Hero Component**: Now pulls data from Sanity
- **Featured Properties**: Displays properties from CMS
- **Loading states**: Professional loading indicators

## 🚀 How to Start Using Your CMS

### Step 1: Launch Sanity Studio
```bash
cd gruhita
npm run dev
```
This will open your CMS at `http://localhost:3333`

### Step 2: Add Your First Hero Banner
1. Click "🏠 Hero Banners" in the sidebar
2. Click "➕ Add New Hero Banner"
3. Fill in:
   - **Banner Title**: Your main headline
   - **Banner Subtitle**: Supporting text
   - **Background Image**: Upload a high-quality image (1920x1080px recommended)
   - **Button Text**: Call-to-action text
   - **Button Link**: Where the button should go (#properties, #contact, etc.)
   - **Display Order**: 1 for first banner, 2 for second, etc.
   - **Show this Banner**: Toggle to make it visible

### Step 3: Add Your First Property
1. Click "🏡 Property Listings" in the sidebar
2. Click "📋 All Properties"
3. Click the "+" button to create new
4. Fill in all the property details:
   - **Basic Info**: Title, description, price, location
   - **Property Details**: Bedrooms, bathrooms, square footage, type
   - **Category**: For Sale, For Rent, or Commercial
   - **Featured Image**: Main property photo
   - **Property Gallery**: Additional photos
   - **Contact Phone**: Phone number for inquiries
   - **Show on Website**: Toggle to make it visible
   - **Featured Property**: Mark as featured to highlight it

## 🎨 CMS Features

### Organized Content Structure
- **Hero Banners**: Manage homepage sliders
- **Property Categories**: Separate views for Sale, Rent, Commercial
- **Featured Properties**: Special highlighting system
- **Hidden Properties**: Draft/inactive listings

### User-Friendly Features
- **Visual previews**: See how content will look
- **Image optimization**: Automatic image processing
- **Drag & drop**: Easy image uploads
- **Rich text editing**: Professional content creation
- **Mobile responsive**: Works on all devices

## 🔧 Technical Details

### Project Information
- **Project ID**: z72ywil9
- **Dataset**: production
- **Studio URL**: Will be provided after deployment

### File Structure
```
gruhita/
├── sanity.config.js          # Main configuration
├── schemaTypes/
│   ├── heroBanner.js         # Hero banner schema
│   ├── property.js           # Property schema
│   └── index.js              # Schema exports
├── components/
│   └── Logo.js               # Custom Gruhita logo
└── structure.js              # Custom CMS layout
```

## 🌐 Deploying Your CMS

### Option 1: Sanity Cloud (Recommended)
```bash
cd gruhita
npx sanity deploy
```
Choose a studio hostname (e.g., `gruhita-cms`)

### Option 2: Custom Domain
Contact your developer for custom domain setup.

## 👥 User Management

### Adding Team Members
1. Go to https://sanity.io/manage
2. Select your "Gruhita" project
3. Go to "Members" tab
4. Invite team members with their email addresses
5. Assign appropriate roles:
   - **Administrator**: Full access (for you)
   - **Editor**: Can create/edit content (for employees)

## 📱 Mobile Access

Your CMS works perfectly on mobile devices:
- Access through any web browser
- Upload images from phone camera
- Edit content on the go
- Responsive design for all screen sizes

## 🆘 Support & Troubleshooting

### Common Issues

**Q: I can't see my changes on the website**
A: Make sure the "Show on Website" toggle is enabled for your content.

**Q: Images aren't loading**
A: Ensure images are uploaded through the CMS, not just linked from external sources.

**Q: How do I reorder hero banners?**
A: Change the "Display Order" number (1 = first, 2 = second, etc.)

### Getting Help
- **Documentation**: https://www.sanity.io/docs
- **Community**: https://www.sanity.io/community
- **Your Developer**: Contact for custom modifications

## 🎯 Best Practices

### Content Guidelines
- **Images**: Use high-quality images (minimum 1200px wide)
- **Text**: Keep titles under 100 characters for better display
- **Descriptions**: Write compelling, detailed property descriptions
- **Phone Numbers**: Include country code for international accessibility

### SEO Tips
- Use descriptive property titles
- Include location names in descriptions
- Add relevant keywords naturally
- Keep content fresh and updated

## 🔄 Regular Maintenance

### Weekly Tasks
- Review and update property listings
- Check for expired or sold properties
- Update hero banners for seasonal promotions
- Monitor contact form submissions

### Monthly Tasks
- Review featured properties selection
- Update pricing information
- Add new property photos
- Archive old listings

---

## 🎊 You're All Set!

Your Gruhita CMS is now ready to use. Start by adding your first hero banner and property listing to see the magic happen!

**Next Steps:**
1. Launch the CMS: `cd gruhita && npm run dev`
2. Add sample content
3. Deploy to make it accessible to your team
4. Train your employees on the interface

Happy content managing! 🏠✨
