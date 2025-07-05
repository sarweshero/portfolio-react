#!/bin/bash

# Deploy script for GitHub Pages
# Sarweshwar (Sarweshero) Portfolio

echo "🚀 Starting deployment to GitHub Pages..."

# Build the project
echo "📦 Building React project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to gh-pages branch
    echo "🚀 Deploying to GitHub Pages..."
    npx gh-pages -d build
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "🌐 Your portfolio is now live at: https://sarweshero.github.io/portfolio-react"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
