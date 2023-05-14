import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="todo-app">
      <h2>To-Do App</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? 'completed' : ''}
            onClick={() => handleToggleTask(task.id)}
          >
            {task.title}
            <button onClick={() => handleRemoveTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

// To use this To-Do app, you can create a new React component called TodoApp and use the provided code. The app maintains an array of tasks in the tasks state, and a string representing the new task in the newTask state.

// The handleInputChange function updates the newTask state as the user types in the input field.

// The handleAddTask function adds a new task to the tasks state when the form is submitted. It checks if the new task is not empty and then appends a new task object to the existing array of tasks, with a unique id, title, and completed status (initialized as false). It also clears the input field by resetting the newTask state.

// The handleToggleTask function toggles the completion status of a task when it is clicked. It updates the completed property of the respective task in the tasks state array.

// The handleRemoveTask function removes a task from the tasks state when the delete button is clicked. It filters out the task with the specified taskId from the tasks array.

// The render method displays the input field for adding tasks and the list of tasks. Each task is rendered as an li element with the task title. If a task is marked as completed, the completed CSS class is applied to the li element. Clicking on a task toggles its completion status. Each task also has a delete button that triggers the handleRemoveTask function when clicked.

// Remember to install React.js and any necessary dependencies before using this code.
