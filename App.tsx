// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/HomeScreen';
import DetailsScreen from './src/pages/DetailsScreen';
import BottomTabNavigator from './src/components/BottomTabNavigator';



export default function App() {
  return (
    <NavigationContainer>

      <BottomTabNavigator />
    </NavigationContainer>

  );
}