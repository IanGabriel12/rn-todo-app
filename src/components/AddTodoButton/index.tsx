import { TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../styles/colors";
import styles from "./styles";

type AddTodoButtonProps = {
  onPress: () => void;
};

export default function AddTodoButton(props: AddTodoButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
      <MaterialIcons name="add-circle-outline" color={Colors.white} size={30} />
      <Text style={styles.buttonText}>Add todo</Text>
    </TouchableOpacity>
  );
}
