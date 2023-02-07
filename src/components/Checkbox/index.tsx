import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../styles/colors";
import styles from "./styles";

type CheckboxProps = {
  checked?: boolean;
};

export default function Checkbox({ checked }: CheckboxProps) {
  return (
    <View style={styles.checkboxContainer}>
      {checked && <MaterialIcons name="check" color={Colors.blue} size={24} />}
    </View>
  );
}
