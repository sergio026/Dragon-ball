import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CardPersonaje from '../../Component/Card/Card_personaje'

    const FilterPage = () => {
    const { gender } = useParams()
    const [arrayObjects, setArrayObjects] = useState([])

        useEffect(() => {
        const fetcharrayObjects = async () => {
        const response=await fetch("https://dragonball-api.com/api/characters?limit=58")
            const data = await response.json();
            const filtered = data.items.filter((arrayObject) => arrayObject.gender === gender);

        setArrayObjects(filtered);
    };
    fetcharrayObjects();
    console.log(arrayObjects);
},[gender]);

return (
    <main>
        { arrayObjects.map((user) => (
            <Link to={`/details/${user.id}`} key={user.id}>
                <CardPersonaje key={user.id} user={user}/>
            </Link>
        
        )) }
        </main>
    )
    }

export default FilterPage