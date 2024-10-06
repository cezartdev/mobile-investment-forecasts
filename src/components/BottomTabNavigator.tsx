// BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../pages/HomeScreen'; // Asegúrate de tener este componente
import SendScreen from '../pages/SendScreen'; // Crea este componente
// import RequestScreen from './RequestScreen'; // Crea este componente
// import BankScreen from './BankScreen'; // Crea este componente

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: { backgroundColor: '#4a6ef1' }, // Color de fondo
                    tabBarActiveTintColor: '#ffbc00', // Color del ícono activo
                    tabBarInactiveTintColor: 'white', // Color del ícono inactivo
                    tabBarLabelStyle: { fontSize: 14 },
                    headerShown: false, // Ocultar encabezado
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ tabBarLabel: 'Home' }}
                />
                <Tab.Screen
                    name="Send"
                    component={SendScreen}
                    options={{ tabBarLabel: 'Send' }}
                />
                {/* <Tab.Screen 
          name="Request" 
          component={RequestScreen} 
          options={{ tabBarLabel: 'Request' }} 
        />
        <Tab.Screen 
          name="Bank" 
          component={BankScreen} 
          options={{ tabBarLabel: 'Bank' }} 
        /> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTabNavigator;