# 🍳 Food Recipe Mobile App

A beautiful, modern mobile application for discovering and managing food recipes. Built with React Native and Node.js.

![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android-blue)
![React Native](https://img.shields.io/badge/React%20Native-0.73-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933)
![License](https://img.shields.io/badge/License-MIT-green)

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

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo Go app (for mobile testing)

### 1. Clone Repository
```bash
git clone https://github.com/ankushjha3210-lab/food-recipe-mobile-app.git
cd food-recipe-mobile-app
```

### 2. Start Backend
```bash
cd backend
npm install
npm start
```

### 3. Start Mobile App
```bash
cd mobile
npm install
npx expo start
```

### 4. Test on Device
- Install Expo Go on your phone
- Scan QR code from terminal
- App loads instantly!

📖 **Detailed Guide**: See [QUICK_START.md](QUICK_START.md)

## 📱 Build APK

```bash
cd mobile
npm install -g eas-cli
eas login
eas build -p android --profile preview
```

Download APK in 5-10 minutes!

📖 **Full Instructions**: See [BUILD_APK.md](BUILD_APK.md)

## 🌐 Deploy Backend

### Render (Recommended)
1. Go to [render.com](https://render.com)
2. New Web Service → Connect GitHub
3. Root Directory: `backend`
4. Deploy!

### Railway / Vercel
Similar process - see [DEPLOYMENT.md](DEPLOYMENT.md)

## 📂 Project Structure

```
food-recipe-mobile-app/
├── mobile/                    # React Native app
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── RecipeCard.js
│   │   │   └── RecipeDetail.js
│   │   ├── screens/          # App screens
│   │   │   └── HomeScreen.js
│   │   └── services/         # API services
│   │       └── api.js
│   ├── App.js               # Main app component
│   ├── app.json             # Expo configuration
│   └── package.json
│
├── backend/                  # Node.js API
│   ├── routes/              # API routes
│   │   └── recipes.js
│   ├── models/              # Data models
│   │   └── Recipe.js
│   ├── server.js            # Express server
│   ├── Dockerfile           # Docker config
│   └── package.json
│
├── README.md                # This file
├── QUICK_START.md          # Quick start guide
├── DEPLOYMENT.md           # Deployment guide
├── BUILD_APK.md            # APK build guide
└── FEATURES.md             # Feature documentation
```

## 🎯 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information |
| GET | `/health` | Health check |
| GET | `/api/recipes` | Get all recipes |
| GET | `/api/recipes/:id` | Get single recipe |
| GET | `/api/cuisines` | Get all cuisines |

### Example Request
```bash
curl http://localhost:3000/api/recipes?search=pasta&cuisine=Italian
```

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

### DevOps
- Docker
- EAS Build
- GitHub Actions Ready

## 📸 Screenshots

### Home Screen
- Recipe cards with images
- Search bar
- Cuisine filter chips

### Recipe Detail
- Full-screen image
- Ingredients list
- Step-by-step instructions
- Nutrition information

## 🔒 Environment Variables

### Backend (.env)
```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/food-recipes
```

### Mobile (src/services/api.js)
```javascript
const API_BASE_URL = 'http://localhost:3000/api';
```

## 🧪 Testing

### Test Backend
```bash
cd backend
npm start
curl http://localhost:3000/health
```

### Test Mobile
```bash
cd mobile
npx expo start
# Scan QR code with Expo Go
```

## 📦 Sample Data

Includes 6 diverse recipes:
- Spaghetti Carbonara (Italian)
- Chicken Tikka Masala (Indian)
- Caesar Salad (American)
- Pad Thai (Thai)
- Beef Tacos (Mexican)
- Greek Salad (Greek)

## 🚀 Deployment Options

- **Railway** - Automatic deployment
- **Render** - Free tier available
- **Vercel** - Serverless functions
- **Heroku** - Classic PaaS
- **DigitalOcean** - VPS hosting

## 📱 Distribution

### Android
- Direct APK installation
- Google Play Store
- Firebase App Distribution

### iOS
- TestFlight
- App Store
- Enterprise distribution

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## 📄 License

MIT License - see LICENSE file

## 👨‍💻 Author

**Ankush Kumar**
- GitHub: [@ankushjha3210-lab](https://github.com/ankushjha3210-lab)

## 🙏 Acknowledgments

- Unsplash for recipe images
- Expo team for amazing tools
- React Native community

## 📞 Support

- 📖 Documentation: Check all .md files
- 🐛 Issues: GitHub Issues
- 💬 Discussions: GitHub Discussions

## 🗺️ Roadmap

### v1.0 (Current) ✅
- Recipe browsing
- Search & filter
- Recipe details
- Nutrition info

### v2.0 (Planned)
- User authentication
- Save favorites to cloud
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
