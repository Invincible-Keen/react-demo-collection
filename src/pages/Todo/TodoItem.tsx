import { FaTrash } from "react-icons/fa";
import { TodoUpdate } from "./TodoUpdate";
import type { Todo, UpdateTodoPayload } from "./types";
import styles from "./Todo.module.css";

// Define component props interface
interface TodoItemProps {
    todo: Todo;                     // Single todo item data
    handleUpdateTodo: (updatedTodo: UpdateTodoPayload) => void; // Update handler
    handleDeleteTodo: (id: number) => void;     // Delete handler
    handleCompleteTodo: (id: number) => void;   // Toggle completion handler
}

export function TodoItem({
    todo,
    handleUpdateTodo,
    handleDeleteTodo,
    handleCompleteTodo,
}: TodoItemProps) {
    return (
        <li>
            {/* Completion toggle area */}
            <span
                onClick={() => handleCompleteTodo(todo.id)}
                role="button"              // Accessibility enhancement
                aria-label={todo.done ? "Mark as incomplete" : "Mark as complete"}
                tabIndex={0}               // Keyboard focus support
            >
                {/* Custom checkbox style */}
                <label
                    className={`${styles["container-done"]} ${todo.done ? styles["active"] : ""}`}
                    aria-checked={todo.done}  // Screen reader state indicator
                />
            </span>

            {/* Update component */}
            <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />

            {/* Delete button */}
            <button className={styles["btn-delete"]} onClick={() => handleDeleteTodo(todo.id)} aria-label="Delete task">
                <FaTrash />
            </button>
        </li>
    );
}