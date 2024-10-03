import { useEffect, useState } from "react";
import axios from "axios";

export default function TestTodo() {
  const url = "http://localhost:4000/hello";

  const [todos, setTodos] = useState([]);

  const fecthAPI = async () => {
    const response = await axios.get(url);
    setTodos(response.data.msg);
    console.log(response.data.msg);
  };

  const fecthAPI2 = async () => {
    const res = await fetch(url);
    const tasks = await res.json();

    setTodos(tasks.msg);
    console.log(tasks.msg);
  };

  function handleClick() {
    fecthAPI2();
  }

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <h1>Awesome Todos</h1>
        <button onClick={handleClick}>Click me</button>
        {todos.map((msg, index) => (
          <div key={index}>
            <p>{msg}</p>
          </div>
        ))}
      </div>
    </>
  );
}
