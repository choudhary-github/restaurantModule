import React from "react";
import { StatusBar, ActivityIndicator } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./src/redux/store"; // redux store
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider, useThemeContext } from "./src/theme/ThemeContext";

const Main = () => {
  const { paperTheme, navigationTheme } = useThemeContext();

  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaProvider>
        <NavigationContainer theme={navigationTheme}>
          <StatusBar
            backgroundColor={paperTheme.colors.background}
            barStyle={true ? "light-content" : "dark-content"}
          />
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator size="large" />} persistor={persistor}>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
