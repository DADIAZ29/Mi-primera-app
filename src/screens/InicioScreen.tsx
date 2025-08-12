import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { AppTheme } from '../theme/AppTheme';
import { PasswordInput } from '../components/PasswordInput';
import { RootStackParamList } from '../navigator/StackNavigator';
import { TextInput } from 'react-native-gesture-handler';

export const InicioScreen = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    console.log('Usuario:', usuario);
    console.log('Contraseña:', contrasena);
    navigation.navigate('Productos');
  };

  return (
    <View style={AppTheme.screenContainer}>
      <Text style={AppTheme.title}>¡Bienvenido nuevamente!</Text>

      <TextInput
        style={AppTheme.textInput}
        placeholder="Ingresa tu Usuario"
        value={usuario}
        onChangeText={setUsuario}
      />

      <PasswordInput
        placeholder="Ingresa tu Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
      />

      <TouchableOpacity style={AppTheme.button} onPress={handleLogin}>
        <Text style={AppTheme.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text style={AppTheme.linkingContext}>
          ¿Aún no tienes cuenta? <Text style={AppTheme.linking}>Regístrate</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};


