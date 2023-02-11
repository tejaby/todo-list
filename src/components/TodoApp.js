import { useState } from "react";
import Todo from "./Todo";

function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
  };

  function onUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  }

  function onDelete(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center rounded p-2 todoForm mb-2">
        <input
          autoFocus
          onChange={handleChange}
          value={title}
          placeholder="Agregar tarea"
          className="form-control todoInput"
        />
        <input type="submit" value="Guardar" className="btn btn-primary btn-lg todoSave" />
      </form>
      <div className="d-flex flex-column align-items-center rounded todoList">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
