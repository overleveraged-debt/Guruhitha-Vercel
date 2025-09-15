# Guruhitha Properties and Finance - React Website

A modern, responsive React application for Guruhitha Properties and Finance, converted from a single-page HTML website to a structured React application using Vite, Tailwind CSS, and Lucide React icons.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Running

1. **Install Dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Or double-click `start-dev.bat` on Windows

3. **Open in Browser**:
   Navigate to `http://localhost:5173`

4. **Build for Production**:
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
gruhita/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Navigation with mobile menu
│   │   ├── Hero.jsx         # Image slider with auto-play
│   │   ├── FeaturedProperties.jsx  # Property listings
│   │   ├── About.jsx        # Company information
│   │   ├── WhyChooseUs.jsx  # Feature highlights
│   │   ├── Services.jsx     # Service offerings
│   │   ├── Testimonials.jsx # Client testimonials slider
│   │   ├── Partners.jsx     # Financial partner logos
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer component
│   ├── hooks/
│   │   └── useScrollReveal.js  # Custom scroll animation hook
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles and animations
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## ✨ Features Implemented

### 🎨 **Visual & Design**
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Custom Brand Colors**: Navy, gold, beige color scheme
- **Real Images**: High-quality property and business images from Unsplash
- **Smooth Animations**: Scroll reveal effects and hover transitions
- **Modern Typography**: Inter font family

### 🔧 **Interactive Components**
- **Hero Slider**: Auto-advancing carousel with manual controls
- **Mobile Navigation**: Responsive hamburger menu
- **Property Cards**: Hover effects and detailed information
- **Testimonial Slider**: Manual navigation between client reviews
- **Contact Form**: Controlled inputs with React state management
- **Scroll Animations**: Elements reveal on scroll using Intersection Observer

### 🏠 **Real Estate Content**
- **Property Listings**: Luxury villa, apartments, and plots
- **Location Focus**: Bangalore-specific areas (Whitefield, Indiranagar, Electronic City)
- **Financial Services**: DSA services and loan offerings
- **Partner Banks**: HDFC, ICICI, SBI, Axis, Bajaj Finserv

## 🖼️ **Images Updated**

All placeholder images have been replaced with high-quality, relevant images:

### Hero Section
- **Slide 1**: Modern residential building exterior
- **Slide 2**: Professional business meeting/consultation
- **Slide 3**: Bangalore city skyline with modern buildings

### Property Listings
- **Villa**: Luxury modern villa with landscaping
- **Apartment**: Contemporary apartment interior
- **Plot**: Residential development/gated community

### About Section
- **Team Image**: Professional business team meeting

### Testimonials
- **Client Photos**: Professional headshots for testimonials

## 🎯 **Key Improvements Over Original**

1. **Component Architecture**: Modular, reusable React components
2. **State Management**: Modern React hooks (useState, useEffect)
3. **Performance**: Vite build tool for fast development and optimized builds
4. **Maintainability**: Clean code structure and separation of concerns
5. **Scalability**: Easy to add new features and components
6. **Developer Experience**: Hot reload, TypeScript support ready

## 🛠️ **Technologies Used**

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 📱 **Responsive Breakpoints**

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 **Brand Colors**

```css
--brand-navy: #1A2E44    /* Primary dark blue */
--brand-gold: #C89B3F    /* Accent gold */
--brand-beige: #F5F0E8   /* Background beige */
--brand-text: #333333    /* Text color */
--brand-red: #803D3B     /* Header accent */
```

## 🚀 **Deployment**

The built application can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `dist` folder
- **GitHub Pages**: Upload `dist` contents
- **AWS S3**: Static website hosting

## 📞 **Contact Information**

Update the contact details in `src/components/Contact.jsx`:
- Address: 123, MG Road, Bangalore, India
- Phone: +91 98765 43210
- Email: guruhithaproperties@gmail.com

## 🔧 **Customization**

### Adding New Properties
Edit the `properties` array in `src/components/FeaturedProperties.jsx`

### Updating Services
Modify the `services` array in `src/components/Services.jsx`

### Changing Colors
Update `tailwind.config.js` with new brand colors

### Adding New Sections
Create new components in `src/components/` and import them in `App.jsx`

---

**Built with ❤️ for Guruhitha Properties and Finance**
