import { View, FlatList } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import styles from "./styles";
import { useState } from "react";
import AddTodoButton from "../../components/AddTodoButton";
import TodoItem from "../../components/TodoItem";
import { StackParamList } from "../../router/router";

type TodoListProps = StackScreenProps<StackParamList, "TodoList">;

export default function TodoList({ navigation }: TodoListProps) {
  const [todos, setTodos] = useState<{ name: string; checked: boolean }[]>([]);
  const todosReverse = [...todos].reverse();

  function addTodo() {
    const todosCopy = [...todos];
    todosCopy.push({ name: "To do " + todosCopy.length, checked: false });
    setTodos(todosCopy);
  }

  function toggleTodo(index: number) {
    const todosCopy = [...todos];
    todosCopy[index].checked = !todosCopy[index].checked;
    setTodos(todosCopy);
  }

  return (
    <View style={styles.content}>
      <AddTodoButton onPress={() => navigation.navigate("NewTodo")} />
      <FlatList
        style={styles.todoList}
        renderItem={({ item, index }) => (
          <TodoItem
            onLongPress={() => {}}
            onPress={() => toggleTodo(todos.length - index - 1)}
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
