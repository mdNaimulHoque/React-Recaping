import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
// const pLanguage = [{name:'JavaScript', age: 35}, {name:'HTML', age: 35}, {name:'CSS', age: 34},{name:'Ruby', age: 33}, {name:'Oracal', age: 32}, {name:'Java', age: 36}]
  return (
    <div className="App">
      <YearCounter></YearCounter>
      {
        users.map(program => <Programming name={program.name} key={users.id} age={program.age}></Programming>)
      }
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function YearCounter () {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>add year</button>
      <h3>Number of Years :{count}</h3>
      <ProgCount program={count}></ProgCount>
    </div>
  );
}

function ProgCount (props) {
  return <h4>I have work: {props.program}</h4>
}

function Programming(props) {
  const pStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return <div style={pStyle}>
    <h1>I am {props.name} Programming...</h1>
    <h3>I have all ready live in {props.age || 5} years</h3>
  </div>
}
export default App;
