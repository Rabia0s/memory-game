export function generateCards() {
    const images = ['card1', 'card2', 'card3', 'card4', 'card5']; // Kart görselleri
    const cards = [...images, ...images]; // Her karttan iki tane olacak şekilde çoğaltıyoruz
    return shuffle(cards); // Kartları karıştırıyoruz
  }
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Elemanları yer değiştiriyoruz
    }
    return array;
  }
  