import { useState } from "react";
function Completed({ todos, setTodos }) {
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

  const completedTodo = todos.filter((todo) => todo.completed === true);
  const allTodos = completedTodo.map((todo) => (
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
        {completedTodo.length === 0 ? (
          <p className="message">You have no pending task</p>
        ) : (
          <ul>{allTodos}</ul>
        )}
      </div>
    </>
  );
}
export default Completed;
