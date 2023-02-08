import { View, Text, TouchableOpacity, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import Colors from "../../styles/colors";
import { useState } from "react";
import AddTodoButton from "../AddTodoButton";
import SettingsModal from "../SettingsModal";

export default function TodoList() {
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
  const [showUndoneTasks, setShowUndoneTasks] = useState(true);
  const [showDoneTasks, setShowDoneTasks] = useState(true);

  function openSettingsModal() {
    setIsSettingsModalVisible(true);
  }

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Todo List</Text>
        <TouchableOpacity onPress={openSettingsModal}>
          <MaterialIcons name="settings" size={30} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <AddTodoButton />
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
