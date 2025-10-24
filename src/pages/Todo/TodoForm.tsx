import { useState, useRef, type FormEvent } from "react";
import styles from "./Todo.module.css";

interface TodoFormProps {
  handleAddTodo: (description: string) => void;
}

export function TodoForm({ handleAddTodo }: TodoFormProps) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleAddTodo(inputValue);
      setInputValue("");
      inputRef.current?.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles["input-add"]}
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new task..."
        aria-label="Add new task"
      />
      <button className={styles["btn-add"]} type="submit" disabled={!inputValue.trim()}>
        Add Task
      </button>
    </form>
  );
}
