import { useState } from "react";
function UnCompleted({ todos, setTodos }) {
  const [editId, setEditId] = useState(null);

  function handleCheck(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  }
  function handleEdit(e) {
    const newTodos = todos.map((todo) =>
      todo.id === editId ? { ...todo, title: e.target.value } : todo
    );
    setTodos(newTodos);
  }
  function handleDelete(id) {
    const targetTodoIndex = todos.findIndex((todo) => todo.id === id);

    const newTodos = [...todos];
    newTodos.splice(targetTodoIndex, 1);
    setTodos(newTodos);
  }

  const uncompletedTodo = todos.filter((todo) => todo.completed === false);
  const allTodos = uncompletedTodo.map((todo) => (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleCheck(todo.id)}
        disabled={editId === todo.id}
      />
      {editId === todo.id ? (
        <input
          type="text"
          value={todo.title}
          onChange={handleEdit}
          required
        />
      ) : (
        <span className={`todo-title ${todo.completed && "checked"}`}>
          {todo.title}
        </span>
      )}
      <span>
        {editId === todo.id ? (
          <button
            onClick={() => setEditId(null)}
            disabled={todo.title === ""}
          >
            ✅
          </button>
        ) : (
          <button
            className="edit-button"
            onClick={() => setEditId(todo.id)}
            disabled={todo.completed}
          >
            ✏️
          </button>
        )}

        <button
          className="del-button"
          onClick={() => handleDelete(todo.id)}
        >
          🗑️
        </button>
      </span>
    </li>
  ));

  return (
    <>
      <div className="todo-wrapper">
        {uncompletedTodo.length === 0 ? (
          <p className="message"> get some work done</p>
        ) : (
          <ul>{allTodos}</ul>
        )}
      </div>
    </>
  );
}
export default UnCompleted;
