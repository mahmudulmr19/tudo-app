import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
const LOCAL_STORAGE_KEY = "tudo:savedTasks";
const App = () => {
  const [tasks, setTasks] = useState([]);

  const loadSavedTasks = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  };

  useEffect(() => {
    loadSavedTasks();
  }, []);

  const setTaskAndSave = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  const addTask = (taskTitle) => {
    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  const deleteTaskById = (taskId) => {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTaskAndSave(newTask);
  };

  const toggleTaskCompletedById = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTaskAndSave(newTask);
  };

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        onDelete={deleteTaskById}
        tasks={tasks}
        onCompleted={toggleTaskCompletedById}
      />
    </>
  );
};

export default App;
