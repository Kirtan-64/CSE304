import React from 'react';

function TaskList({ tasks, deleteTask, toggleTaskCompletion, setEditingTask }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li 
          key={task.id} 
          className={`p-4 border rounded-lg ${task.completed ? 'bg-green-100' : 'bg-gray-50'} flex justify-between items-center`}
        >
          <div className="flex items-center">
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleTaskCompletion(task.id)} 
              className="mr-2"
            />
            <span className={`font-semibold ${task.completed ? 'line-through' : ''}`}>
              {task.title}
            </span>
            {task.dueDate && (
              <span className="text-sm text-gray-500 ml-2">
                (Due: {task.dueDate})
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setEditingTask(task)} 
              className="bg-yellow-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
            <button 
              onClick={() => deleteTask(task.id)} 
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
