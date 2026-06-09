#!/bin/bash

# MLO Maker Setup Script
# Just run: bash setup.sh

echo "🚀 MLO Maker - Setting up your environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "📥 Download from: https://nodejs.org/ (LTS version)"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo "✅ NPM found: $(npm --version)"

# Install dependencies
echo "📦 Installing dependencies (this may take 2-3 minutes)..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! You can now:"
    echo "   npm run dev      - Start development server"
    echo "   npm run build    - Build for production"
    echo ""
    echo "👉 Run: npm run dev"
else
    echo "❌ Installation failed. Check npm errors above."
    exit 1
fi
