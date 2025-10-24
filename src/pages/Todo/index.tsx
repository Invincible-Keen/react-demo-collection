import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { useTodoReducer } from "./useTodoReducer";
import styles from "./Todo.module.css";

export default function Todo() {
    const {
        todos,
        todosCount,
        pendingTodosCount,
        handleAddTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo,
    } = useTodoReducer();
  return (
    <div className={styles["card-to-do"]}>
            <h1>To-Do List App</h1>
            <div className={styles["counter-todos"]}>
                <h3>
                    Total Tasks: <span>{todosCount}</span>
                </h3>
                <h3>
                    Pending: <span>{pendingTodosCount}</span>
                </h3>
            </div>

            <div className={styles["add-todo"]}>
                <h3>Add New Task</h3>
                <TodoForm handleAddTodo={handleAddTodo} />
            </div>

            <TodoList
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
                onCompleteTodo={handleCompleteTodo}
                onUpdateTodo={handleUpdateTodo}
            />
        </div>
  );
}