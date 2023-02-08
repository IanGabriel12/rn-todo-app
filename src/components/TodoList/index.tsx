import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import Colors from "../../styles/colors";
import { useState } from "react";
import AddTodoButton from "../AddTodoButton";
import SettingsModal from "../SettingsModal";
import TodoItem from "../TodoItem";

export default function TodoList() {
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
  const [showUndoneTasks, setShowUndoneTasks] = useState(true);
  const [showDoneTasks, setShowDoneTasks] = useState(true);
  const [todos, setTodos] = useState<{ name: string; checked: boolean }[]>([]);

  const todosReverse = [...todos].reverse();

  function openSettingsModal() {
    setIsSettingsModalVisible(true);
  }

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
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Todo List</Text>
        <TouchableOpacity onPress={openSettingsModal}>
          <MaterialIcons name="settings" size={30} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <AddTodoButton onPress={addTodo} />
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

      <SettingsModal
        visible={isSettingsModalVisible}
        setVisible={setIsSettingsModalVisible}
        showDoneTasks={showDoneTasks}
        showUndoneTasks={showUndoneTasks}
        setShowDoneTasks={setShowDoneTasks}
        setShowUndoneTasks={setShowUndoneTasks}
      />
    </View>
  );
}
