import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {

    const getUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
    }
    getUsers();
  }, [])

  return (
    <div className="App">
{users.map((user) => (
  <div key={user.id}>
    <p>{user.name}</p>
    <p>{user.username}</p>
  </div>
))}
    </div>
  );
}

export default App;