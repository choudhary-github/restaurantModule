import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import DynamicTabs from './DynamicTabs';
import SignupScreen from '../screens/SignupScreen';
import { Platform } from 'react-native';
import OtpVerificationScreen from '../screens/OtpVerificationScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        freezeOnBlur: true,
        headerShown: false,
        ...(Platform.OS === 'ios' && {
          presentation: 'card',
          animationTypeForReplace: 'push',
        }),
        ...(Platform.OS === 'android' && {
          animationTypeForReplace: 'push',
          animation: 'fade',
          animationDuration: 300,
        }),
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={DynamicTabs} />
    </Stack.Navigator>
  );
};

export default function AppNavigator() {
  const isUserAuthenticated = false;
  return isUserAuthenticated ? <MainStack /> : <AuthStack />;
}
