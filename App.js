import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flipCard, resetGame, matchCards, updateScore } from './redux/actions';
import { generateCards } from './utils';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { cards, flippedCards, matchedCards, score } = useSelector(state => state);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (firstCard === secondCard) {
        dispatch(matchCards(flippedCards));
        dispatch(updateScore(50)); // Eşleşme başarılıysa 50 puan ekle
      } else {
        setTimeout(() => {
          dispatch(updateScore(-10)); // Eşleşme yoksa -10 puan
        }, 1000);
      }
    }
  }, [flippedCards, dispatch]);

  const handleCardClick = (card) => {
    if (flippedCards.length < 2 && !matchedCards.includes(card)) {
      dispatch(flipCard(card));
    }
  };

  const handleReset = () => {
    dispatch(resetGame());
  };

  return (
    <div className="game-container">
      <h1>Memory Game</h1>
      <p>Score: {score}</p>
      <div className="board">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${flippedCards.includes(card) || matchedCards.includes(card) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(card)}
          >
            <img src={`/images/${card}.jpg`} alt={card} />
          </div>
        ))}
      </div>
      <button onClick={handleReset}>Restart</button>
    </div>
  );
}

export default App;
