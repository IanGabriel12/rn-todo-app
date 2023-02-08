import { TouchableHighlight, Text, View, StyleSheet } from "react-native";
import Colors from "../../styles/colors";
import Checkbox from "../Checkbox";
import styles from "./styles";

type TodoItemProps = {
  name: string;
  checked: boolean;
  onPress: () => void;
  onLongPress: () => void;
};

export default function TodoItem(props: TodoItemProps) {
  return (
    <TouchableHighlight
      onLongPress={props.onLongPress}
      onPress={props.onPress}
      underlayColor={Colors.underlayBlue}
    >
      <View style={styles.todoContainer}>
        <Checkbox checked={props.checked} />
        <View style={styles.todoContent}>
          {props.checked && <View style={styles.checkedLine} />}
          <Text
            style={
              props.checked
                ? StyleSheet.flatten([styles.todoName, styles.checkedTodoName])
                : styles.todoName
            }
          >
            {props.name}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
