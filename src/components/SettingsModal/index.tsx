import { Modal, View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ReactSetState from "../../types/ReactSetState";
import SettingOption from "../SettingOption";
import styles from "./styles";
import Colors from "../../styles/colors";

type SettingsModalProps = {
  visible: boolean;
  setVisible: ReactSetState<boolean>;
  showUndoneTasks: boolean;
  setShowUndoneTasks: ReactSetState<boolean>;
  showDoneTasks: boolean;
  setShowDoneTasks: ReactSetState<boolean>;
};

export default function SettingsModal(props: SettingsModalProps) {
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
            checked={props.showUndoneTasks}
            setOption={props.setShowUndoneTasks}
            name="Show undone tasks"
          />
          <SettingOption
            checked={props.showDoneTasks}
            setOption={props.setShowDoneTasks}
            name="Show done tasks"
          />
        </View>
      </View>
    </Modal>
  );
}
