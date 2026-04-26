import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import "./app.css";

function App() {
  const todos = useQuery(api.todos.list) || [];
  const createTodo = useMutation(api.todos.add);
  const [text, setText] = useState("");

  async function handleAddTodo() {
    if (!text) {
      return;
    }

    await createTodo({ text });
    setText("");
  }

  return (
    <main className="app">
      <h1>Todo App</h1>
      <p className="description">A small React + Convex example.</p>

      <div className="form">
        <input
          className="input"
          type="text"
          placeholder="Add a todo"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button className="button" type="button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul className="list">
        {todos.map((todo) => (
          <li key={todo._id} className="listItem">
            {todo.text}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
