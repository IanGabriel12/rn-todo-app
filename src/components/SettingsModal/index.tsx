import { Modal, View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ReactSetState from "../../types/ReactSetState";
import SettingOption from "../SettingOption";
import styles from "./styles";
import Colors from "../../styles/colors";
import useSettingsContext from "../../hooks/useSettingsContext";

type SettingsModalProps = {
  visible: boolean;
  setVisible: ReactSetState<boolean>;
};

export default function SettingsModal(props: SettingsModalProps) {
  const { settings, setSettings } = useSettingsContext();

  function toggleUndoneTasks() {
    setSettings({ ...settings, showUndoneTasks: !settings.showUndoneTasks });
  }

  function toggleDoneTasks() {
    setSettings({ ...settings, showDoneTasks: !settings.showDoneTasks });
  }

  return (
    <Modal visible={props.visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Settings</Text>
            <TouchableOpacity onPress={() => props.setVisible(false)}>
              <MaterialIcons name="close" size={30} color={Colors.red} />
            </TouchableOpacity>
          </View>

          <SettingOption
            checked={settings.showUndoneTasks}
            setOption={toggleUndoneTasks}
            name="Show undone tasks"
          />
          <SettingOption
            checked={settings.showDoneTasks}
            setOption={toggleDoneTasks}
            name="Show done tasks"
          />
        </View>
      </View>
    </Modal>
  );
}
