import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from '../../constants/api';

function PokemonDetail() {
  const [cards, setCards] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  let history = useNavigate();

  const { id } = useParams();

  if (!id) {
    history.push("/");
}
    const url = API + "/" + id;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCards(data.cards))
      .catch(error => {
        setError(error);
        setloading(false);
      })
      .finally(() => setloading(false));
  }, [url]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <div className="card-detail">
   <h1>{cards.name}</h1>
   <img src={cards.imageUrl} alt={cards.name} />
   <p>HP: {cards.hp}</p>
   <p>Type: {cards.types}</p>
   <p>Attacks: {cards.attacks}</p>
   <p>Weaknesses: {cards.weaknesses}</p>
   <p>Number: {cards.number}</p>

  </div>
  );
}

export default PokemonDetail;

