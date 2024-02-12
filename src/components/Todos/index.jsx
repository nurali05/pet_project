import React from 'react';
import { useEffect, useState } from 'react';
import './Todos.css';
function Todos() {
  const [todos, setTodos] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [checkBox, setCheckBox] = useState(false);

  async function getTodos() {
    const response = await fetch('https://65b3d06b770d43aba47a7d61.mockapi.io/api/v1/todos');
    const data = await response.json();
    console.log(data);
    setTodos(data);
  }
  useEffect(() => {
    getTodos();
  }, []);
  async function addTask() {
    const obj = {
      title: inputTitle,
      completed: checkBox,
    };
    console.log(obj);
    const response = await fetch('https://65b3d06b770d43aba47a7d61.mockapi.io/api/v1/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    });

    console.log(response);
    getTodos();
  }
  async function changeTaskStatus(id, status) {
    const response = await fetch('https://65b3d06b770d43aba47a7d61.mockapi.io/api/v1/todos/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: status }),
    });

    console.log(response);
    getTodos();
  }
  async function deleteTask(id) {
    const response = await fetch('https://65b3d06b770d43aba47a7d61.mockapi.io/api/v1/todos/' + id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response);
    getTodos();
  }
  return (
    <div className="container">
      <div className="create__todo">
        <input
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
          type="text"
          name="title"
        />

        <button onClick={addTask}>Добавить</button>
      </div>
      <div className="todos__header">
        <div className="title__id">
          <p>ID</p>
          <p>Название</p>
        </div>
        <p>Сделано</p>
      </div>
      <div className="todos__block">
        {todos.map((el, i) => {
          return (
            <div key={i} className="todo__item">
              <div className="title__id">
                <p className="todo__id">{el.id}</p>
                <p className="todo__title">{el.title}</p>
              </div>
              <div>
                <span className={`todo__completed ${!el.completed && 'notcompleted'}`}>
                  {el.completed == true ? 'Сделано' : 'Еще нет'}
                </span>
                <button
                  className="changeBtn"
                  onClick={() => changeTaskStatus(el.id, !el.completed)}
                >
                  Изменить
                </button>
                <button className="deleteBtn" onClick={() => deleteTask(el.id)}>
                  Удалить
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
