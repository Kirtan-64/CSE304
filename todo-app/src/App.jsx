// src/App.jsx
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const PRIORITY_COLORS = {
  1: 'bg-gray-200',
  2: 'bg-blue-200',
  3: 'bg-green-200',
  4: 'bg-yellow-200',
  5: 'bg-red-200',
};

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newPriority, setNewPriority] = useState(1);
  const [newDueDate, setNewDueDate] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [completionFilter, setCompletionFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTask,
          priority: newPriority,
          dueDate: newDueDate,
          completed: false,
        },
      ]);
      setNewTask('');
      setNewPriority(1);
      setNewDueDate('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesPriority =
      priorityFilter === 'all' || task.priority.toString() === priorityFilter;
    const matchesCompletion =
      completionFilter === 'all' ||
      (completionFilter === 'completed' && task.completed) ||
      (completionFilter === 'active' && !task.completed);
    const matchesSearch = task.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesPriority && matchesCompletion && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">To-Do List</h1>
        <div className="mb-4 flex space-x-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={newPriority}
            onChange={(e) => setNewPriority(Number(e.target.value))}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {[1, 2, 3, 4, 5].map((priority) => (
              <option key={priority} value={priority}>
                Priority {priority}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Task
          </button>
        </div>
        <div className="mb-4 flex space-x-2">
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Priorities</option>
            {[1, 2, 3, 4, 5].map((priority) => (
              <option key={priority} value={priority}>
                Priority {priority}
              </option>
            ))}
          </select>
          <select
            value={completionFilter}
            onChange={(e) => setCompletionFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Tasks</option>
            <option value="active">Active Tasks</option>
            <option value="completed">Completed Tasks</option>
          </select>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search tasks"
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`p-4 rounded-lg shadow-md ${
                PRIORITY_COLORS[task.priority]
              } ${task.completed ? 'opacity-50' : ''}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    className="h-5 w-5 text-blue-600"
                  />
                  <input
                    type="text"
                    value={task.text}
                    onChange={(e) => updateTask(task.id, e.target.value)}
                    className="bg-transparent focus:outline-none"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  {task.dueDate && (
                    <span className="text-sm text-gray-600">
                      Due: {format(new Date(task.dueDate), 'MMM d, yyyy')}
                    </span>
                  )}
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;