import { StyleSheet } from "react-native";
import Colors from "./colors";

const formStyles = StyleSheet.create({
  content: {
    padding: 20,
    flex: 1,
  },

  formTitle: {
    fontSize: 20,
    fontWeight: "bold"
  },

  formInput: {
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.blue,
    paddingHorizontal: 10,
    marginVertical: 20,
  },

  buttons: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
  },

  buttonWrapper: {
    flexDirection: "row",
    height: 50,
    gap: 10,
  }
});

export default formStyles;