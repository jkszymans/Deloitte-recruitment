import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function FormTodo({ addTodo }) {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titleInput || !descriptionInput) return;
    addTodo(titleInput, descriptionInput);
    setTitleInput("");
    setDescriptionInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <label>Description:</label>
      <input
        type="text"
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

function Todos() {
  const [todos, setTodos] = useState([]);

  const addTodo = (titleInput, descriptionInput) => {
    const newTodos = [
      ...todos,
      { title: titleInput, description: descriptionInput },
    ];
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <FormTodo addTodo={addTodo} />
      <ListGroup>
        {todos.map((todo, index) => (
          <ListGroup.Item key={index}>
            title: {todo.title} description: {todo.description}
            <Button onClick={(e) => deleteTodo(index)}>delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Todos;
