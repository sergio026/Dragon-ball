import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './DetailsPage.css'

const DetailsPage = () => {

      const [arrayObjects, setArrayObjects] = useState([])

      let {id}=useParams()
      useEffect(()=>{
        fetch("https://dragonball-api.com/api/characters/"+id)
      .then(response => response.json())
      .then(data => setArrayObjects(data));
    
      } ,[]);

    return (    
        <>
        <div className="container_details">
          <div className="list">
            <div className="items">
            <img src={arrayObjects.image} alt="personaje_p" className='Personaje_P'/>
              <img src={arrayObjects.originPlanet?.image} alt="Personaje_principal" className='planet'/>
              <div className="content">
                <div className="nameid">Name: {arrayObjects.name}</div>
                <div className="affiliationid">affiliation: {arrayObjects.affiliation}</div>
                <div className="kiid">Ki: {arrayObjects.ki}</div>
                <div className="maxKiid">MaxKi: {arrayObjects.maxKi}</div>
                <div className="raceid">race: {arrayObjects.race}</div>
                <div className="genderid">Gender: {arrayObjects.gender}</div>
                <div className="descriptionid">Description: {arrayObjects.description}</div>
              </div>
            </div>
          </div>
           {/* Mostrar solo si hay transformaciones */}
        {arrayObjects.transformations && arrayObjects.transformations.length > 0 && (
          <div className="carousel_container">
            <div className="carousel">
              {arrayObjects.transformations.map((trans, index) => (
                <img className='carousel_img'
                  key={index}
                  src={trans.image}
                  alt={trans.name}
                  style={{
                    transform: `rotateY(${index * (360 / arrayObjects.transformations.length)}deg) translateZ(100px)`
                  }}
                />
              ))}
            </div>
          </div>
        )}
        </div>  
        
        </>
    )
}

export default DetailsPage