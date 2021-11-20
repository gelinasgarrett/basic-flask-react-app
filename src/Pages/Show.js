import React, { useState, useEffect } from "react";
import { Delete } from "../Components/Delete/delete";
import { Update } from "../Components/Update/update";
import { useParams, Link } from "react-router-dom";

export const Show = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, [id]);

  const handleFormChange = (inputValue) => {
    setInput(inputValue);
  };

  const handleFormSubmit = () => {
    fetch(`/api/update/${id}`, {
      method: "POST",
      body: JSON.stringify({
        id: id,
        content: input,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((message) => {
        updateTodo();
        setInput("");
      });
  };

  const updateTodo = () => {
    fetch(`/api/${id}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setTodo(data));
  };

  return (
    <div>
      {todo.length > 0 &&
        todo.map((data) => <div key="id">{data.content}</div>)}
      <Update
        id={id}
        userInput={input}
        onFormChange={handleFormChange}
        onFormSubmit={handleFormSubmit}
      />
      <Delete id={id} />
      <hr></hr>
      <Link to="/">Back to Todos</Link>
    </div>
  );
};
