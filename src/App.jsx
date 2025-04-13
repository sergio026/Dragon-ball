
import './App.css'
import Header from './Component/Header/Header'
import CardPersonaje from './Component/Card/Card'
import { useEffect } from 'react'
import { useState } from 'react'

const App=()=> {
  const [personajes, setPersonajes] = useState([])

  useEffect(()=>{
    fetch('https://dragonball-api.com/api/characters?page=2&limit=5')
    .then(response => response.json())
    .then(data => setPersonajes(data.results));
  })
  
  return (
    <>
    <Header />
    <main>
        
            <CardPersonaje
            />
            

      </main>
    
    </>
  )
}

export default App
