# 🚀 Deploy Your App NOW - 3 Minutes!

## Fastest Way to Get a Live Web Link

### Step 1: Deploy Backend (2 minutes)

#### Option A: Render (Recommended)
1. Click this link: https://render.com/deploy
2. Sign in with GitHub
3. Click "New +" → "Web Service"
4. Select repository: `food-recipe-mobile-app`
5. Settings:
   - Name: `food-recipe-backend`
   - Root Directory: `backend`
   - Build: `npm install`
   - Start: `npm start`
6. Click **Create Web Service**
7. ✅ **Copy your URL** (e.g., `https://food-recipe-backend.onrender.com`)

#### Option B: Railway (Alternative)
1. Go to: https://railway.app
2. Click "Start a New Project"
3. Select "Deploy from GitHub repo"
4. Choose `food-recipe-mobile-app`
5. Select `backend` folder
6. ✅ **Copy your URL**

---

### Step 2: Test Your Backend (30 seconds)

Open in browser:
```
https://your-backend-url.com/api/recipes
```

You should see JSON with recipes! 🎉

---

### Step 3: Use Your App (Multiple Options)

#### Option 1: Test with Expo Go (Instant)
```bash
git clone https://github.com/ankushjha3210-lab/food-recipe-mobile-app.git
cd food-recipe-mobile-app/mobile

# Update API URL in src/services/api.js
# Change: const API_BASE_URL = 'http://localhost:3000/api';
# To: const API_BASE_URL = 'https://your-backend-url.com/api';

npm install
npx expo start
```

Scan QR code with Expo Go app!

#### Option 2: Deploy Web Version
```bash
cd mobile
npx expo export:web
```

Then deploy `web-build` folder to:
- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Push to gh-pages branch

---

## 🎯 Your Live Links

After deployment, you'll have:

**Backend API:**
```
https://food-recipe-backend.onrender.com/api/recipes
```

**Test it:**
```bash
curl https://your-backend-url.com/health
```

---

## 🔗 One-Click Deploy Buttons

### Deploy Backend to Render
1. Click: https://render.com
2. Import your GitHub repo
3. Done in 2 minutes!

### Deploy to Vercel
1. Click: https://vercel.com/new
2. Import repository
3. Select `backend` folder
4. Deploy!

### Deploy to Railway
1. Click: https://railway.app/new
2. Deploy from GitHub
3. Select repository
4. Done!

---

## ✅ Quick Checklist

- [ ] Backend deployed (Render/Railway/Vercel)
- [ ] Backend URL copied
- [ ] API tested (visit /api/recipes)
- [ ] Mobile app updated with API URL
- [ ] App tested with Expo Go OR
- [ ] Web version deployed

---

## 🎉 You're Live!

**Share your API:**
```
https://your-backend.onrender.com/api/recipes
```

**Test endpoints:**
- Health: `/health`
- All recipes: `/api/recipes`
- Search: `/api/recipes?search=pasta`
- Filter: `/api/recipes?cuisine=Italian`
- Single recipe: `/api/recipes/1`
- Cuisines: `/api/cuisines`

---

## 📱 Next Steps

1. **Build APK** (see BUILD_APK.md)
2. **Deploy Web App** (see WEB_DEPLOYMENT.md)
3. **Add Features** (see FEATURES.md)
4. **Customize** (edit recipes in backend/routes/recipes.js)

---

## 🆘 Need Help?

**Backend not deploying?**
- Check Node.js version is 18+
- Verify package.json exists in backend folder
- Check deployment logs

**API not responding?**
- Wait 2-3 minutes for first deployment
- Check service is running
- Test /health endpoint first

**Can't connect from mobile?**
- Update API_BASE_URL in mobile/src/services/api.js
- Use HTTPS URL (not HTTP)
- Rebuild/restart Expo

---

**Your app is ready to go live! 🚀**

Total time: **3 minutes** ⏱️
