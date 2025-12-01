# Food Recipe Mobile App

A modern mobile application for discovering and managing food recipes.

## Features

- 🔍 Search recipes by name, ingredients, or cuisine
- 📱 Beautiful mobile-first UI
- 🍳 Detailed cooking instructions
- 🛒 Shopping list generation
- ⭐ Save favorite recipes
- 📊 Nutritional information
- ⏲️ Cooking timers

## Tech Stack

### Mobile App
- React Native
- Expo
- React Navigation
- Axios for API calls

### Backend
- Node.js + Express
- MongoDB
- Recipe API integration

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository
```bash
git clone https://github.com/ankushjha3210-lab/food-recipe-mobile-app.git
cd food-recipe-mobile-app
```

2. Install mobile app dependencies
```bash
cd mobile
npm install
```

3. Install backend dependencies
```bash
cd ../backend
npm install
```

4. Set up environment variables
```bash
cp .env.example .env
# Add your API keys
```

5. Start the backend
```bash
cd backend
npm start
```

6. Start the mobile app
```bash
cd mobile
npx expo start
```

## Project Structure

```
food-recipe-mobile-app/
├── mobile/          # React Native mobile app
├── backend/         # Node.js API server
└── README.md
```

## License

MIT
