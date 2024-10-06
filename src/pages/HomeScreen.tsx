// src/pages/HomeScreen.tsx
import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Sidebar from '../components/Sidebar';
import { RootStackParamList } from '../types/navigation';

const HomeScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  // Define las opciones como un arreglo de objetos
  const options: { label: string; route: keyof RootStackParamList }[] = [
    { label: 'Opción 1', route: 'Home' },
    { label: 'Opción 2', route: 'Details' },
    // Puedes añadir más opciones aquí
  ];

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Opción seleccionada: {selectedOption}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;