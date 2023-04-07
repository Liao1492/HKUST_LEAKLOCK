import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "native-base";
import Navigation from "./navigation";
import { extendTheme } from "native-base";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./store/store";
import { Provider } from "react-redux";

import { NativeBaseProvider } from "native-base";
export default function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: "#E3F2F9",
        100: "#C5E4F3",
        200: "#36DBBD",
        300: "#7AC1E4",
        400: "#47A9DA",
        500: "#0088CC",
        600: "#007AB8",
        700: "#006BA1",
        800: "#005885",
        900: "#003F5E",
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: "dark",
    },
    components: {
      Text: {
        defaultProps: {
          color: "white",
        },
      },
    },
  });
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NativeBaseProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar style="light" />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}
