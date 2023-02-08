import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
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
  },

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
});

export default styles;