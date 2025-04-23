import React from 'react'
import './ImformationPerson.css'
import CardPersonaje from '../../Component/Card/Card_personaje'


const ImformationPerson = () => {
  const user = {
    name: "Darwin Vargas",
    image: "",
    race: "Saiyan",
    gender: "Male",
    ki: "infinite",
    maxKi: "infinite",
    affiliation: "Z Fighters"
  };
  return (
    <main>
      <CardPersonaje user={user} />
      
    </main>
  )
}
export default ImformationPerson