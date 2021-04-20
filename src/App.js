import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';

function App() {
  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [filterdTodo, setFilteredTodo] = useState([])
  const [optionState, setOptionState] = useState('All')

  useEffect(() => {
    selectHandler()
  }, [optionState, todos])

  const selectHandler = () => {
    switch (optionState) {
      case 'Compeleted':
        setFilteredTodo(todos.filter(todo => todo.completed === true))
        break
      case 'Incompleted':
        setFilteredTodo(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodo(todos)
    }
  }
  
  return (
    <div className="App">
      <Form
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        todos={todos}
        setTodos={setTodos}
        filterdTodo={filterdTodo}
        setFilteredTodo={setFilteredTodo}
        setOptionState={setOptionState}
        optionState={optionState}
      />
      <Todos todos={filterdTodo} setTodos={setTodos} />
    </div>
  );
}

export default App;
