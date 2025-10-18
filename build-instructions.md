# Production Build Instructions for FTP Upload

## Prerequisites
Make sure you have Node.js installed on your system.

## Step-by-Step Build Process

### 1. Install Dependencies
First, install all project dependencies:
```bash
npm install
```

### 2. Build for Production
Create the production build:
```bash
npm run build
```

This command will:
- Compile and optimize all React components
- Bundle JavaScript and CSS files
- Optimize images and assets
- Generate a `dist` folder with production-ready files

### 3. Preview the Build (Optional)
Test the production build locally before uploading:
```bash
npm run preview
```

## What Gets Generated

After running `npm run build`, you'll find a `dist` folder containing:
- `index.html` - Main HTML file
- `assets/` folder with optimized CSS and JS files
- All images and other static assets

## FTP Upload Instructions

### Files to Upload
Upload **ONLY** the contents of the `dist` folder to your web server:

```
dist/
├── index.html          ← Upload this to your domain root
├── assets/             ← Upload this entire folder
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
└── vite.svg           ← Upload any other files in dist/
```

### Important Notes

1. **Upload Location**: Upload the contents of `dist/` to your website's public folder (usually `public_html/`, `www/`, or similar)

2. **File Structure**: Maintain the exact folder structure from the `dist` folder

3. **Don't Upload Source Files**: Never upload:
   - `src/` folder
   - `node_modules/` folder
   - `package.json`
   - Any TypeScript files
   - Development configuration files

### Server Requirements

Your web server needs:
- Static file serving capability
- Support for Single Page Applications (SPA)
- Proper MIME types for CSS and JS files

### SPA Configuration

Since this is a React SPA with routing, configure your server to:
- Serve `index.html` for all routes that don't match static files
- This ensures React Router works correctly

## Verification Steps

After uploading:
1. Visit your website URL
2. Test navigation between pages
3. Check that all images load correctly
4. Verify contact form functionality
5. Test responsive design on mobile devices

## Troubleshooting

If something doesn't work:
1. Check browser console for errors
2. Verify all files uploaded correctly
3. Ensure server supports SPA routing
4. Check file permissions on server