const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sample recipes data
const sampleRecipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    cuisine: "Italian",
    difficulty: "Medium",
    time: "30 mins",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
    ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan", "Black Pepper"],
    instructions: [
      "Cook spaghetti according to package directions",
      "Fry bacon until crispy",
      "Mix eggs and parmesan",
      "Combine hot pasta with egg mixture",
      "Add bacon and pepper"
    ],
    nutrition: { calories: 450, protein: 25, carbs: 55, fat: 15 }
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    cuisine: "Indian",
    difficulty: "Medium",
    time: "45 mins",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
    ingredients: ["Chicken", "Yogurt", "Tomatoes", "Cream", "Spices"],
    instructions: [
      "Marinate chicken in yogurt and spices",
      "Grill chicken pieces",
      "Make tomato-cream sauce",
      "Simmer chicken in sauce",
      "Serve with rice or naan"
    ],
    nutrition: { calories: 520, protein: 35, carbs: 25, fat: 28 }
  },
  {
    id: 3,
    name: "Caesar Salad",
    cuisine: "American",
    difficulty: "Easy",
    time: "15 mins",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400",
    ingredients: ["Romaine Lettuce", "Croutons", "Parmesan", "Caesar Dressing"],
    instructions: [
      "Wash and chop lettuce",
      "Make or prepare dressing",
      "Toss lettuce with dressing",
      "Add croutons and parmesan",
      "Serve immediately"
    ],
    nutrition: { calories: 280, protein: 8, carbs: 18, fat: 20 }
  }
];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Food Recipe API', version: '1.0.0' });
});

app.get('/api/recipes', (req, res) => {
  const { search, cuisine } = req.query;
  let filtered = sampleRecipes;
  
  if (search) {
    filtered = filtered.filter(r => 
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.ingredients.some(i => i.toLowerCase().includes(search.toLowerCase()))
    );
  }
  
  if (cuisine) {
    filtered = filtered.filter(r => 
      r.cuisine.toLowerCase() === cuisine.toLowerCase()
    );
  }
  
  res.json({ recipes: filtered, count: filtered.length });
});

app.get('/api/recipes/:id', (req, res) => {
  const recipe = sampleRecipes.find(r => r.id === parseInt(req.params.id));
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ error: 'Recipe not found' });
  }
});

app.get('/api/cuisines', (req, res) => {
  const cuisines = [...new Set(sampleRecipes.map(r => r.cuisine))];
  res.json({ cuisines });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
