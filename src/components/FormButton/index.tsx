import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";
import styles from "./styles";

type FormButtonProps = TouchableOpacityProps & {
  color: string;
  title: string;
};

export default function FormButton({ color, title, ...rest }: FormButtonProps) {
  const buttonStyle = StyleSheet.flatten([
    styles.buttonContainer,
    rest.style,
    { backgroundColor: color },
  ]);

  return (
    <TouchableOpacity {...rest} style={buttonStyle}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
