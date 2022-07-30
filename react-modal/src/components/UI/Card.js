import React from 'react';

/* On Procede par importation de module pour s'assurer que seul ce composant beneficie des classes presentes dans le css */
import classes from './Card.module.css';

function Card(props) {
  return (
    <div className={`${classes.card} ${props.className}`}>
      {/* Pour que ca fonctionne, On utilise le classname comme une propset on extrapole les autres classe que l'on veu */}
      {props.children}{' '}
      {/* props necessaire pour l'utilisation du composant en tant que container */}
    </div>
  );
}

export default Card;
