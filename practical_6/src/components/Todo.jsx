// src/components/ToDo.jsx
import React, { useState } from 'react';
import { FiEdit2, FiTrash2, FiCheck, FiSave } from 'react-icons/fi';

function Todo({ todo, index, editTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(index, newTask);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTodo(index);
  };

  return (
    <div className="todo">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="todo-input"
          />
          <FiSave onClick={handleSave} className="icon" />
        </>
      ) : (
        <>
          <span className="todo-text">{todo.task}</span>
          <FiEdit2 onClick={handleEdit} className="icon" />
        </>
      )}
      <FiTrash2 onClick={handleDelete} className="icon" />
    </div>
  );
}

export default Todo;
