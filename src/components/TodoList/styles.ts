import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%"
  },

  header: {
    height: 100,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: Colors.blue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: Colors.white,
    fontSize: 20,
  },

  content: {
    padding: 20,
    flex: 1,
  },

  todoList: {
    marginTop: 20,
  }
});

export default styles;