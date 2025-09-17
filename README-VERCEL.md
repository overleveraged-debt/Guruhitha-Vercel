# 🏠 Guruhitha Properties - Vercel Production Site

A modern, high-performance real estate website built with React, Vite, and Sanity CMS for Guruhitha Properties and Fintech.

## 🚀 Live Site
**Production URL**: [Your Vercel URL will appear here after deployment]

## ✨ Features

- **⚡ Lightning Fast**: Vite-powered with optimized builds and code splitting
- **📱 Fully Responsive**: Mobile-first design with Tailwind CSS
- **🎯 SEO Optimized**: Meta tags, structured data, and Open Graph support
- **📊 Analytics Ready**: Google Analytics 4 integration with detailed tracking
- **🏢 Property Management**: Dynamic property listings with Sanity CMS
- **🎨 Modern UI**: Clean, professional design with smooth animations
- **📞 Contact Integration**: Direct phone and WhatsApp integration
- **⭐ Customer Reviews**: Dynamic testimonials and ratings
- **🔄 Auto Deployment**: Continuous deployment from GitHub to Vercel

## 🛠 Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **CMS**: Sanity.io
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel
- **Icons**: Lucide React
- **Performance**: Optimized builds with caching and compression

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Development Setup
```bash
# Clone the repository
git clone https://github.com/overleveraged-debt/Guruhitha-Vercel.git
cd Guruhitha-Vercel

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📊 Google Analytics Setup

1. **Get your GA4 Measurement ID**:
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create account and property
   - Copy your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Update the configuration**:
   - Edit `src/utils/analytics.js`
   - Replace `G-XXXXXXXXXX` with your real ID
   - Commit and push - analytics will work automatically!

## 🔧 Available Scripts

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation
│   ├── Hero.jsx        # Hero banners
│   ├── FeaturedProperties.jsx # Property listings
│   ├── Services.jsx    # Services section
│   ├── Testimonials.jsx # Customer reviews
│   └── ...
├── utils/
│   └── analytics.js    # Google Analytics configuration
├── lib/
│   └── sanity.js       # Sanity CMS client
└── ...
```

## 🎯 Analytics Tracking

The site automatically tracks:
- **Page Views**: All page navigation
- **Property Interactions**: Views, clicks, contact attempts
- **User Engagement**: Time on site, scroll depth
- **Contact Events**: Phone calls, WhatsApp clicks
- **Search Queries**: Property searches and filters

## 🔄 Deployment

### Automatic Deployment
- Every push to `main` branch automatically deploys to Vercel
- No manual deployment needed
- Build status visible in GitHub commits

### Manual Deployment
```bash
# Build and deploy
npm run build
# Vercel handles the rest automatically
```

## 🌐 Custom Domain Setup

1. **In Vercel Dashboard**:
   - Go to Project Settings → Domains
   - Add your GoDaddy domain

2. **In GoDaddy DNS**:
   - Add A record: `@` → `76.76.19.61`
   - Add CNAME: `www` → `cname.vercel-dns.com`

## 🎨 Customization

### Brand Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  brand: {
    primary: '#your-color',
    secondary: '#your-color',
  }
}
```

### Content Management
All content is managed through Sanity CMS:
- Properties, hero banners, reviews
- Real-time updates without code changes
- Image optimization and CDN delivery

## 🔒 Environment Variables

Create `.env.local` for local development:
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_SANITY_PROJECT_ID=z72ywil9
VITE_SANITY_DATASET=production
```

## 📈 Performance Features

- **Code Splitting**: Automatic bundle optimization
- **Image Optimization**: WebP support with fallbacks
- **Caching**: Aggressive caching for static assets
- **CDN**: Global content delivery via Vercel Edge Network
- **Compression**: Gzip/Brotli compression enabled

## 🆘 Support

For issues or questions:
1. Check Vercel deployment logs
2. Verify Google Analytics configuration
3. Ensure Sanity CMS connectivity

## 📄 License

This project is proprietary to Guruhitha Properties and Fintech.

---

**🎉 Ready for Production!** This site is optimized for performance, SEO, and user experience.
