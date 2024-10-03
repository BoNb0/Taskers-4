import { useEffect, useState } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api/",
});
export default function TodoList() {
  const [todos, setTodos] = useState("");
  const [msg, setMsg] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fecthAPIGet();
  }, []);

  const fecthAPIGet = async () => {
    const getTodos = async () => {
      const response = await instance.get("todos");

      setTodos(response.data);
    };

    getTodos();
  };

  const fecthAPIPost = async (e) => {
    const response = await instance.post("todos", { title: content });
    console.log(content);
    setMsg(response.data.msg);
    fecthAPIGet();
  };

  const fecthAPIDelete = async (taskId) => {
    console.log(taskId);
    const response = await instance.delete(`todos/${taskId}`);
    setMsg(response.data.msg);
    console.log("Sucess");
    fecthAPIGet();
  };

  const fecthAPIPut = async (taskId, taskStatus) => {
    const response = await instance.put(`todos/${taskId}`, { isCompleted: taskStatus });
    console.log(response.data.modifiedCount);
    setMsg(response.data.msg);
    fecthAPIGet();
  };

  function handleClickGet() {
    fecthAPIGet();
  }
  function handleClickPost(e) {
    e.preventDefault();
    fecthAPIPost();
    setContent("");
  }
  function handleClickDelete(taskId) {
    fecthAPIDelete(taskId);
  }
  function handleClickPut(taskId, taskStatus) {
    fecthAPIPut(taskId, taskStatus);
  }

  return (
    <>
      <div>
        <h1>Taskers 4</h1>
        <form onSubmit={handleClickPost}>
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
          <br />
          <button type="submit">Post</button>
        </form>
        <br />
        <button onClick={handleClickGet}>Get</button>

        <h3>{msg}</h3>
        <br />
        <div>
          {todos.length > 0 &&
            todos.map((todo, index) => (
              <div key={index}>
                <pre>Title : {todo.title}</pre>
                <pre>Completed : {JSON.stringify(todo.isCompleted)}</pre>
                <button
                  onClick={() => {
                    handleClickDelete(todo._id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    handleClickPut(todo._id, todo.isCompleted);
                  }}
                >
                  Put
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
