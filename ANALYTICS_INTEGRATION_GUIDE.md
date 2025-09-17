# Google Analytics Integration Guide

## How to Add Tracking to Your Components

### 1. Import Analytics Functions
Add this to the top of your component files:
```jsx
import { 
  trackPropertyView, 
  trackPropertyClick, 
  trackContactClick,
  trackHeroBannerClick,
  trackSearch 
} from '../utils/analytics'
```

### 2. Property Component Tracking Examples

#### In FeaturedProperties.jsx:
```jsx
// When a property card is displayed
useEffect(() => {
  properties.forEach(property => {
    trackPropertyView(
      property._id, 
      property.title, 
      property.price, 
      property.location
    )
  })
}, [properties])

// When a property is clicked
const handlePropertyClick = (property) => {
  trackPropertyClick(
    property._id, 
    property.title, 
    property.price, 
    property.location
  )
  // Your existing click logic
}

// When contact button is clicked
const handleContactClick = (property) => {
  trackContactClick(property._id, property.title, 'phone')
  // Your existing contact logic
}
```

#### In Hero.jsx:
```jsx
// When hero banner button is clicked
const handleHeroButtonClick = (banner) => {
  trackHeroBannerClick(banner.title, banner.buttonText, banner.buttonLink)
  // Your existing button logic
}
```

### 3. Search Tracking
If you have search functionality:
```jsx
const handleSearch = (searchTerm, category) => {
  trackSearch(searchTerm, category)
  // Your existing search logic
}
```

### 4. What Gets Tracked Automatically

Once you replace 'G-XXXXXXXXXX' with your real Google Analytics ID, you'll track:

- **Page Views**: Automatic
- **Property Views**: When properties are displayed
- **Property Clicks**: When users click on properties
- **Contact Clicks**: When users click contact buttons
- **Hero Banner Clicks**: When users click hero buttons
- **Search Queries**: When users search
- **Review Interactions**: When users interact with reviews

### 5. Viewing Analytics Data

In Google Analytics, you'll see:
- **Real-time users** on your site
- **Most viewed properties** (by title, location, price range)
- **Popular contact methods** (phone vs email)
- **User journey** through your site
- **Geographic data** of your visitors
- **Device/browser information**
- **Traffic sources** (Google, direct, social media, etc.)

### 6. Custom Events You Can Track

The analytics utility provides these tracking functions:
- `trackPropertyView()` - When property is viewed
- `trackPropertyClick()` - When property is clicked
- `trackContactClick()` - When contact button is clicked
- `trackHeroBannerClick()` - When hero banner is clicked
- `trackSearch()` - When search is performed
- `trackReviewInteraction()` - When reviews are interacted with

### 7. Setting Up Goals in Google Analytics

1. Go to Google Analytics
2. Navigate to Admin > Goals
3. Create goals for:
   - Contact button clicks
   - Property page views
   - Time spent on site
   - Specific property inquiries
