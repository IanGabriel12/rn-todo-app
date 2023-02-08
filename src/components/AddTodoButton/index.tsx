import { TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../styles/colors";
import styles from "./styles";

export default function AddTodoButton() {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <MaterialIcons name="add-circle-outline" color={Colors.white} size={30} />
      <Text style={styles.buttonText}>Add todo</Text>
    </TouchableOpacity>
  );
}
