import React from 'react';
import { Text, View, Button } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation.types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const onLogout = () => {
    navigation.navigate('Login');
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button variant="outline" colorScheme="emerald" onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
};

export default HomeScreen;
