@echo off
REM Deploy script for GitHub Pages - Windows Version
REM Sarweshwar (Sarweshero) Portfolio

echo 🚀 Starting deployment to GitHub Pages...

REM Build the project
echo 📦 Building React project...
call npm run build

REM Check if build was successful
if %errorlevel% equ 0 (
    echo ✅ Build successful!
    
    REM Deploy to gh-pages branch
    echo 🚀 Deploying to GitHub Pages...
    call npx gh-pages -d build
    
    if %errorlevel% equ 0 (
        echo 🎉 Deployment successful!
        echo 🌐 Your portfolio is now live at: https://sarweshero.github.io/portfolio-react
    ) else (
        echo ❌ Deployment failed!
        exit /b 1
    )
) else (
    echo ❌ Build failed!
    exit /b 1
)

pause
