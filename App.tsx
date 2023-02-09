import "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import Router from "./src/router/router";
import { NavigationContainer } from "@react-navigation/native";

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.main}>
        <Router />
      </View>
    </NavigationContainer>
  );
}
