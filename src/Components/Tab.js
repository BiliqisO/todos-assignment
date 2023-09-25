// TabComponent.js
import { useState, useEffect } from "react";
import Completed from "./Completed";
import UnCompleted from "./Uncompleted";
import Todos from "./Todos";

function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let canceled = false;
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        if (!canceled) {
          setTodos(data.slice(0, 10));
        }
      });
    return () => (canceled = true);
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [newTodo, setNewTodo] = useState("");
  const handleCreateNewTodo = () => {
    const newTodos = [
      ...todos,
      {
        id: todos.length + 1,
        title: newTodo,
        completed: false,
      },
    ];
    setTodos(newTodos);
    setNewTodo("");
  };
  return (
    <div>
      <div className="newtodowrapper">
        <input
          className="newtodo"
          type="text"
          placeholder="Add New "
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          onClick={handleCreateNewTodo}
          className="add"
          disabled={newTodo === ""}
        >
          Add
        </button>
      </div>
      <div className="tab-buttons">
        <button
          className={`tabs ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          COMPLETED
        </button>
        <button
          className={`tabs ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          UNCOMPLETED
        </button>
        <button
          className={`tabs ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          ALL
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 0 && (
          <div>
            {" "}
            <Completed
              todos={todos}
              setTodos={setTodos}
            />
          </div>
        )}
        {activeTab === 1 && (
          <div>
            {" "}
            <UnCompleted
              todos={todos}
              setTodos={setTodos}
            />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            {" "}
            <Todos
              todos={todos}
              setTodos={setTodos}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TabComponent;
