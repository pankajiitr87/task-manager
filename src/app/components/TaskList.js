const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
    // Sort by priority and completed status
    const sortedTasks = tasks.slice().sort((a, b) => {
      const priorityOrder = { high: 1, medium: 2, low: 3 };
  
      // Completed tasks should appear after incomplete tasks
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }
  
      // If both tasks are either completed or incomplete, sort by priority
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  
    return (
      <ul>
        {sortedTasks.map((task) => (
          <li key={task.id} style={{ backgroundColor: getPriorityColor(task.priority) }}>
            <h3>{task.title} {task.completed ? "(Completed)" : ""}</h3>
            <p>{task.description}</p>
            <button onClick={() => onToggle(task.id)}>Toggle Complete</button>
            <button onClick={() => onEdit(task)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  const getPriorityColor = (priority) => {
    if (priority === "high") return "red";
    if (priority === "medium") return "yellow";
    return "green";
  };
  
  export default TaskList;
  