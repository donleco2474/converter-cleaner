# Tracking Pixels Setup Guide for CleanMax Pro

## Overview

Your CleanMax Pro website is now equipped with tracking provisions for:

- **Google Analytics 4 (GA4)** - Website traffic and user behavior
- **Google Ads Conversion Tracking** - Track sales from Google Ads
- **Facebook Pixel** - Track conversions and create audiences for Facebook/Instagram ads

## Quick Setup Instructions

### 1. Google Analytics 4 (GA4)

**Step 1: Create GA4 Property**

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create new account/property for "CleanMax Pro"
3. Copy your **Measurement ID** (format: G-XXXXXXXXXX)

**Step 2: Update Configuration**

1. Open `src/lib/tracking.ts`
2. Replace `"G-XXXXXXXXXX"` with your actual Measurement ID
3. Set `enabled: true` for Google Analytics

```typescript
googleAnalytics: {
  measurementId: "G-ABC123DEF4", // Your actual Measurement ID
  enabled: true, // Set to true
},
```

### 2. Google Ads Conversion Tracking

**Step 1: Set Up Conversion Action**

1. Go to [Google Ads](https://ads.google.com)
2. Tools & Settings → Conversions → + New Conversion
3. Choose "Website" → "Purchase"
4. Copy **Conversion ID** and **Conversion Label**

**Step 2: Update Configuration**

```typescript
googleAds: {
  conversionId: "AW-123456789", // Your conversion ID
  conversionLabel: "abc123def456", // Your conversion label
  enabled: true, // Set to true
},
```

### 3. Facebook Pixel

**Step 1: Create Facebook Pixel**

1. Go to [Facebook Business Manager](https://business.facebook.com/)
2. Events Manager → Connect Data Sources → Web → Facebook Pixel
3. Copy your **Pixel ID** (15-16 digit number)

**Step 2: Update Configuration**

```typescript
facebookPixel: {
  pixelId: "123456789012345", // Your pixel ID
  enabled: true, // Set to true
},
```

## What Gets Tracked

### Automatic Tracking

- **Page Views** - All page visits
- **Order Submissions** - Complete purchase tracking with value
- **Form Interactions** - Form starts and progress
- **Button Clicks** - CTA button clicks
- **Video Engagement** - YouTube video plays

### Conversion Events

- **Purchase** - When order form is submitted
- **Begin Checkout** - When order form is opened
- **Checkout Progress** - Package selection, payment method

## Testing Your Setup

### 1. Test Google Analytics

1. Enable GA4 in configuration
2. Visit your website
3. Check Real-time reports in Google Analytics

### 2. Test Facebook Pixel

1. Install [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/) Chrome extension
2. Visit your website
3. Check if pixel fires correctly

### 3. Test Conversions

1. Submit a test order
2. Check conversion reports in Google Ads (24-48 hour delay)
3. Check Facebook Events Manager for Purchase events

## Benefits of This Setup

### Marketing Optimization

✅ **Track ROI** from Google Ads and Facebook Ads  
✅ **Retarget visitors** who didn't purchase  
✅ **Create lookalike audiences** based on customers  
✅ **Optimize ad campaigns** based on conversion data

### Business Intelligence

✅ **Traffic sources** - Where customers come from  
✅ **User behavior** - How customers interact with your site  
✅ **Conversion rates** - Which pages convert best  
✅ **Customer journey** - Path from visitor to customer

## Privacy & Compliance

- Tracking is only enabled when you configure it
- All tracking follows platform best practices
- Consider adding privacy policy mentioning tracking
- GDPR compliance may require cookie consent (consult legal advice)

## Support

If you need help setting up tracking:

1. Contact Google Analytics/Ads support for technical setup
2. Facebook Business Support for Pixel issues
3. Test thoroughly before running paid campaigns

## Advanced Features Available

- Custom event tracking for specific user actions
- Enhanced ecommerce tracking for detailed purchase analysis
- Cross-domain tracking if you expand to multiple sites
- Server-side tracking for improved data accuracy

Your CleanMax Pro website is now ready for professional digital marketing with comprehensive conversion tracking!
