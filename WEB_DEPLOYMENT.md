# 🌐 Web Deployment Guide

Get your Food Recipe App live on the web in minutes!

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Fastest)

#### Deploy Backend API

1. **Go to [Vercel](https://vercel.com)**
2. Click "Add New" → "Project"
3. Import `ankushjha3210-lab/food-recipe-mobile-app`
4. Configure:
   - Framework Preset: **Other**
   - Root Directory: **backend**
   - Build Command: `npm install`
   - Output Directory: (leave empty)
5. Click **Deploy**
6. Copy your API URL (e.g., `https://food-recipe-app.vercel.app`)

**Your backend API will be live at:**
```
https://your-project.vercel.app/api/recipes
```

#### Deploy Mobile as Web App

1. In Vercel, create another project
2. Import same repository
3. Configure:
   - Framework Preset: **Expo**
   - Root Directory: **mobile**
   - Build Command: `npx expo export:web`
   - Output Directory: `web-build`
4. Before deploying, update `mobile/src/services/api.js`:
   ```javascript
   const API_BASE_URL = 'https://your-backend.vercel.app/api';
   ```
5. Click **Deploy**

**Your web app will be live at:**
```
https://food-recipe-mobile.vercel.app
```

---

### Option 2: Render (Free Tier)

#### Deploy Backend

1. **Go to [Render](https://render.com)**
2. Click "New +" → "Web Service"
3. Connect GitHub: `ankushjha3210-lab/food-recipe-mobile-app`
4. Configure:
   - Name: `food-recipe-backend`
   - Root Directory: `backend`
   - Environment: **Node**
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: **Free**
5. Click **Create Web Service**
6. Wait 2-3 minutes for deployment
7. Copy your URL (e.g., `https://food-recipe-backend.onrender.com`)

**Your API will be live at:**
```
https://food-recipe-backend.onrender.com/api/recipes
```

---

### Option 3: Railway

1. **Go to [Railway](https://railway.app)**
2. Click "New Project" → "Deploy from GitHub repo"
3. Select `food-recipe-mobile-app`
4. Choose `backend` directory
5. Railway auto-detects Node.js and deploys
6. Copy generated URL

---

### Option 4: Netlify

1. **Go to [Netlify](https://netlify.com)**
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub repository
4. Configure:
   - Base directory: `backend`
   - Build command: `npm install`
   - Publish directory: (leave empty)
5. Deploy!

---

## 📱 Web App (Expo Web)

### Build Web Version Locally

```bash
cd mobile
npm install
npx expo export:web
```

This creates a `web-build` folder you can deploy anywhere!

### Deploy Web Build

**Vercel:**
```bash
cd mobile
npx expo export:web
cd web-build
vercel
```

**Netlify:**
```bash
cd mobile
npx expo export:web
netlify deploy --dir=web-build --prod
```

**GitHub Pages:**
```bash
cd mobile
npx expo export:web
# Push web-build folder to gh-pages branch
```

---

## 🔗 Quick Links After Deployment

Once deployed, you'll have:

**Backend API:**
- Health Check: `https://your-backend.com/health`
- All Recipes: `https://your-backend.com/api/recipes`
- Single Recipe: `https://your-backend.com/api/recipes/1`
- Cuisines: `https://your-backend.com/api/cuisines`

**Web App:**
- Home: `https://your-app.com`
- Browse recipes
- Search functionality
- Full mobile experience in browser

---

## ⚙️ Update API URL

After deploying backend, update the mobile app:

**File:** `mobile/src/services/api.js`

```javascript
// Change this line:
const API_BASE_URL = 'http://localhost:3000/api';

// To your deployed URL:
const API_BASE_URL = 'https://your-backend.vercel.app/api';
```

Then redeploy the mobile/web app.

---

## 🧪 Test Your Deployment

```bash
# Test backend
curl https://your-backend.com/api/recipes

# Test health
curl https://your-backend.com/health
```

---

## 🎯 Recommended Setup

**Best Practice:**
1. Deploy backend to **Render** (free, always on)
2. Deploy web app to **Vercel** (fast, CDN)
3. Update API URL in web app
4. Done! 🎉

**URLs you'll get:**
- Backend: `https://food-recipe-backend.onrender.com`
- Web App: `https://food-recipe-app.vercel.app`

---

## 🔥 One-Click Deploy

### Deploy Backend to Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ankushjha3210-lab/food-recipe-mobile-app)

---

## 📊 Deployment Comparison

| Platform | Speed | Free Tier | Always On | Best For |
|----------|-------|-----------|-----------|----------|
| Vercel | ⚡⚡⚡ | Yes | Yes | Frontend + API |
| Render | ⚡⚡ | Yes | Sleeps after 15min | Backend API |
| Railway | ⚡⚡⚡ | Limited | Yes | Full Stack |
| Netlify | ⚡⚡⚡ | Yes | Yes | Static Sites |

---

## 🆘 Troubleshooting

**API not connecting?**
- Check CORS is enabled in backend
- Verify API URL in mobile app
- Check backend logs

**Build failing?**
- Ensure Node.js 18+ specified
- Check all dependencies installed
- Review build logs

**App not loading?**
- Clear browser cache
- Check console for errors
- Verify API is responding

---

## 🎉 Success!

Once deployed, share your app:
- 🔗 Backend API: `https://your-backend.com`
- 🌐 Web App: `https://your-app.com`
- 📱 Mobile: Use Expo Go or build APK

**Your food recipe app is now live! 🚀**
