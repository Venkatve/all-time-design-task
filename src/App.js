

import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  const handleUser=(e)=>{
    setTasks(e.target.value)
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleAddTodo = () => {
    if (task && date && time) {
      const newTodo = {
        task: task,
        date: date,
        time: time,
        tasks: tasks,
      };
      setTodos([...todos, newTodo]);
      setTask('');
      setDate('');
      setTime('');
      setTasks('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className='first'>
      <h1>Tasks</h1>
      <div className='box'>
        <h2>Task Description</h2>
        <input
        className='second'
          type="text"
          placeholder="Task"
          value={task}
          onChange={handleTaskChange}
        />
        <div className='third'>
          <div>
          <h2>Date</h2>
        <input
        className='third1'
          type="date"
          placeholder="Date"
          value={date}
          onChange={handleDateChange}
        />
        </div>
        <div>
        <h2>Time</h2>
        <input
        className='third2'
          type="time"
          placeholder="Time"
          value={time}
          onChange={handleTimeChange}
        />
        </div>
        </div>
        <div>
        <h2>Assign User</h2>
        <input
        className='fourth'
          type="text"
          placeholder="User"
          value={tasks}
          onChange={handleUser}
        />
        </div>
        
        <div className='fifth'>
        <button className='fifth1'>Cancel</button>
        <button onClick={handleAddTodo} className='fifth2'>Save</button></div>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo.task}</span><>  </>
            <span>{todo.date}</span><>-</>
            <span>{todo.time}</span><>  </>
            <span>{todo.tasks}</span><>  </>
            <button onClick={() => handleDeleteTodo(index)} className='sixth'>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

