import React, { useState } from "react";

const DynamicListRendering = (props) => {
  const defaultTodos = props.todos || [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a Todo App" },
    { id: 3, text: "Deploy the App" },
  ];

  const [todos, setTodos] = useState(defaultTodos);
  const [newtodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newtodo.trim() === "") {
      alert("Please enter a todo item.");
      return;
    }

    const newTodoItem = {
      id: todos.length + 1,
      text: newtodo,
    };

    setTodos([...todos, newTodoItem]); // ✅ correct state update
    setNewTodo("");
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleRemoveTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
      <h2>Add a Task</h2>
      <input
        type="text"
        value={newtodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default DynamicListRendering;
