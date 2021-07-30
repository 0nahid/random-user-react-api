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
  useEffect(() =>
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then(data => setData(data))
  )
  return (
    <div>
      {data.map(data =>
        <div>
          <h1>{data.results[0].name.first}</h1>
          <h1>{data.results.name.first}</h1>
        </div>
      )}
    </div>
  )
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
      {users.map(user  =>
        <div className="userStyle">
          <h1>Name : {user.name} </h1>
          <h5>Mail : {user.email} </h5>
        </div>
      )}
    </div>
  )
}
export default App;
