import { StackScreenProps } from "@react-navigation/stack";
import { View, Text, TextInput, Button } from "react-native";
import { StackParamList } from "../../router/router";
import Colors from "../../styles/colors";
import styles from "./styles";

type NewTodoProps = StackScreenProps<StackParamList, "NewTodo">;

export default function NewTodo({ navigation }: NewTodoProps) {
  function addTodo() {
    navigation.goBack();
  }

  return (
    <View style={styles.content}>
      <Text style={styles.formTitle}>Todo name</Text>
      <TextInput
        autoFocus
        style={styles.formInput}
        placeholder="Task name"
        cursorColor={Colors.blue}
      />
      <Button color={Colors.blue} title="Create task" onPress={addTodo} />
    </View>
  );
}
