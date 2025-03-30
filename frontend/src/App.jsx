import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo List</h1>
        <p>{currentTime.toLocaleString()}</p>
      </header>
      <TodoList />
    </div>
  );
}

export default App;