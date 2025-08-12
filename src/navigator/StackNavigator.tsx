import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { InicioScreen } from '../screens/InicioScreen';
import { RegistroScreen } from '../screens/RegistroScreen';
import { ProductosScreen } from '../screens/ProductosScreen';

export type RootStackParamList = {
  Inicio: undefined;
  Registro: undefined;
  Productos: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    
      <Stack.Navigator initialRouteName="Inicio"
        screenOptions={{
          cardStyle:{
            backgroundColor: '#0551a3ff'
          }
        }}>
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Productos" component={ProductosScreen} />
      </Stack.Navigator>
    
  );
};
