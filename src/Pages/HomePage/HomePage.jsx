import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardPersonaje from '../../Component/Card/Card_personaje'

 const HomePage = () => {
    const[arrayObjects,setArrayObjects]=useState([])

    useEffect(()=>{
        fetch("https://dragonball-api.com/api/characters?limit=58")
        .then(response => response.json())
        .then(data => setArrayObjects(data.items))
    },[]);

  return (
    <main>
        {arrayObjects.map((user)=>(
            <Link to={`/details/${user.id}`} key={user.id} >
                <CardPersonaje key={user.id} user={user}/>
            </Link>
            
        ))}
    </main>
  )
}
export default HomePage