# 🖼️ Hero Image Upload Guide

## **Recommended Image Sizes**

### **For Best Results:**
- **Dimensions**: 800px × 600px (4:3 aspect ratio)
- **Format**: PNG or JPG
- **File Size**: Under 500KB for fast loading
- **Quality**: High resolution, clear and professional

### **Alternative Sizes That Work Well:**
- **Square**: 600px × 600px
- **Portrait**: 600px × 800px  
- **Landscape**: 1000px × 600px

## **Image Guidelines**

### **✅ What Works Best:**
- **Professional photos** of people, certificates, or products
- **Clear, high-contrast images** that stand out
- **Images with subjects on the left side** (works better with text on right)
- **Bright, well-lit photos**
- **Simple backgrounds** that don't compete with text

### **❌ Avoid:**
- Very wide images (they may appear small)
- Very tall images (they may get cut off)
- Dark or low-contrast images
- Busy backgrounds that make text hard to read
- Images with important details on the right side (may be hidden behind text on mobile)

## **How the Hero Section Works**

### **Desktop View:**
- Image appears on the **left side** (50% width)
- Content appears on the **right side** (50% width)
- Image uses `object-contain` so **full image is always visible**
- Minimum height of 400px

### **Mobile View:**
- Image appears **on top** (full width, 256px height)
- Content appears **below** (full width)
- Full image is always visible with proper scaling

## **Upload Process**

1. **Go to your Sanity CMS** at `http://localhost:3333`
2. **Click "🏠 Hero Banners"**
3. **Add/Edit a banner**
4. **Upload your image** in the "Background Image" field
5. **Fill in title, subtitle, and button text**
6. **Set display order** and make sure "Show this Banner" is enabled
7. **Publish** your changes

## **Testing Your Images**

After uploading, check:
- ✅ **Desktop**: Image and text side-by-side, both clearly visible
- ✅ **Mobile**: Image on top, content below, everything readable
- ✅ **Image Quality**: Sharp and professional looking
- ✅ **Loading Speed**: Page loads quickly

## **Pro Tips**

### **For Multiple Hero Banners:**
- Use consistent image sizes across all banners
- Keep the same aspect ratio for smooth transitions
- Test each banner on both desktop and mobile

### **Image Optimization:**
- Compress images before uploading (use tools like TinyPNG)
- Use JPG for photos, PNG for graphics with transparency
- Aim for under 500KB file size

### **Content Considerations:**
- Keep titles under 100 characters
- Keep subtitles under 200 characters
- Use action-oriented button text ("Explore Properties", "Get Started", etc.)

---

**Need help?** The hero section automatically handles any image size you upload, but following these guidelines will give you the best visual results!
