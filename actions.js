export const flipCard = (card) => ({
    type: 'FLIP_CARD',
    payload: card,
  });
  
  export const resetGame = () => ({
    type: 'RESET_GAME',
  });
  
  export const matchCards = (cards) => ({
    type: 'MATCH_CARDS',
    payload: cards,
  });
  
  export const updateScore = (score) => ({
    type: 'UPDATE_SCORE',
    payload: score,
  });
  