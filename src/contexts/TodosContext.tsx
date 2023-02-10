import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

export type Todo = { id: number; name: string; checked: boolean };
type TodosContext = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  editTodo: (id: number, newTodo: Todo) => void;
  deleteTodo: (id: number) => void;
};

export const todosContext = createContext<TodosContext>({
  todos: [],
  addTodo: (todo: Todo) => {},
  editTodo: (id: number, newTodo: Todo) => {},
  deleteTodo: (id: number) => {},
});

export function TodosProvider({ children }: PropsWithChildren) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    AsyncStorage.getItem("@todoAppTodos").then((jsonValue) => {
      if (!jsonValue) return;
      setTodos(JSON.parse(jsonValue).todos);
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("@todoAppTodos", JSON.stringify({ todos }));
  }, [todos]);

  function addTodo(todo: Todo) {
    const todosCopy = [...todos];
    todosCopy.push(todo);
    setTodos(todosCopy);
  }

  function editTodo(id: number, newTodo: Todo) {
    const todosCopy = [...todos];
    const index = todosCopy.findIndex((todo) => todo.id === id);
    todosCopy[index] = newTodo;
    setTodos(todosCopy);
  }

  function deleteTodo(id: number) {
    const todosCopy = [...todos];
    const index = todosCopy.findIndex((todo) => todo.id === id);
    todosCopy.splice(index, 1);
    setTodos(todosCopy);
  }

  return (
    <todosContext.Provider
      value={{
        todos,
        addTodo,
        editTodo,
        deleteTodo,
      }}
    >
      {children}
    </todosContext.Provider>
  );
}
