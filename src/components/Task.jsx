import React from "react";
import { trash } from "../assets";
import styles from "../styles/task.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
const Task = ({ task, onCompleted, onDelete }) => {
  return (
    <div className={styles.task}>
      <button className={styles.check} onClick={() => onCompleted(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button className={styles.delete} onClick={() => onDelete(task.id)}>
        <img src={trash} alt="trash" />
      </button>
    </div>
  );
};

export default Task;
