import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import ToDo from "./ToDo";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      // console.log(snapshot.docs.map((doc) => doc.data()));
      setToDoList(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
    });

    // setToDoList([...toDoList, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>ToDo App </h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo </InputLabel>
          <Input
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </FormControl>

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
          <ToDo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
