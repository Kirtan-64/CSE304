// src/components/ToDoList.jsx
import React, { useState } from 'react';
import Todo from './Todo';
import { FiPlus } from 'react-icons/fi';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTodo = () => {
    if (newTask.trim() !== '') {
      setTodos([...todos, { task: newTask }]);
      setNewTask('');
    }
  };

  const editTodo = (index, newTask) => {
    const updatedTodos = [...todos];
    updatedTodos[index].task = newTask;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <h1 className="title">To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="input"
        />
        <FiPlus onClick={addTodo} className="add-icon" />
      </div>
      <div className="todos">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
