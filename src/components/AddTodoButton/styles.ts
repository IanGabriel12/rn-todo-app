import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.blue,
    flexDirection: "row",
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  buttonText: {
    marginLeft: 20,
    color: Colors.white,
    fontSize: 20,
  }
});

export default styles;