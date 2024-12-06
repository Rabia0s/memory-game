// src/redux/reducer.js

// Kartları oluşturacak fonksiyon
const generateCards = () => {
    const values = ['card1', 'card2', 'card3', 'card4', 'card5'];
    
    // Kartları çiftler halinde yerleştiriyoruz
    const shuffledCards = [...values, ...values]
      .map(value => ({ value, id: Math.random() }))  // Her karta rastgele bir id atıyoruz
      .sort(() => Math.random() - 0.5);  // Kartları karıştırıyoruz
    
    return shuffledCards.map((card, index) => ({
      ...card,
      isOpen: false,  // Kart kapalı başlangıçta
      isMatched: false,  // Başlangıçta eşleşme yok
    }));
  };
  
  const initialState = {
    cards: generateCards(),  // Kartları başlatıyoruz
    score: 0,
    gameOver: false,
  };
  
  // Aksiyonları ve reducer'ı burada tanımlıyoruz
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'OPEN_CARD':
        return {
          ...state,
          cards: state.cards.map((card, index) => {
            if (index === action.payload) {
              return { ...card, isOpen: true };
            }
            return card;
          }),
        };
      case 'CLOSE_CARDS':
        return {
          ...state,
          cards: state.cards.map(card => ({
            ...card,
            isOpen: false,
          })),
        };
      case 'RESET_GAME':
        return {
          ...state,
          cards: generateCards(), // Kartları sıfırlıyoruz
          score: 0,
          gameOver: false,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  