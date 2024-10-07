import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import SendScreen from '../pages/SendScreen';
import { Icon } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, shapes } from "../utils/theme";
import { ScreenWidth } from 'react-native-elements/dist/helpers';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        backgroundColor: colors.backgroundAltDark,
                        borderRadius: shapes.buttonRadius,
                        alignSelf: 'center',
                        height: 60,
                        position: 'absolute',
                        bottom: 20,
                        borderWidth: 0,
                        borderTopWidth: 0,
                        marginHorizontal: `${shapes.standardMarginHorizontal}%`
                    },
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: colors.primaryDark,
                    tabBarLabelStyle: { fontSize: 14, marginBottom: 5 },
                    headerShown: false,
                    tabBarButton: (props) => {
                        const { onPress, accessibilityState } = props;
                        const focused = accessibilityState?.selected;

                        // Decide icon based on route
                        let iconName: string = 'home'; // Valor por defecto
                        if (route.name === 'Home') {
                            iconName = 'home';
                        } else if (route.name === 'Send') {
                            iconName = 'send';
                        }

                        return (
                            <TouchableOpacity
                                onPress={onPress}
                                style={[
                                    styles.tabButton,
                                    focused ? styles.tabButtonActive : null
                                ]}
                            >
                                <Icon name={iconName} size={20} color={focused ? "white" : colors.primaryDark} />
                                <Text style={[styles.tabLabel, focused ? styles.tabLabelFocused : null]}>
                                    {route.name}
                                </Text>
                            </TouchableOpacity>
                        );
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
                <Tab.Screen name="Send" component={SendScreen} options={{ tabBarLabel: 'Send' }} />
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', // Alinea ícono y texto en columna
        paddingVertical: 10,
    },
    tabButtonActive: {
        backgroundColor: colors.primaryDark,
        borderRadius: shapes.buttonRadius,
    },
    tabLabel: {
        color: colors.primaryDark,
        fontSize: 12,
    },
    tabLabelFocused: {
        color: 'white',
    },
});

export default BottomTabNavigator;