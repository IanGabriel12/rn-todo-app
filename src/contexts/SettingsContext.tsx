import { useState, useEffect, createContext, PropsWithChildren } from "react";
import ReactSetState from "../types/ReactSetState";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Settings = {
  showDoneTasks: boolean;
  showUndoneTasks: boolean;
};

type SettingsContextType = {
  settings: Settings;
  setSettings: ReactSetState<Settings>;
};

export const settingsContext = createContext<SettingsContextType>({
  settings: {
    showDoneTasks: true,
    showUndoneTasks: true,
  },
  setSettings: () => {},
});

export function SettingsProvider({ children }: PropsWithChildren) {
  const [settings, setSettings] = useState({
    showDoneTasks: true,
    showUndoneTasks: true,
  });

  useEffect(() => {
    AsyncStorage.getItem("@todoAppSettings").then((jsonValue) => {
      if (!jsonValue) return;
      setSettings(JSON.parse(jsonValue));
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("@todoAppSettings", JSON.stringify(settings));
  }, [settings]);

  return (
    <settingsContext.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {children}
    </settingsContext.Provider>
  );
}
