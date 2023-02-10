import { StackScreenProps } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { View, Text, TextInput, Alert, ToastAndroid } from "react-native";
import FormButton from "../../components/FormButton";
import useTodosContext from "../../hooks/useTodosContext";
import { StackParamList } from "../../router/router";
import Colors from "../../styles/colors";
import formStyles from "../../styles/forms";

type EditTodoProps = StackScreenProps<StackParamList, "EditTodo">;
export default function EditTodo({ navigation, route }: EditTodoProps) {
  const [name, setName] = useState("");
  const { todos, editTodo, deleteTodo } = useTodosContext();

  useEffect(() => {
    const todo = todos.find((todo) => todo.id === route.params.todoId);
    if (!todo) return;
    setName(todo.name);
  }, []);

  function handleEdit() {
    if (name == "") {
      ToastAndroid.show("Name is required", ToastAndroid.SHORT);
    } else {
      const todo = todos.find((todo) => todo.id === route.params.todoId);
      if (!todo) return;
      editTodo(route.params.todoId, { ...todo, name });
      navigation.goBack();
    }
  }

  function showDeleteAlert() {
    Alert.alert("Delete task", "Are you sure?", [
      {
        text: "Yes",
        onPress: handleDelete,
      },
      {
        text: "No",
      },
    ]);
  }

  function handleDelete() {
    deleteTodo(route.params.todoId);
    navigation.goBack();
  }

  return (
    <View style={formStyles.content}>
      <Text style={formStyles.formTitle}>Todo name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        autoFocus
        style={formStyles.formInput}
        placeholder="Todo name"
      />

      <View style={formStyles.buttons}>
        <FormButton
          onPress={handleEdit}
          color={Colors.blue}
          title="Edit"
          style={{ marginRight: 5 }}
        />
        <FormButton
          onPress={showDeleteAlert}
          color={Colors.red}
          title="Delete"
          style={{ marginLeft: 5 }}
        />
      </View>
    </View>
  );
}
