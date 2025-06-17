# CleanMax Pro Deployment Guide

## Quick Deployment Options

### Option 1: Netlify Drop (Easiest)

1. Go to: https://app.netlify.com/drop
2. Upload these files from your project:
   - dist/index.html
   - dist/assets/ folder (entire folder)
   - dist/favicon.ico
   - dist/robots.txt

### Option 2: Platform Deployment

Check if your development platform has:

- "Deploy" button
- "Publish" option
- "Export to hosting" feature

### Option 3: Download Alternative

If you can't find dist folder in downloads:

1. Copy the source code to a local development environment
2. Run: npm install
3. Run: npm run build
4. Upload the generated dist folder to any hosting service

## Required Files for Manual Upload

These are the essential files your website needs:

- index.html (main page)
- All files in assets/ folder (CSS, JS, images)
- favicon.ico (website icon)

## Live Website Features

Your deployed site will have:
✅ Professional landing page
✅ Working order form with EmailJS
✅ Product showcase with real images
✅ YouTube video integration
✅ Mobile responsive design
✅ Thank you page with routing

## Support

If you need help with deployment, provide:

- What development platform you're using
- Whether you can see a "Deploy" or "Publish" button
- If you can export/download individual files
