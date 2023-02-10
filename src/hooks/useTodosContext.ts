import { useContext } from "react";
import { todosContext } from "../contexts/TodosContext";

export default function useTodosContext() {
  const context = useContext(todosContext);
  return context;
}