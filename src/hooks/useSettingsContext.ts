import { useContext } from "react"
import { settingsContext } from "../contexts/SettingsContext"

export default function useSettingsContext() {
  const context = useContext(settingsContext);
  return context
}