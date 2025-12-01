import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { recipeAPI } from '../services/api';

export default function HomeScreen({ onRecipeSelect }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [cuisines, setCuisines] = useState(['All']);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    await Promise.all([fetchRecipes(), fetchCuisines()]);
  };

  const fetchRecipes = async (search = '', cuisine = '') => {
    try {
      setLoading(true);
      const params = {};
      if (search) params.search = search;
      if (cuisine && cuisine !== 'All') params.cuisine = cuisine;

      const data = await recipeAPI.getRecipes(params);
      setRecipes(data.recipes || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      // Use sample data if API fails
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCuisines = async () => {
    try {
      const data = await recipeAPI.getCuisines();
      setCuisines(['All', ...(data.cuisines || [])]);
    } catch (error) {
      console.error('Error fetching cuisines:', error);
    }
  };

  const handleSearch = () => {
    fetchRecipes(searchQuery, selectedCuisine);
  };

  const handleCuisineSelect = (cuisine) => {
    setSelectedCuisine(cuisine);
    fetchRecipes(searchQuery, cuisine);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchRecipes(searchQuery, selectedCuisine);
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🍳 Recipe App</Text>
        <Text style={styles.headerSubtitle}>Discover delicious recipes</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search recipes or ingredients..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>🔍</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cuisineScroll}
        contentContainerStyle={styles.cuisineScrollContent}
      >
        {cuisines.map((cuisine) => (
          <TouchableOpacity
            key={cuisine}
            style={[
              styles.cuisineChip,
              selectedCuisine === cuisine && styles.cuisineChipActive,
            ]}
            onPress={() => handleCuisineSelect(cuisine)}
          >
            <Text
              style={[
                styles.cuisineChipText,
                selectedCuisine === cuisine && styles.cuisineChipTextActive,
              ]}
            >
              {cuisine}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {loading ? (
        <ActivityIndicator size="large" color="#FF6B6B" style={styles.loader} />
      ) : (
        <ScrollView
          style={styles.recipeList}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onPress={() => onRecipeSelect(recipe)}
              />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>No recipes found</Text>
              <Text style={styles.emptyStateSubtext}>
                Try a different search or cuisine
              </Text>
            </View>
          )}
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
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 5,
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
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#FF6B6B',
    width: 45,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    fontSize: 20,
  },
  cuisineScroll: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cuisineScrollContent: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  cuisineChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  cuisineChipActive: {
    backgroundColor: '#FF6B6B',
  },
  cuisineChipText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  cuisineChipTextActive: {
    color: 'white',
  },
  loader: {
    marginTop: 50,
  },
  recipeList: {
    flex: 1,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    marginTop: 50,
  },
  emptyStateText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#999',
    marginBottom: 10,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#bbb',
  },
});
