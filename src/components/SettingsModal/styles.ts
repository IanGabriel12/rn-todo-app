import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.transparentBlack,
    alignItems: "center",
    justifyContent: "center"
  },

  modalContent: {
    width: "80%",
    height: 200,
    backgroundColor: Colors.white,
    padding: 20,
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  }
})

export default styles;