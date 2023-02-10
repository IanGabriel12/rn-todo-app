import useSettingsContext from "./useSettingsContext";
import useTodosContext from "./useTodosContext";

export default function useFilteredTodos() {
  const { todos } = useTodosContext();
  const { settings } = useSettingsContext();

  return todos.filter(todo => {
    let valid = false;
    if(settings.showDoneTasks) valid = valid || todo.checked;
    if(settings.showUndoneTasks) valid = valid || !todo.checked;
    return valid;
  })
}