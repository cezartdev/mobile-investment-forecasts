// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/HomeScreen';
import DetailsScreen from './src/pages/DetailsScreen';
import BottomTabNavigator from './src/components/BottomTabNavigator';
import { ThemeProvider } from 'styled-components/native';
import { colors } from './src/utils/theme'; // importa tu archivo de tema

export default function App() {
    return (
        <ThemeProvider theme={{ colors }}>
            <NavigationContainer>
                <BottomTabNavigator />
            </NavigationContainer>
        </ThemeProvider>
    );
}