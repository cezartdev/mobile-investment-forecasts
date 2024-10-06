// BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../pages/HomeScreen';
import SendScreen from '../pages/SendScreen';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        backgroundColor: '#3c3d3d',
                        borderRadius: 14,
                        margin: 20,
                        alignSelf: 'center',  // Usar alignSelf para centrar el tabBar
                        height: 60,
                        position: 'absolute',
                        borderWidth: 0,
                    },
                    tabBarActiveTintColor: '#8AFF30',
                    tabBarInactiveTintColor: 'white',
                    tabBarLabelStyle: { fontSize: 14 },
                    headerShown: false,
                    tabBarIcon: ({ color }) => {
                        let iconName;

                        switch (route.name) {
                            case 'Home':
                                iconName = 'home';
                                break;
                            case 'Send':
                                iconName = 'send';
                                break;
                            default:
                                iconName = 'home';
                        }

                        return <Icon name={iconName} size={20} color={color} />;
                    },
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
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTabNavigator;