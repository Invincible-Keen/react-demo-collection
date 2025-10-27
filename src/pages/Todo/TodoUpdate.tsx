import { useState, useRef, type FormEvent } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import type { Todo } from "./types";
import styles from "./Todo.module.css";

interface TodoUpdateProps {
  todo: Todo;
  handleUpdateTodo: (updatedTodo: { id: number; description: string }) => void;
}

export function TodoUpdate({ todo, handleUpdateTodo }: TodoUpdateProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newDescription, setNewDescription] = useState<string>(todo.description);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      handleUpdateTodo({
        id: todo.id,
        description: newDescription
      });
    }
    setIsEditing(!isEditing);
    setTimeout(() => inputRef.current?.focus(), 0); // 确保焦点切换
  };

  const handleEditClick = () => {
    if (!isEditing) {
      setNewDescription(todo.description); // 重置为原始值
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={`${styles["input-update"]} ${todo.done ? styles["text-decoration-dashed"] : ""}`}
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        placeholder="Edit your task"
        ref={inputRef}
        readOnly={!isEditing}
        aria-label="Task description"
      />

      <button
        type="submit"
        className={isEditing ? styles["btn-save"] : styles["btn-edit"]}
        aria-label={isEditing ? "Save changes" : "Edit task"}
        onClick={handleEditClick}
      >
        {isEditing ? <FaSave /> : <FaEdit />}
      </button>
    </form>
  );
}