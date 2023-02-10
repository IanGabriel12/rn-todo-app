import { StackHeaderProps } from "@react-navigation/stack";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../styles/colors";
import styles from "./styles";
import SettingsModal from "../SettingsModal";
import { useState } from "react";

export default function Header(props: StackHeaderProps) {
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);

  function showHelpAlert() {
    Alert.alert("Help", "Touch to check the task. \nHold to edit it.", [
      {
        text: "OK",
      },
    ]);
  }
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.options.title}</Text>
      <View style={styles.headerButtons}>
        <TouchableOpacity onPress={showHelpAlert}>
          <MaterialIcons
            name="help"
            size={30}
            color={Colors.white}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsSettingsModalVisible(true)}>
          <MaterialIcons name="settings" size={30} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <SettingsModal
        visible={isSettingsModalVisible}
        setVisible={setIsSettingsModalVisible}
      />
    </View>
  );
}
