import { useState } from "react";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([
    "Take dogs for a walk",
    "Take the rubbish out",
  ]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setToDoList([...toDoList, input]);
  };

  return (
    <div className="App">
      <input
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {toDoList.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
