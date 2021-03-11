import { Button } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
function App() {
  const [toDoList, setToDoList] = useState([
    "Take dogs for a walk",
    "Take the rubbish out",
  ]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    setToDoList([...toDoList, input]);
    setInput("");
  };

  return (
    <div className="App">
      <form>
        <input
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {toDoList.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
