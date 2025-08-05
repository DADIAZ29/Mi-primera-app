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

export const RegistroScreen = () => {
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  
  return (
     <View style={AppTheme.screenContainer}>
      <Text style={AppTheme.title}>Registrate</Text>

      <TextInput
        style={AppTheme.textInput}
        placeholder="Correo Electrónico"/>

      <TextInput
        style={AppTheme.textInput}
        placeholder="Usuario"/>

      <TextInput
        style={AppTheme.textInput}
        placeholder="Contraseña"/>

      <TouchableOpacity style={AppTheme.button}>
        <Text style={AppTheme.buttonText}>Registrarme</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
        <Text style={AppTheme.linkingContext}>
          ¿Ya tienes una cuenta? <Text style={AppTheme.linking}>Inicia sesión</Text>
        </Text>
      </TouchableOpacity>
    </View>

  )
}


