import React from 'react';

function TaskFilter({ setFilterStatus, setSearchQuery }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex space-x-2">
        <button 
          onClick={() => setFilterStatus('all')} 
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
        >
          All
        </button>
        <button 
          onClick={() => setFilterStatus('completed')} 
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
        >
          Completed
        </button>
        <button 
          onClick={() => setFilterStatus('not-completed')} 
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
        >
          Not Completed
        </button>
      </div>
      <input 
        type="text" 
        placeholder="Search tasks..." 
        onChange={(e) => setSearchQuery(e.target.value)} 
        className="p-2 border rounded w-full max-w-xs"
      />
    </div>
  );
}

export default TaskFilter;
