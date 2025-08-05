import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AppTheme } from '../theme/AppTheme';

type RootStackParamList = {
  Inicio: undefined;
  Registro: undefined;
};

export const InicioScreen = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={AppTheme.screenContainer}>
  <Text style={AppTheme.title}> ¡Bienvenido nuevamente!</Text>
  
  <TextInput
    style={AppTheme.textInput}
    placeholder="Ingresa tu Usuario"
    value={usuario}
    onChangeText={setUsuario}
  />
  
  <TextInput
    style={AppTheme.textInput}
    placeholder="Ingresa tu Contraseña"
    value={contrasena}
    onChangeText={setContrasena}
    secureTextEntry
  />

  <TouchableOpacity style={AppTheme.button}>
    <Text style={AppTheme.buttonText}>Ingresar</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
    <Text style={AppTheme.linkingContext}>
      ¿Aun no tienes cuenta? <Text style={AppTheme.linking}>Regístrate</Text>
    </Text>
  </TouchableOpacity>
</View>






  )
}

