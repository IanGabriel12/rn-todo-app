import { StackScreenProps } from "@react-navigation/stack";
import { useState } from "react";
import { View, Text, TextInput, ToastAndroid } from "react-native";
import FormButton from "../../components/FormButton";
import useTodosContext from "../../hooks/useTodosContext";
import { StackParamList } from "../../router/router";
import Colors from "../../styles/colors";
import formStyles from "../../styles/forms";

type NewTodoProps = StackScreenProps<StackParamList, "NewTodo">;

export default function NewTodo({ navigation }: NewTodoProps) {
  const [name, setName] = useState("");
  const { addTodo } = useTodosContext();

  function handleSubmit() {
    if (name === "") {
      ToastAndroid.show("Name is required", ToastAndroid.SHORT);
    } else {
      addTodo({ id: Date.now(), name, checked: false });
      navigation.goBack();
    }
  }

  return (
    <View style={formStyles.content}>
      <Text style={formStyles.formTitle}>Todo name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        autoFocus
        style={formStyles.formInput}
        placeholder="Task name"
        cursorColor={Colors.blue}
      />
      <View style={formStyles.buttonWrapper}>
        <FormButton
          color={Colors.blue}
          title="Create task"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}
