// HomeScreen.tsx
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import { ScrollView, Text, Button, Image, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import axios from 'axios';
import Chart from "../components/Chart"
import { colors } from "../utils/colors"
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight}; /* Fondo gris claro */
`;

const Header = styled.View`
  background-color: #3c3d3d;
  padding: 20px;
  align-items: center;
`;

const BalanceContainer = styled.View`
  margin: 20px 0;
`;

const BalanceText = styled.Text`
  color: white;
  font-size: 24px;
`;

const AddMoneyButton = styled(Button)`
  background-color: #ffbc00;
  margin-top: 10px;
`;

const TransactionsContainer = styled.View`
  background-color: white;
  border-radius: 10px;
  margin: 20px;
  padding: 15px;
`;

const TransactionHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TransactionItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const TransactionText = styled.Text`
  font-size: 16px;
`;

const TransactionAmount = styled.Text<{ positive: boolean }>`
  color: ${({ positive }) => (positive ? 'green' : 'red')};
  font-size: 16px;
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
  border-radius: 20px;
  background-color: white;
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MyText = styled.Text`
  margin-top: 10px;
`;

const MyImage = styled.Image`
  width: 250px;
  height: 200px;
`;

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
                <Header>
                    <BalanceContainer>
                        <BalanceText>Investment Forecast</BalanceText>
                        <AddMoneyButton title="Add Money" onPress={() => { }} />
                    </BalanceContainer>
                </Header>
                <TransactionsContainer>
                    <TransactionHeader>Transaction</TransactionHeader>
                    <TransactionItem>
                        <TransactionText>Spending</TransactionText>
                        <TransactionAmount positive={false}>-$500</TransactionAmount>
                    </TransactionItem>
                    <TransactionItem>
                        <TransactionText>Income</TransactionText>
                        <TransactionAmount positive={true}>$3000</TransactionAmount>
                    </TransactionItem>
                    <TransactionItem>
                        <TransactionText>Bills</TransactionText>
                        <TransactionAmount positive={false}>-$800</TransactionAmount>
                    </TransactionItem>
                    <TransactionItem>
                        <TransactionText>Savings</TransactionText>
                        <TransactionAmount positive={true}>$1000</TransactionAmount>
                    </TransactionItem>
                </TransactionsContainer>

                <Animated.View style={animatedStyle}>
                    <MyContainer>
                        <MyImage source={require('../../assets/investment.png')} />
                        <MyText>
                            Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ipsa voluptatum, a sed, corrupti omnis error, blanditiis quas quo dolor debitis maiores libero inventore numquam rerum expedita praesentium. Similique, provident.
                        </MyText>
                    </MyContainer>
                </Animated.View>

                <Chart />

                <ButtonContainer>
                    <OptionButton>
                        <OptionButtonText>Send</OptionButtonText>
                    </OptionButton>
                    <OptionButton>
                        <OptionButtonText>Request</OptionButtonText>
                    </OptionButton>
                    <OptionButton>
                        <OptionButtonText>Bank</OptionButtonText>
                    </OptionButton>
                </ButtonContainer>
            </Container>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: 80, // Asegura que el contenido no quede oculto debajo del TabNavigator
        backgroundColor: colors.backgroundLight,
    },
});

export default HomeScreen;