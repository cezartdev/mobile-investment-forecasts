// HomeScreen.tsx
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import { ScrollView, Text, Button, Image, StyleSheet, SafeAreaView } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import axios from 'axios';
import LineChart from "../components/LineChart"
import PieChart from "../components/PieChart"
import { colors, shapes } from "../utils/theme"
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundDark}; /* Fondo  */
  margin: 15% 0;
  gap: 20px;
`;


const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0;
`;

const OptionButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: #4a6ef1;
  border-radius: 8px;
  align-items: center;
  width: 25%;
`;

const OptionButtonText = styled.Text`
  color: white;
`;

const MyContainer = styled.View`
  border-radius: 26px;
  background-color: #2D2D2D;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MyText = styled.Text`
  text-align: center;
  color: white;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  
`;

const MyImage = styled.Image`
  width: 90%;
  margin: 0 auto;
  width: 250px;
  height: 200px;
`;

const StandardContainer = styled.View`
    width: ${({ theme }) => theme.shapes.standardBackgroundWidth};
    margin: ${({ theme }) => theme.shapes.standardBackgroundMargin};
    background-color: ${({ theme }) => theme.colors.backgroundAltDark};
    padding: ${({ theme }) => theme.shapes.cardPadding}px;
    border-radius:  ${({ theme }) => theme.shapes.cardRadius}px;
`
const Title = styled.Text`
    font-size: 20px;
    color: white;
    font-weight: bold;
`
const HomeScreen = () => {
    const translateX = useSharedValue(0); // Valor compartido

    // Define el estilo animado
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });

    const startAnimation = () => {
        translateX.value = withTiming(100, { duration: 500 }); // Mueve a la posición 100
    };
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get('https://backendcitecubb.onrender.com/api/user/get-all');
    //         console.log(response.data)
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       } finally {

    //       }
    //     };

    //     fetchData();
    //   }, []);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Container>
                <StandardContainer>
                    <Title>Industry Analysis</Title>
                    <PieChart />
                </StandardContainer>

                <StandardContainer>
                    <Animated.View style={animatedStyle}>
                        <MyImage source={require('../../assets/investment.png')} />
                        <MyText>
                            Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ipsa voluptatum, a sed, corrupti omnis error, blanditiis quas quo dolor debitis maiores libero inventore numquam rerum expedita praesentium. Similique, provident.
                        </MyText>
                    </Animated.View>
                </StandardContainer>

                <StandardContainer>
                    <Title>Share Analysis</Title>
                    <LineChart />
                </StandardContainer>


            </Container>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: 80, // Asegura que el contenido no quede oculto debajo del TabNavigator
        backgroundColor: colors.backgroundDark,
    },
});

export default HomeScreen;