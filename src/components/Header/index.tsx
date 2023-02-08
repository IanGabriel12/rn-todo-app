import { StackHeaderProps } from "@react-navigation/stack";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../styles/colors";
import styles from "./styles";
import SettingsModal from "../SettingsModal";
import { useState } from "react";

export default function Header(props: StackHeaderProps) {
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);
  const [showUndoneTasks, setShowUndoneTasks] = useState(true);
  const [showDoneTasks, setShowDoneTasks] = useState(true);

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.options.title}</Text>
      <TouchableOpacity onPress={() => setIsSettingsModalVisible(true)}>
        <MaterialIcons name="settings" size={30} color={Colors.white} />
      </TouchableOpacity>

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
