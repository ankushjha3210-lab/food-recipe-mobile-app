# 🍳 Food Recipe Mobile App

A beautiful, modern mobile application for discovering and managing food recipes. Built with React Native and Node.js.

![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android%20%7C%20Web-blue)
![React Native](https://img.shields.io/badge/React%20Native-0.73-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Quick Deploy (3 Minutes)

### Get Your App Live NOW!

**1. Deploy Backend:**
- [Deploy to Render](https://render.com) - Click "New Web Service" → Import GitHub repo
- [Deploy to Railway](https://railway.app) - Click "New Project" → Deploy from GitHub
- [Deploy to Vercel](https://vercel.com/new) - Import repository → Deploy

**2. Get Your Live API URL:**
```
https://your-backend.onrender.com/api/recipes
```

📖 **Full Guide**: See [DEPLOY_NOW.md](DEPLOY_NOW.md) for step-by-step instructions

---

## ✨ Features

### 📱 Mobile App
- **Recipe Browsing** - Beautiful card-based layout with images
- **Smart Search** - Find recipes by name or ingredients
- **Cuisine Filters** - Filter by Italian, Indian, American, Thai, Mexican, Greek
- **Recipe Details** - Full ingredients, instructions, and nutrition info
- **Favorites** - Save your favorite recipes
- **Pull to Refresh** - Get latest recipes instantly
- **Responsive Design** - Works perfectly on all screen sizes

### 🔧 Backend API
- **RESTful API** - Clean, well-documented endpoints
- **Search & Filter** - Advanced recipe search capabilities
- **Health Monitoring** - Built-in health check endpoint
- **CORS Enabled** - Ready for cross-origin requests
- **Error Handling** - Comprehensive error management
- **Logging** - Request/response logging

---

## 🌐 Web Deployment

### Deploy Backend (Choose One)

#### Render (Recommended - Free)
1. Go to [render.com](https://render.com)
2. New Web Service → Connect GitHub
3. Repository: `food-recipe-mobile-app`
4. Root Directory: `backend`
5. Build: `npm install` | Start: `npm start`
6. Deploy! ✅

#### Railway
1. Go to [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Select repository → Choose `backend` folder
4. Deploy! ✅

#### Vercel
1. Go to [vercel.com](https://vercel.com/new)
2. Import repository
3. Root Directory: `backend`
4. Deploy! ✅

📖 **Detailed Guide**: [WEB_DEPLOYMENT.md](WEB_DEPLOYMENT.md)

---

## 📱 Mobile App Options

### Option 1: Test with Expo Go (Instant)
```bash
git clone https://github.com/ankushjha3210-lab/food-recipe-mobile-app.git
cd food-recipe-mobile-app/mobile
npm install
npx expo start
```
Scan QR code with Expo Go app!

### Option 2: Build APK (Production)
```bash
cd mobile
npm install -g eas-cli
eas login
eas build -p android --profile preview
```
Get download link in 5-10 minutes!

📖 **Full Instructions**: [BUILD_APK.md](BUILD_APK.md)

### Option 3: Web Version
```bash
cd mobile
npx expo export:web
# Deploy web-build folder to Vercel/Netlify
```

---

## 🎯 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information |
| GET | `/health` | Health check |
| GET | `/api/recipes` | Get all recipes |
| GET | `/api/recipes/:id` | Get single recipe |
| GET | `/api/cuisines` | Get all cuisines |

### Example Requests
```bash
# Get all recipes
curl https://your-backend.com/api/recipes

# Search recipes
curl https://your-backend.com/api/recipes?search=pasta

# Filter by cuisine
curl https://your-backend.com/api/recipes?cuisine=Italian

# Get single recipe
curl https://your-backend.com/api/recipes/1
```

---

## 📂 Project Structure

```
food-recipe-mobile-app/
├── mobile/                    # React Native app
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── screens/          # App screens
│   │   └── services/         # API services
│   ├── App.js
│   └── package.json
│
├── backend/                  # Node.js API
│   ├── routes/              # API routes
│   ├── models/              # Data models
│   ├── server.js
│   └── package.json
│
├── README.md                # This file
├── DEPLOY_NOW.md           # Quick deploy guide
├── WEB_DEPLOYMENT.md       # Web deployment guide
├── BUILD_APK.md            # APK build guide
└── FEATURES.md             # Feature documentation
```

---

## 🛠️ Tech Stack

### Mobile
- React Native 0.73
- Expo SDK 50
- Axios
- React Hooks

### Backend
- Node.js 18+
- Express.js
- CORS
- Dotenv

### Deployment
- Render / Railway / Vercel
- Docker support
- EAS Build

---

## 📦 Sample Data

Includes 6 diverse recipes:
- 🍝 Spaghetti Carbonara (Italian)
- 🍛 Chicken Tikka Masala (Indian)
- 🥗 Caesar Salad (American)
- 🍜 Pad Thai (Thai)
- 🌮 Beef Tacos (Mexican)
- 🥙 Greek Salad (Greek)

---

## 🚀 Quick Start

### Local Development
```bash
# Clone repository
git clone https://github.com/ankushjha3210-lab/food-recipe-mobile-app.git
cd food-recipe-mobile-app

# Start backend
cd backend && npm install && npm start

# Start mobile (new terminal)
cd mobile && npm install && npx expo start
```

### Deploy to Production
```bash
# Deploy backend to Render/Railway/Vercel
# See DEPLOY_NOW.md for one-click deploy

# Build APK
cd mobile && eas build -p android --profile preview
```

---

## 📚 Documentation

- 📖 [Quick Start Guide](QUICK_START.md) - Get started in 5 minutes
- 🚀 [Deploy Now](DEPLOY_NOW.md) - Deploy in 3 minutes
- 🌐 [Web Deployment](WEB_DEPLOYMENT.md) - Detailed deployment guide
- 📱 [Build APK](BUILD_APK.md) - Create Android APK
- ✨ [Features](FEATURES.md) - Complete feature list

---

## 🎯 Live Demo

After deployment, your app will be available at:

**Backend API:**
```
https://your-backend.onrender.com/api/recipes
```

**Web App:**
```
https://your-app.vercel.app
```

**Mobile:**
- Download APK or use Expo Go

---

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

---

## 📄 License

MIT License - see LICENSE file

---

## 👨‍💻 Author

**Ankush Kumar**
- GitHub: [@ankushjha3210-lab](https://github.com/ankushjha3210-lab)
- Repository: [food-recipe-mobile-app](https://github.com/ankushjha3210-lab/food-recipe-mobile-app)

---

## 🗺️ Roadmap

### v1.0 (Current) ✅
- Recipe browsing
- Search & filter
- Recipe details
- Nutrition info
- Web deployment ready

### v2.0 (Planned)
- User authentication
- Cloud favorites
- Shopping lists
- Cooking timers

### v3.0 (Future)
- Video tutorials
- Social features
- Meal planning
- Offline mode

---

**Made with ❤️ using React Native and Node.js**

⭐ Star this repo if you find it helpful!

🚀 **[Deploy Now](DEPLOY_NOW.md)** | 📱 **[Build APK](BUILD_APK.md)** | 📖 **[Documentation](QUICK_START.md)**
