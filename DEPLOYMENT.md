# Deployment Guide

## Backend Deployment

### Option 1: Railway
1. Go to [Railway](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select `food-recipe-mobile-app` repository
4. Set root directory to `backend`
5. Railway will auto-detect Node.js and deploy
6. Copy the generated URL

### Option 2: Render
1. Go to [Render](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - Name: food-recipe-backend
   - Root Directory: backend
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Click "Create Web Service"
6. Copy the generated URL

### Option 3: Vercel
1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Configure:
   - Framework Preset: Other
   - Root Directory: backend
4. Deploy
5. Copy the generated URL

## Mobile App Configuration

After deploying the backend:

1. Open `mobile/App.js`
2. Replace `API_URL` with your deployed backend URL:
```javascript
const API_URL = 'https://your-backend-url.com/api';
```

## Running Locally

### Backend
```bash
cd backend
npm install
npm start
# Server runs on http://localhost:3000
```

### Mobile App
```bash
cd mobile
npm install
npx expo start
# Scan QR code with Expo Go app
```

## Testing the API

Test your deployed backend:
```bash
curl https://your-backend-url.com/api/recipes
```

## Mobile App Testing

1. Install Expo Go on your phone:
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)
   - Android: [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Run `npx expo start` in mobile directory
3. Scan QR code with Expo Go
4. App will load on your device

## Building for Production

### iOS
```bash
cd mobile
eas build --platform ios
```

### Android
```bash
cd mobile
eas build --platform android
```

Note: Requires Expo EAS account
