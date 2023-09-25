import { useState } from "react";
import TabComponent from "./Components/Tab";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="todo-header"> MY TODO LIST</h1>
      <TabComponent />
    </div>
  );
}

export default App;
