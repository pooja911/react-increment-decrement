import React, {useState} from 'react';
// import './App.css';
// import Header from "./Header";
// import ToDo from "./To_Do";

function App() {
  const[count,setCount]=useState(8);
 
  function decrement(){
    setCount(prevCount=>prevCount-1)
    // setCount(count=>count-1)

  }

  function increment(){
    setCount(prevCount=>prevCount+1)
  }

  return (
    <div className="ui container">
      <h1>basic increment/decrement</h1>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
    
  );
}

export default App;
