
//import React from "react";
// // 🔹 Problem 3: Todo List with LocalStorage (30 mins)
// Goal: Build a todo list with add, delete, and persist functionality.
// Features:

// Controlled input

// Display todos

// Save to and load from localStorage using useEffect

// Concepts Covered:
// ✅ useState + useEffect
// ✅ Forms
// ✅ Local storage
// ✅ CRUD logic
import React from "react";

const SimpleTodoList = () => {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");

  // Load todos from localStorage on initial render
  React.useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  // Handle add todo
  function addTodos(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const updatedTodos = [...todos, input];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setInput("");
  }

  // Handle delete
  function deleteTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodos}>
        <label htmlFor="todo">Add Todo:</label>
        <input
          type="text"
          id="todo"
          name="todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleTodoList;
