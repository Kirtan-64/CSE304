import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TaskForm({ addTask, updateTask, editingTask }) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDueDate(editingTask.dueDate || '');
    } else {
      setTitle('');
      setDueDate('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      if (editingTask) {
        updateTask({ ...editingTask, title, dueDate });
      } else {
        addTask({
          id: uuidv4(),
          title,
          completed: false,
          dueDate: dueDate || null,
        });
      }
      setTitle('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input 
        type="text" 
        className="w-full p-2 mb-2 border rounded" 
        placeholder="Add new task..." 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="date" 
        className="w-full p-2 mb-2 border rounded" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
      />
      <button 
        type="submit" 
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
}

export default TaskForm;
