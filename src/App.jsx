import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card'

function App() {
  const [users, setusers] = useState([])
  useEffect(() => {
    fetch('https://661038100640280f219c9a20.mockapi.io/api/v1/users').then(response => {
      return response.json();
    }).then(data => {
      setusers(data)
      console.log(data)
    })
  }, []);
  return (
    <div>
      {
        users.map(
          (user) => (<Card key={user.id} user={user} />)
        )
      }
    </div>
  )
}

export default App;
