import { createStore } from 'redux';

// Başlangıç durumu
const initialState = {
  cards: [],
  flippedCards: [],
  matchedCards: [],
  score: 0,
};

// Eylem türleri
const FLIP_CARD = 'FLIP_CARD';
const RESET_GAME = 'RESET_GAME';
const MATCH_CARDS = 'MATCH_CARDS';
const UPDATE_SCORE = 'UPDATE_SCORE';

// Reducer
function gameReducer(state = initialState, action) {
  switch (action.type) {
    case FLIP_CARD:
      return {
        ...state,
        flippedCards: [...state.flippedCards, action.payload],
      };
    case RESET_GAME:
      return {
        ...state,
        flippedCards: [],
        matchedCards: [],
        score: 0,
        cards: generateCards(), // Kartları sıfırla ve karıştır
      };
    case MATCH_CARDS:
      return {
        ...state,
        matchedCards: [...state.matchedCards, ...action.payload],
        flippedCards: [],
      };
    case UPDATE_SCORE:
      return {
        ...state,
        score: state.score + action.payload,
      };
    default:
      return state;
  }
}

// Store
const store = createStore(gameReducer);

export default store;
