import React from 'react';
import './App.css';
function tarefas() {
  const arr = ['Acordar', 'Levantar', 'Dormir'];
  return (arr.map(element => App(element)))
}
function header() {
  return (<div id='header'>
    <h1>Lista de tarefas</h1>
  </div>)
}
function App(element) {
  return (
    <div>
      <p> {element} </p>
    </div>
  );
}

export default tarefas;
export { header };
