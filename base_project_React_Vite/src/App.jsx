import React, { useState } from 'react';
import TaskList from './components/taskList/TaskList';
import AddTask from './components/addTask/AddTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="app-container p-4 bg-white rounded shadow">
        <h2 className="mb-4">LISTA DE TAREAS</h2>
        <AddTask addTask={addTask} />
        <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
