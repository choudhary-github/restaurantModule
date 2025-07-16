import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { oceanDarkTheme as darkTheme, oceanLightTheme as lightTheme } from './themes';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
  Theme as NavigationThemeType,
} from '@react-navigation/native';

type Preference = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'theme_preference';

const ThemeContext = createContext<{
  preference: Preference;
  setPreference: (p: Preference) => void;
  paperTheme: typeof lightTheme;
  navigationTheme: NavigationThemeType;
}>({
  preference: 'system',
  setPreference: () => {},
  paperTheme: lightTheme,
  navigationTheme: NavigationLightTheme,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemScheme = useColorScheme();
  const [preference, setPreferenceState] = useState<Preference>('system');

  useEffect(() => {
    (async () => {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        setPreferenceState(stored);
      }
    })();
  }, []);

  const setPreference = async (p: Preference) => {
    setPreferenceState(p);
    await AsyncStorage.setItem(STORAGE_KEY, p);
  };

  const isDark = preference === 'dark' || (preference === 'system' && systemScheme === 'dark');

  const paperTheme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);
  const navigationTheme = useMemo(() => (isDark ? NavigationDarkTheme : NavigationLightTheme), [isDark]);

  return (
    <ThemeContext.Provider value={{ preference, setPreference, paperTheme, navigationTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
