import type { Todo, TodoAction } from "./types";

export const reducerFunction = (initialState: Todo[], action : TodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...initialState, action.payload];

    case "DELETE_TODO":
      return initialState.filter((todo) => todo.id !== action.payload);

    case "COMPLETE_TODO":
      return initialState.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    case "UPDATE_TODO":
      return initialState.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, description: action.payload.description }
          : todo
      );

    default:
      return initialState;
  }
};