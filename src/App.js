import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Create></Create>
        <Nahid></Nahid>
        <Me></Me>
        <UserList></UserList>
        <Data></Data>
        <Users></Users>
      </header>
    </div>
  );
}

function Data() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);
  if (data.length < 1) {
    return <h2>Loading... </h2>;
  }
  return (
    <div className="userContainer">
      <h1>Dynamic Users : {data.length} </h1>
      {data.map(person => {
        const { name } = person;
        return <div className="userStyle">
          <h2>Name: {name.first} {name.last}</h2>
        </div>
      })}
    </div>
  );
}

function Nahid() {
  const [nahid, setNahid] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setNahid(data))
  }, [])
  return (
    <div>
      Dynamic data {nahid.length}
      {nahid.map(nahid =>
        <h1> {nahid.name} </h1>
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
      {users.map(user =>
        <div className="userStyle">
          <h1>Name : {user.name} </h1>
          <h5>Mail : {user.email} </h5>
        </div>
      )}
    </div>
  )
}
function Me() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setMyData(data);
      })
  }, [])
  return (
    <div style={{ margin: 'auto', width: '600px', borderRadius: '5px', padding: '40px' }}>
      <h1>Dynamic Object Detected {myData.length}</h1>
      {myData.map((myData) =>
        <div style={{ padding: '3px', marginTop: '20px', borderRadius: '5px', boxShadow: '0 0 10px #aa32f0' }}>
          <h1 style={{ padding: '5px' }}>Name : {myData.name} </h1>
        </div>
      )}
    </div>
  )
}
function UserList() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => {
        setUserList(data.results);
      });
  }, []);
  return (
    <div>
      <h1>Dynamic Users : {userList.length} </h1>
      {userList.map(user => {
        const { name } = user;
        return <div className="userStyle">
          <h2>Name: {name.first} {name.last} </h2>
        </div>
      })}
    </div>
  )
}
function Create() {
  const [addUser, setAddUser] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(data => setAddUser(data.results))
  }, [])
  return (
    <div>
      <h1>I've {addUser.length} Dynamic user data </h1>
      <div>
        {addUser.map(user => {
          const { name } = user;
          return (
            <div className="userContainer">
              <h3>Name: {name.first} {name.last} </h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default App;
