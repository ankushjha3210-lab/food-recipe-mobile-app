const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Medium',
  },
  time: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredients: [{
    type: String,
    required: true,
  }],
  instructions: [{
    type: String,
    required: true,
  }],
  nutrition: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update timestamp on save
recipeSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Recipe', recipeSchema);
