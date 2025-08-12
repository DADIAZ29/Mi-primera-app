import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { AppTheme } from '../theme/AppTheme';

const productos = [
  { id: '1', nombre: 'iPhone 14 Pro Max' },
  { id: '2', nombre: 'Samsung Galaxy S23 Ultra' },
  { id: '3', nombre: 'Xiaomi 13 Pro' },
];

export const ProductosScreen = () => {
  return (
    <View style={AppTheme.screenContainer}>
      <Text style={AppTheme.title}>Productos disponibles</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={AppTheme.textInput}>{item.nombre}</Text>
        )}
      />
    </View>
  );
};
