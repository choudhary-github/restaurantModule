import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigator from './TabsNavigator';
import LoginScreen from '../screens/LoginScreen';
import DynamicTabs from './DynamicTabs';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
      // <Stack.Navigator screenOptions={{ headerShown: false }}>
      //   <Stack.Screen name="Login" component={SignupScreen} />
      //   <Stack.Screen name="Main" component={TabsNavigator} />
      // </Stack.Navigator>
    // );
      <DynamicTabs />
  );
}
