export interface UpdateTodoPayload {
  id: number;
  description: string;
}
export interface Todo {
  id: number;
  description: string;
  done: boolean;
}
export type TodoAction = 
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "COMPLETE_TODO"; payload: number }
  | { type: "UPDATE_TODO"; payload: UpdateTodoPayload };