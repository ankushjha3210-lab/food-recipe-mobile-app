# 🚀 Quick Start Guide

Get your Food Recipe App running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- Smartphone with Expo Go app (for testing)

## Option 1: Test Locally (Fastest)

### Step 1: Clone Repository
```bash
git clone https://github.com/ankushjha3210-lab/food-recipe-mobile-app.git
cd food-recipe-mobile-app
```

### Step 2: Start Backend
```bash
cd backend
npm install
npm start
```
Backend runs on `http://localhost:3000`

### Step 3: Start Mobile App (New Terminal)
```bash
cd mobile
npm install
npx expo start
```

### Step 4: Test on Phone
1. Install **Expo Go** app on your phone
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
2. Scan QR code from terminal
3. App loads on your phone! 🎉

## Option 2: Build APK (Production)

### Quick APK Build
```bash
cd mobile
npm install -g eas-cli
eas login
eas build -p android --profile preview
```

Wait 5-10 minutes, download APK from link provided!

## Option 3: Deploy Backend First

### Deploy to Render (Free)
1. Go to [render.com](https://render.com)
2. New Web Service → Connect GitHub
3. Select `food-recipe-mobile-app`
4. Root Directory: `backend`
5. Build: `npm install`
6. Start: `npm start`
7. Deploy!

### Update Mobile App
Edit `mobile/src/services/api.js`:
```javascript
const API_BASE_URL = 'https://your-render-url.com/api';
```

## Testing the App

### Test Backend API
```bash
curl http://localhost:3000/api/recipes
```

### Test Mobile Features
- ✅ Browse recipes
- ✅ Search by name/ingredient
- ✅ Filter by cuisine
- ✅ View recipe details
- ✅ Check nutrition info
- ✅ Add to favorites

## Troubleshooting

### Backend won't start?
```bash
cd backend
rm -rf node_modules
npm install
npm start
```

### Mobile app won't load?
```bash
cd mobile
npx expo start -c  # Clear cache
```

### Can't scan QR code?
- Make sure phone and computer are on same WiFi
- Try `npx expo start --tunnel`

### API not connecting?
- Check backend is running
- Update API_BASE_URL in `mobile/src/services/api.js`
- For local testing, use your computer's IP address

## Next Steps

1. ✅ **Customize Recipes** - Edit `backend/routes/recipes.js`
2. ✅ **Change Colors** - Update styles in mobile components
3. ✅ **Add Features** - Check `FEATURES.md` for ideas
4. ✅ **Deploy** - Follow `DEPLOYMENT.md`
5. ✅ **Build APK** - Follow `BUILD_APK.md`

## Need Help?

- 📖 Read `README.md` for detailed info
- 🚀 Check `DEPLOYMENT.md` for deployment
- 📱 See `BUILD_APK.md` for APK building
- 🎯 View `FEATURES.md` for feature list

## Quick Commands Reference

```bash
# Backend
cd backend && npm start

# Mobile (development)
cd mobile && npx expo start

# Mobile (clear cache)
cd mobile && npx expo start -c

# Build APK
cd mobile && eas build -p android --profile preview

# Test API
curl http://localhost:3000/api/recipes
```

---

**You're all set! 🎉**

Start building amazing recipe experiences!
