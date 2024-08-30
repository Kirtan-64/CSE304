import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    handleFilterTasks();
  }, [tasks, filterStatus, searchQuery]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
    setEditingTask(null); // Reset the editing state
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleFilterTasks = () => {
    let filtered = tasks;

    if (filterStatus === 'completed') {
      filtered = filtered.filter(task => task.completed);
    } else if (filterStatus === 'not-completed') {
      filtered = filtered.filter(task => !task.completed);
    }

    if (searchQuery) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredTasks(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">To-Do List</h1>
        <TaskForm 
          addTask={addTask} 
          updateTask={updateTask} 
          editingTask={editingTask} 
        />
        <TaskFilter 
          setFilterStatus={setFilterStatus} 
          setSearchQuery={setSearchQuery} 
        />
        <TaskList 
          tasks={filteredTasks} 
          deleteTask={deleteTask} 
          toggleTaskCompletion={toggleTaskCompletion} 
          setEditingTask={setEditingTask} 
        />
      </div>
    </div>
  );
}

export default App;
