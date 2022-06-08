import React from 'react';
import './Styles/Testimonio.css';

const Testimonio = (props) => {
  return (
    <>
      <div className='contaniner-testimonio'>
        <img
          className='imagen-testimonio'
          alt='foto de emma'
          src={require(`./Images/${props.imagen}.png`)}
        />
        <div className='container-texto-testimonio'>
          <p className='nombre-testimonio'>
            <b>{props.nombre}</b> in {props.pais}
          </p>
          <p className='cargo-testimonio'>
            {props.cargo} at <b>{props.empresa}</b>
          </p>
          <p className='descripcion-testimonio'>{props.descripcion}</p>
        </div>
      </div>
    </>
  );
};

export default Testimonio;
