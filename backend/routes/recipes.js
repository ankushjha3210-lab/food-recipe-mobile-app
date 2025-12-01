const express = require('express');
const router = express.Router();

// Sample recipes data (can be replaced with database queries)
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
  },
  {
    id: 4,
    name: "Pad Thai",
    cuisine: "Thai",
    difficulty: "Medium",
    time: "35 mins",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400",
    ingredients: ["Rice Noodles", "Shrimp", "Eggs", "Peanuts", "Tamarind Sauce"],
    instructions: [
      "Soak rice noodles in warm water",
      "Stir-fry shrimp and eggs",
      "Add noodles and sauce",
      "Toss with bean sprouts",
      "Garnish with peanuts and lime"
    ],
    nutrition: { calories: 480, protein: 28, carbs: 62, fat: 18 }
  },
  {
    id: 5,
    name: "Beef Tacos",
    cuisine: "Mexican",
    difficulty: "Easy",
    time: "25 mins",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400",
    ingredients: ["Ground Beef", "Taco Shells", "Lettuce", "Cheese", "Salsa"],
    instructions: [
      "Brown ground beef with spices",
      "Warm taco shells",
      "Fill shells with beef",
      "Top with lettuce, cheese, salsa",
      "Serve with lime wedges"
    ],
    nutrition: { calories: 380, protein: 22, carbs: 35, fat: 18 }
  },
  {
    id: 6,
    name: "Greek Salad",
    cuisine: "Greek",
    difficulty: "Easy",
    time: "10 mins",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400",
    ingredients: ["Tomatoes", "Cucumber", "Feta", "Olives", "Olive Oil"],
    instructions: [
      "Chop vegetables into chunks",
      "Add olives and feta",
      "Drizzle with olive oil",
      "Season with oregano",
      "Toss gently and serve"
    ],
    nutrition: { calories: 220, protein: 6, carbs: 12, fat: 18 }
  }
];

// Get all recipes with filters
router.get('/', (req, res) => {
  const { search, cuisine } = req.query;
  let filtered = sampleRecipes;
  
  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(r => 
      r.name.toLowerCase().includes(searchLower) ||
      r.ingredients.some(i => i.toLowerCase().includes(searchLower))
    );
  }
  
  if (cuisine && cuisine !== 'All') {
    filtered = filtered.filter(r => 
      r.cuisine.toLowerCase() === cuisine.toLowerCase()
    );
  }
  
  res.json({ 
    recipes: filtered, 
    count: filtered.length,
    total: sampleRecipes.length 
  });
});

// Get single recipe by ID
router.get('/:id', (req, res) => {
  const recipe = sampleRecipes.find(r => r.id === parseInt(req.params.id));
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ error: 'Recipe not found' });
  }
});

module.exports = router;
