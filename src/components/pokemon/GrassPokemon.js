import React, { useState, useEffect } from 'react';
import { API } from '../../constants/api';

function GrassPokemon() {
  const [cards, setCards] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setCards(data.cards))
      .catch(error => {
        setError(error);
        setloading(false);
      })
      .finally(() => setloading(false));
  }, [cards]);

  const filteredCards = cards.filter(filterCards);

  function filterCards(card) {
    if ('types' in card && card.types.includes("Grass")) {
        return true;
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }
  
  return (
    <div className="Pokemon">
        <h1>Grass Pokemon cards</h1>
      {filteredCards.map((card, index) => (
        <div key={index}>
          <h2>{card.name}</h2>
          <img src={card.imageUrl} alt={card.name} />
          <div className='btn'>
          <button>See More</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GrassPokemon;

