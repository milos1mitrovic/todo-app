import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import db from "./firebase";

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
      </ListItem>
      <Button
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      >
        DELETE ME
      </Button>
    </List>
  );
}

export default Todo;
