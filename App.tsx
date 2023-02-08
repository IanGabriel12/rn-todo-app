import "react-native-gesture-handler";
import { View } from "react-native";
import TodoList from "./src/pages/TodoList";
import Router from "./src/router/router";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
