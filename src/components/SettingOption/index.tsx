import { Pressable, View, Text } from "react-native";
import ReactSetState from "../../types/ReactSetState";
import Checkbox from "../Checkbox";
import styles from "./styles";

type SettingOptionProps = {
  checked?: boolean;
  name: string;
  setOption: ReactSetState<boolean>;
};

export default function SettingOption(props: SettingOptionProps) {
  return (
    <Pressable onPress={() => props.setOption(!props.checked)}>
      <View style={styles.optionContainer}>
        <Checkbox checked={props.checked} />
        <Text style={styles.optionName}>{props.name}</Text>
      </View>
    </Pressable>
  );
}
