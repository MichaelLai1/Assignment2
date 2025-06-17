import React, { useState } from "react";
import flashcards from "./components/flashcards";
import Flashcard from "./components/Flashcard";
import "./App.css";

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const showRandomCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentCardIndex);
    
    setCurrentCardIndex(newIndex);
    setFlipped(false); 
  };

  return (
    <div className="App">
      <h1>Human Bones Flashcards</h1>
      <p>Learn names of common bones in the human body</p>
      <p>Total Cards: {flashcards.length}</p>

      <Flashcard
        card={flashcards[currentCardIndex]}
        flipped={flipped}
        onFlip={() => setFlipped(!flipped)}
      />

      <button onClick={showRandomCard}>Next Random Card</button>
    </div>
  );
}

export default App;
