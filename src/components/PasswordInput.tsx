import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppTheme } from '../theme/AppTheme';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const PasswordInput = ({ value, onChangeText, placeholder }: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ position: 'relative' }}>
      <TextInput
        style={AppTheme.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!visible}
      />
      <TouchableOpacity
        style={{ position: 'absolute', right: 15, top: 15 }}
        onPress={() => {
          setVisible(!visible);
          console.log('Mostrar contraseña:', !visible);
        }}
      >
        <Icon name={visible ? 'eye-off' : 'eye'} size={24} color="#666" />
      </TouchableOpacity>
    </View>
  );
};
