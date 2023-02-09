import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  buttonText: {
    color: Colors.white,
    fontSize: 18,
  }
})

export default styles;