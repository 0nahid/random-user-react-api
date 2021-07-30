import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Data></Data>
        <Users></Users>
      </header>
    </div>
  );
}

function Data() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5000")
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);
  if (data.length < 1) {
    return <h2>Loading </h2>;
  }
  return (
    <div className="userContainer">
      <h1>Dynamic Users : {data.length} </h1>
      {data.map(person => {
        const { name } = person
        return <div className="userStyle">
          <h2>{name.first}</h2>
          <h2>{name.last}</h2>
        </div>
      })}
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() =>
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(data => setUsers(data))
  )
  return (
    <div className="userContainer">
      <h1>Dynamic Users : {users.length} </h1>
      {users.map(user =>
        <div className="userStyle">
          <h1>Name : {user.name} </h1>
          <h5>Mail : {user.email} </h5>
        </div>
      )}
    </div>
  )
}
export default App;
