import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    borderColor: Colors.blue,
    borderBottomWidth: 2,
    alignItems: "center",
    padding: 10,
  },

  todoContent: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
  },

  todoName: {
    fontSize: 20,
  },

  checkedTodoName: {
    opacity: 0.5,
  },

  checkedLine: {
    width: "100%",
    backgroundColor: "gray",
    height: 3,
    position: "absolute",
    zIndex: 1,
  }
})

export default styles;