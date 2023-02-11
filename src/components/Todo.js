import { useState } from "react";

function Todo({ todo, onUpdate, onDelete }) {
  const [edit, setEdit] = useState(false);

  const FormEdit = () => {
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleSubmit = (e) => {
      e.preventDefault();
      onUpdate(todo.id, newTitle);
      setEdit(false);
    };

    const handleChange = (e) => {
      setNewTitle(e.target.value);
    };

    return (
      <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center p-2 todoUpdate">
        <input
          onChange={handleChange}
          type="text"
          className="form-control todoInputUpdate"
          value={newTitle}
        ></input>
        <button className="btn btn-primary">Update</button>
      </form>
    );
  };

  const TodoElement = () => {
    return (
      <div className="d-flex justify-content-center gap-2 p-2 todo">
        <h3>{todo.title}</h3>
        <button onClick={() => setEdit(true)} className="btn btn-primary">Edit</button>
        <button onClick={() => onDelete(todo.id)} className="btn btn-danger">Delete</button>
      </div>
    );
  };

  return <>{edit ? <FormEdit /> : <TodoElement />}</>;
}

export default Todo;
