import { useState, useEffect, createContext, PropsWithChildren } from "react";
import ReactSetState from "../types/ReactSetState";

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
    showDoneTasks: false,
    showUndoneTasks: false,
  },
  setSettings: () => {},
});

export function SettingsProvider({ children }: PropsWithChildren) {
  const [settings, setSettings] = useState({
    showDoneTasks: false,
    showUndoneTasks: false,
  });

  useEffect(() => {
    // load at start
  }, []);

  useEffect(() => {
    //save
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
