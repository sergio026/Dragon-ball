  import * as React from 'react';
  import './Card_personaje.css';

  const CardPersonaje=({user})=> {
      return (
        
        <div className="card">
          <img src="https://i.pinimg.com/originals/29/bb/5d/29bb5df8fd05cca2854db5cc524ef5f3.png" alt="esfera"  className='esfera'/>
          
          <img src="https://www.gustore.cl/temp/img/estampados/522/522_400x400.png" alt="kajin kame" className='logo' />
          <main className='card_main'>
          <h2 className="name">
          {user.name}
        </h2>
          <div className='card_img'>
          <img src={user.image} alt="" className='imagen' />
          </div>
          <div className="detalle">
            <div className='detalle1'>
              {user.race}-{user.gender}
            </div>
            <div className='detalle1'>
              <p>Base de KI: {user.ki}</p>
            </div>
            <div className='detalle1'>
              <p>Total KI: {user.maxKi}</p>
            </div>
            <div className='detalle1'>
              <p>affiliation: {user.affiliation}</p>
            </div>
          </div>
          
          </main>
          <footer>

          </footer>
        </div>
    
    );
  }
  export default CardPersonaje;
