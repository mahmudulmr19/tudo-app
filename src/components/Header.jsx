import React, { useState } from "react";
import { logo } from "../assets";
import styles from "../styles/header.module.css";

const header = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(title);
    setTitle("");
  };

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt={`tudo app logo`} />

      <form onSubmit={handleSubmit} className={styles.TaskForm}>
        <input
          type="text"
          placeholder="Add a new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Create</button>
      </form>
    </header>
  );
};

export default header;
