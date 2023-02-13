import "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import Router from "./src/router/router";
import { NavigationContainer } from "@react-navigation/native";
import { SettingsProvider } from "./src/contexts/SettingsContext";
import { TodosProvider } from "./src/contexts/TodosContext";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
  },
});

export default function App() {
  return (
    <SettingsProvider>
      <TodosProvider>
        <NavigationContainer>
          <View style={styles.main}>
            <Router />
            <ExpoStatusBar translucent />
          </View>
        </NavigationContainer>
      </TodosProvider>
    </SettingsProvider>
  );
}
