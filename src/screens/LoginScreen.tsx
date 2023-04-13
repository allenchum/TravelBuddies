import React from 'react';
import { Text, View, Button } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation.types';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const onLoginSubmit = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button colorScheme="emerald" onPress={onLoginSubmit}>
        Login
      </Button>
    </View>
  );
};

export default LoginScreen;
