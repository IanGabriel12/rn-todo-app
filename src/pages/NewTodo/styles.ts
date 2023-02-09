import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
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
  }
});

export default styles;