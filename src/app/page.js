"use client"; // Make this a Client Component

import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./globals.css"; // Import the CSS file for responsive design

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task, completed: false }]);
  };

  const editExistingTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task));
    setEditTask(null);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Task Management App</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <TaskForm onAdd={addTask} onEdit={editExistingTask} editTask={editTask} />
      <TaskList tasks={filteredTasks} onToggle={toggleComplete} onDelete={deleteTask} onEdit={setEditTask} />
    </div>
  );
};

export default Home;
