import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card'

function App() {
  function Aleatorio() {
    const numeros = [];
    for (let i = 0; i < 30; i++) {
      numeros.push(Math.floor(Math.random() * 826));
    }
    numeros.toString();
    return numeros;
  };
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + Aleatorio()).then(response => {
      return response.json();
    }).then(data => {
      setUsers(data)
      console.log(data)
    })
  }, []);

  return (
    <div className="principal">
      {
        users.map(
          (datos) => (<Card className="" key={datos.id} user={datos} />)
        )
      }
    </div>
  )
}

export default App;
