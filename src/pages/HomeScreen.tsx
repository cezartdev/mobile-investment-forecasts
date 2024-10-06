// HomeScreen.tsx
import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Button } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

const Header = styled.View`
  background-color: #4a6ef1;
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

const HomeScreen = () => {
    return (
        <Container>
            <Header>
                <BalanceContainer>
                    <BalanceText>US Dollar</BalanceText>
                    <BalanceText>$20,000</BalanceText>
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
    );
};

export default HomeScreen;