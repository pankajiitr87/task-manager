"use client"; // Make this a Client Component

import { useState, useEffect } from "react";

const TaskForm = ({ onAdd, onEdit, editTask }) => {
  const [title, setTitle] = useState(editTask?.title || "");
  const [description, setDescription] = useState(editTask?.description || "");
  const [priority, setPriority] = useState(editTask?.priority || "low");

  useEffect(() => {
    setTitle(editTask?.title || "");
    setDescription(editTask?.description || "");
    setPriority(editTask?.priority || "low");
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, description, priority };
    editTask ? onEdit(editTask.id, task) : onAdd(task);
    setTitle("");
    setDescription("");
    setPriority("low");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit">{editTask ? "Edit Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
