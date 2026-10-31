import { useState } from 'react'
import './App.css'
import React from 'react';

function App() {
  let siyahi = ["Rock", "Paper", "Scissors"];
  const [num, setNum] = useState("Rock");
  let robot = siyahi[Math.floor(Math.random() * 3)]
  let n;

  if (robot === num) {
    n = "Berabər!💗";
  } else if (
    (num === "Rock" && robot === "Scissors") ||
    (num === "Paper" && robot === "Rock") ||
    (num === "Scissors" && robot === "Paper")
  ) {
    n = "Sən qalib oldun!😎";
  } else {
    n = "Robot Qalib geldi!💀";
  }

return (
  <>
    <h2>Birini seç!</h2>
    <h3>
      <button onClick={() => setNum("Rock")}>Rock</button>
      <button onClick={() => setNum("Paper")}>Paper</button>
      <button onClick={() => setNum("Scissors")}>Scissors</button>
    </h3>
    <h3>
      Robot {robot} seçdi. Sən {num} seçdin. {n}
    </h3>

  </>
)
}


export default App
