import { View, FlatList } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import styles from "./styles";
import { useState } from "react";
import AddTodoButton from "../../components/AddTodoButton";
import TodoItem from "../../components/TodoItem";
import { StackParamList } from "../../router/router";
import useTodosContext from "../../hooks/useTodosContext";
import { Todo } from "../../contexts/TodosContext";
import useFilteredTodos from "../../hooks/useFilteredTodos";

type TodoListProps = StackScreenProps<StackParamList, "TodoList">;

export default function TodoList({ navigation }: TodoListProps) {
  const { editTodo } = useTodosContext();
  const filteredTodos = useFilteredTodos();
  const todosReverse = [...filteredTodos].reverse();

  function toggleTodo(todo: Todo) {
    const newTodo = { ...todo };
    newTodo.checked = !newTodo.checked;
    editTodo(newTodo.id, newTodo);
  }

  function goToEditTodo(id: number) {
    navigation.navigate("EditTodo", {
      todoId: id,
    });
  }

  return (
    <View style={styles.content}>
      <AddTodoButton onPress={() => navigation.navigate("NewTodo")} />
      <FlatList
        style={styles.todoList}
        renderItem={({ item }) => (
          <TodoItem
            onLongPress={() => goToEditTodo(item.id)}
            onPress={() => toggleTodo(item)}
            checked={item.checked}
            key={item.id}
            name={item.name}
          />
        )}
        data={todosReverse}
      />
    </View>
  );
}
