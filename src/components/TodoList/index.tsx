import { View, Text, TouchableOpacity, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import Colors from "../../styles/colors";
import { useState } from "react";
import Checkbox from "../Checkbox";
import SettingOption from "../SettingOption";
import AddTodoButton from "../AddTodoButton";

export default function TodoList() {
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
  const [showUndoneTasks, setShowUndoneTasks] = useState(true);
  const [showDoneTasks, setShowDoneTasks] = useState(true);

  function openSettingsModal() {
    setIsSettingsModalVisible(true);
  }

  function closeSettingsModal() {
    setIsSettingsModalVisible(false);
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

      <Modal visible={isSettingsModalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Settings</Text>
              <TouchableOpacity onPress={closeSettingsModal}>
                <MaterialIcons name="close" size={30} color={Colors.red} />
              </TouchableOpacity>
            </View>

            <SettingOption
              checked={showUndoneTasks}
              setOption={setShowUndoneTasks}
              name="Show undone tasks"
            />
            <SettingOption
              checked={showDoneTasks}
              setOption={setShowDoneTasks}
              name="Show done tasks"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
