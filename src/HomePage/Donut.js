import React from 'react';
import './styles.css'; 

function Donut({ name, description, price }) {
  return (
    <article className="Donut">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </article>
  );
}

export default Donut;
