import axios from 'axios';

// Update this URL after deploying your backend
const API_BASE_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log('API Request:', config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
    return Promise.reject(error);
  }
);

export const recipeAPI = {
  // Get all recipes with optional filters
  getRecipes: async (params = {}) => {
    try {
      const response = await api.get('/recipes', { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get single recipe by ID
  getRecipeById: async (id) => {
    try {
      const response = await api.get(`/recipes/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get all cuisines
  getCuisines: async () => {
    try {
      const response = await api.get('/cuisines');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;
