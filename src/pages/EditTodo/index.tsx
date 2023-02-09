import { StackScreenProps } from "@react-navigation/stack";
import { View, Text, TextInput, Button } from "react-native";
import FormButton from "../../components/FormButton";
import { StackParamList } from "../../router/router";
import Colors from "../../styles/colors";
import formStyles from "../../styles/forms";

type EditTodoProps = StackScreenProps<StackParamList, "EditTodo">;
export default function EditTodo({ navigation, route }: EditTodoProps) {
  return (
    <View style={formStyles.content}>
      <Text style={formStyles.formTitle}>Todo name</Text>
      <TextInput
        autoFocus
        style={formStyles.formInput}
        placeholder="Todo name"
      />
      <View style={formStyles.buttons}>
        <FormButton
          color={Colors.blue}
          title="Edit"
          style={{ marginRight: 5 }}
        />
        <FormButton
          color={Colors.red}
          title="Delete"
          style={{ marginLeft: 5 }}
        />
      </View>
    </View>
  );
}
