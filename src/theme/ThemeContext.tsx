import React, { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';
import { oceanDarkTheme as darkTheme, oceanLightTheme as lightTheme } from './themes';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationLightTheme, Theme as NavigationThemeType } from '@react-navigation/native';

const ThemeContext = createContext<{
  isDark: boolean;
  toggleTheme: () => void;
  paperTheme: typeof lightTheme;
  navigationTheme: NavigationThemeType;
}>({
  isDark: false,
  toggleTheme: () => {},
  paperTheme: lightTheme,
  navigationTheme: NavigationLightTheme,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState('dark' === useColorScheme());

  const toggleTheme = () => setIsDark(prev => !prev);

  const paperTheme = isDark ? darkTheme : lightTheme;
  const navigationTheme = isDark ? NavigationDarkTheme : NavigationLightTheme;

  return <ThemeContext.Provider value={{ isDark, toggleTheme, paperTheme, navigationTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
