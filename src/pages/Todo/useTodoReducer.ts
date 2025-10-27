import { useEffect, useReducer } from "react";
import { reducerFunction } from "./reducerFunction";
import type { UpdateTodoPayload } from "./types";

export const useTodoReducer = () => {
  const initialState = JSON.parse(localStorage.getItem("todos") || "[]");

  const [todos, dispatch] = useReducer(reducerFunction, initialState);

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (description: string) => {
    const newTodo = {
      id: Date.now(),
      description,
      done: false,
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const handleDeleteTodo = (id: number) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleCompleteTodo = (id: number) => {
    dispatch({ type: "COMPLETE_TODO", payload: id });
  };

  const handleUpdateTodo = (payload: UpdateTodoPayload) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: payload,
    });
  };

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleAddTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  };
};