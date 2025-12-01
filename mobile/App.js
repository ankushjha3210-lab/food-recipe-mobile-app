import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import RecipeDetail from './src/components/RecipeDetail';

export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <>
      <StatusBar style="light" />
      {selectedRecipe ? (
        <RecipeDetail
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      ) : (
        <HomeScreen onRecipeSelect={setSelectedRecipe} />
      )}
    </>
  );
}
