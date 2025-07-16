import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider, useThemeContext } from './src/theme/ThemeContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Main = () => {
  const { paperTheme, navigationTheme } = useThemeContext();

  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaProvider>
        <NavigationContainer theme={navigationTheme}>
          <StatusBar
            backgroundColor={paperTheme.colors.background}
            barStyle={true ? 'light-content' : 'dark-content'}
          />
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}
