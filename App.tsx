import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen } from './src/screens';
import { RootStackParamList } from './src/types/navigation.types';
import customTheme from './src/styles/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();
const theme = extendTheme(customTheme);

function App(): JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome to TravelBuddies' }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
