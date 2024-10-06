// Sidebar.tsx
import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation'; // Importa el tipo de rutas
import { StackNavigationProp } from '@react-navigation/stack';

// Contenedor del sidebar
const SidebarContainer = styled.View`
  flex: 1;
  background-color: #f8f8f8;
  padding: 20px;
  width: 250px; /* Ancho del sidebar */
`;

// Estilo para cada opción
const Option = styled(TouchableOpacity)<{ selected: boolean }>`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? '#3bc2bc' : 'transparent')}; /* Color cuando está seleccionado */
`;

const OptionText = styled(Text)<{ selected: boolean }>`
  font-size: 16px;
  color: ${({ selected }) => (selected ? '#ffffff' : '#333333')}; /* Color del texto */
`;

// Tipo de propiedades para el sidebar
interface OptionType {
  label: string;
  route: keyof RootStackParamList; // Cambia el tipo a una de las claves de las rutas
}

interface SidebarProps {
  options: OptionType[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

// Sidebar
const Sidebar: React.FC<SidebarProps> = ({ options, selectedOption, onSelect }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); // Usa el tipo de navegación

  return (
    <SidebarContainer>
      {options.map(({ label, route }) => (
        <Option
          key={label}
          selected={selectedOption === label}
          onPress={() => {
            onSelect(label);
            navigation.navigate(route); // Ahora debería reconocer la ruta
          }}
        >
          <OptionText selected={selectedOption === label}>{label}</OptionText>
        </Option>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;