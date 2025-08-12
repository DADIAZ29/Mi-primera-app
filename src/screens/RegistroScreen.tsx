import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { AppTheme } from '../theme/AppTheme';
import { PasswordInput } from '../components/PasswordInput';
import { RootStackParamList } from '../navigator/StackNavigator';
import { TextInput } from 'react-native-gesture-handler';

export const RegistroScreen = () => {
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleRegister = () => {
    console.log('Correo:', email);
    console.log('Usuario:', usuario);
    console.log('Contraseña:', contrasena);
    navigation.navigate('Inicio');
  };

  return (
    <View style={AppTheme.screenContainer}>
      <Text style={AppTheme.title}>Regístrate</Text>

      <TextInput
        style={AppTheme.textInput}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={AppTheme.textInput}
        placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
      />

      <PasswordInput
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
      />

      <TouchableOpacity style={AppTheme.button} onPress={handleRegister}>
        <Text style={AppTheme.buttonText}>Registrarme</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
        <Text style={AppTheme.linkingContext}>
          ¿Ya tienes una cuenta? <Text style={AppTheme.linking}>Inicia sesión</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};


