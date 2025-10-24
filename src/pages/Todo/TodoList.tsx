import { TodoItem } from "./TodoItem";
import type { Todo } from "./reducerFunction"; // Import your Todo type

interface TodoListProps {
  todos: Todo[];
  onUpdateTodo: (updatedTodo: { id: number; description: string }) => void;
  onDeleteTodo: (id: number) => void;
  onCompleteTodo: (id: number) => void;
}

export function TodoList({
  todos,
  onUpdateTodo,
  onDeleteTodo,
  onCompleteTodo,
}: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleUpdateTodo={onUpdateTodo}
          handleDeleteTodo={onDeleteTodo}
          handleCompleteTodo={onCompleteTodo}
        />
      ))}
    </ul>
  );
}