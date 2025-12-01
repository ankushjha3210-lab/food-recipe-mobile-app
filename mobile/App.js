import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';

const API_URL = 'https://your-backend-url.com/api';

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async (search = '') => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/recipes`, {
        params: { search }
      });
      setRecipes(response.data.recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchRecipes(searchQuery);
  };

  const RecipeCard = ({ recipe }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setSelectedRecipe(recipe)}
    >
      <Image source={{ uri: recipe.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{recipe.name}</Text>
        <Text style={styles.cardSubtitle}>{recipe.cuisine} • {recipe.time}</Text>
        <Text style={styles.cardDifficulty}>Difficulty: {recipe.difficulty}</Text>
      </View>
    </TouchableOpacity>
  );

  const RecipeDetail = ({ recipe }) => (
    <ScrollView style={styles.detailContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setSelectedRecipe(null)}
      >
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      
      <Image source={{ uri: recipe.image }} style={styles.detailImage} />
      
      <View style={styles.detailContent}>
        <Text style={styles.detailTitle}>{recipe.name}</Text>
        <Text style={styles.detailMeta}>{recipe.cuisine} • {recipe.time} • {recipe.difficulty}</Text>
        
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>• {ingredient}</Text>
        ))}
        
        <Text style={styles.sectionTitle}>Instructions</Text>
        {recipe.instructions.map((step, index) => (
          <Text key={index} style={styles.instruction}>
            {index + 1}. {step}
          </Text>
        ))}
        
        <Text style={styles.sectionTitle}>Nutrition (per serving)</Text>
        <View style={styles.nutritionGrid}>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>{recipe.nutrition.calories}</Text>
            <Text style={styles.nutritionLabel}>Calories</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>{recipe.nutrition.protein}g</Text>
            <Text style={styles.nutritionLabel}>Protein</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>{recipe.nutrition.carbs}g</Text>
            <Text style={styles.nutritionLabel}>Carbs</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>{recipe.nutrition.fat}g</Text>
            <Text style={styles.nutritionLabel}>Fat</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  if (selectedRecipe) {
    return <RecipeDetail recipe={selectedRecipe} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🍳 Recipe App</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search recipes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#FF6B6B" style={styles.loader} />
      ) : (
        <ScrollView style={styles.recipeList}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#FF6B6B',
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
  },
  searchInput: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 50,
  },
  recipeList: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  cardDifficulty: {
    fontSize: 12,
    color: '#FF6B6B',
    fontWeight: '600',
  },
  detailContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: {
    padding: 15,
    paddingTop: 50,
  },
  backButtonText: {
    fontSize: 18,
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
  detailImage: {
    width: '100%',
    height: 300,
  },
  detailContent: {
    padding: 20,
  },
  detailTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailMeta: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 10,
  },
  instruction: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
  },
  nutritionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 30,
  },
  nutritionItem: {
    alignItems: 'center',
  },
  nutritionValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  nutritionLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});
