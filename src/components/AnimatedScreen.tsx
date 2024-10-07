// AnimatedScreen.tsx
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { View } from 'react-native';

const AnimatedScreen = ({ children }:any) => {
    return (
        <Animatable.View
            animation="fadeIn"
            duration={500}
            style={{ flex: 1 }}
        >
            {children}
        </Animatable.View>
    );
};

export default AnimatedScreen;