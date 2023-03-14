import React from "react";
import styles from "../styles/tasks.module.css";
import Task from "./Task";
const Tasks = ({ tasks, onCompleted, onDelete }) => {
  const taskQuantity = tasks.length;
  const completedTask = tasks.filter((task) => task.isCompleted).length;
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Create tasks</p>
          <span>{taskQuantity}</span>
        </div>
        <div>
          <p>Completed tasks</p>
          <span>
            {completedTask} of {taskQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onCompleted={onCompleted}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default Tasks;
