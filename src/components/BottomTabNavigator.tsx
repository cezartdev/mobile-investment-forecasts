// BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import SendScreen from '../pages/SendScreen';
import { Icon } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        backgroundColor: '#3c3d3d',
                        borderRadius: 14,
                        marginHorizontal: 20,
                        alignSelf: 'center',
                        height: 60,
                        position: 'absolute',
                        bottom: 20, // Fija el tabBar en la parte inferior con un margen
                        borderWidth: 0,
                    },
                    tabBarActiveTintColor: '#8AFF30',
                    tabBarInactiveTintColor: 'white',
                    tabBarLabelStyle: { fontSize: 14, marginBottom: 5 },
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    contentContainer: {
        flex: 1,
        paddingBottom: 80, // Espacio adicional para evitar que el contenido quede oculto debajo del TabBar
    },
});

export default BottomTabNavigator;