#!/bin/bash

echo "🍳 Food Recipe App - APK Builder"
echo "================================"
echo ""

# Check if EAS CLI is installed
if ! command -v eas &> /dev/null
then
    echo "📦 Installing EAS CLI..."
    npm install -g eas-cli
fi

# Check if logged in
echo "🔐 Checking Expo authentication..."
eas whoami || eas login

# Build APK
echo "🔨 Building APK..."
echo "This will take 5-10 minutes..."
echo ""

eas build -p android --profile preview --non-interactive

echo ""
echo "✅ Build complete!"
echo "📱 Download your APK from the link above"
echo "Or visit: https://expo.dev"
