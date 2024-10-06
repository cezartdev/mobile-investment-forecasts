// screens/DetailsScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalles</Text>
      <Button title="Volver a Inicio" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailsScreen;