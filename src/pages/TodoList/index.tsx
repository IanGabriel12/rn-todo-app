import { View, FlatList } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import styles from "./styles";
import { useState } from "react";
import AddTodoButton from "../../components/AddTodoButton";
import TodoItem from "../../components/TodoItem";
import { StackParamList } from "../../router/router";
import useTodosContext from "../../hooks/useTodosContext";
import { Todo } from "../../contexts/TodosContext";

type TodoListProps = StackScreenProps<StackParamList, "TodoList">;

export default function TodoList({ navigation }: TodoListProps) {
  const { todos, editTodo } = useTodosContext();
  const todosReverse = [...todos].reverse();

  function toggleTodo(reverseIndex: number) {
    const index = todos.length - reverseIndex - 1;
    const newTodo: Todo = {
      ...todos[index],
      checked: !todos[index].checked,
    };

    editTodo(index, newTodo);
  }

  function goToEditTodo(reverseIndex: number) {
    navigation.navigate("EditTodo", {
      todoIndex: todos.length - reverseIndex - 1,
    });
  }

  return (
    <View style={styles.content}>
      <AddTodoButton onPress={() => navigation.navigate("NewTodo")} />
      <FlatList
        style={styles.todoList}
        renderItem={({ item, index }) => (
          <TodoItem
            onLongPress={() => goToEditTodo(index)}
            onPress={() => toggleTodo(index)}
            checked={item.checked}
            key={item.name}
            name={item.name}
          />
        )}
        data={todosReverse}
      />
    </View>
  );
}
