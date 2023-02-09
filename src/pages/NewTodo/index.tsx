import { StackScreenProps } from "@react-navigation/stack";
import { View, Text, TextInput } from "react-native";
import FormButton from "../../components/FormButton";
import { StackParamList } from "../../router/router";
import Colors from "../../styles/colors";
import formStyles from "../../styles/forms";

type NewTodoProps = StackScreenProps<StackParamList, "NewTodo">;

export default function NewTodo({ navigation }: NewTodoProps) {
  function addTodo() {
    navigation.goBack();
  }

  return (
    <View style={formStyles.content}>
      <Text style={formStyles.formTitle}>Todo name</Text>
      <TextInput
        autoFocus
        style={formStyles.formInput}
        placeholder="Task name"
        cursorColor={Colors.blue}
      />
      <View style={formStyles.buttonWrapper}>
        <FormButton color={Colors.blue} title="Create task" onPress={addTodo} />
      </View>
    </View>
  );
}
