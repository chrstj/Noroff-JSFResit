import React, { useState, useEffect } from 'react';
import { API } from '../../constants/api';

function PokemonList() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        setCards(data.cards);
        setFilteredCards(data.cards);
      })
      .catch(error => {
        setError(error);
        setloading(false);
      })
      .finally(() => setloading(false));
  }, []);

  useEffect(() => {
    setFilteredCards(
      cards.filter(card => card.name.toLowerCase().includes(searchValue.toLowerCase()))
    );
  }, [searchValue, cards]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <>
    <div className="Pokemon">
        <h1>All Pokemon Cards</h1>
        <input type="text" placeholder="Search..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />

      {filteredCards.map((card, index) => (
        <div key={index}>
          <h2>{card.name}</h2>
          <img src={card.imageUrl} alt={card.name} />
          <div className='btn'>
          <button>Read More</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default PokemonList;