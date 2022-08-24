import './App.css';
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '273a166339mshd767c60ebd4c95cp1aea2cjsn3f5b1c4f3066',
      'X-RapidAPI-Host': 'app-stores.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch('https://app-stores.p.rapidapi.com/reviews?store=google&id=com.snapchat.android&language=en', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, [])
  
  return (
    <div className="App">
      <h1>Looking for Inspiration, Motivation, Imagination?</h1>
      <h2>How about this creation / recommendation / manifestation / visualization / derivation / iteration / reincarnation for your fascination:</h2>

      <h2>I need more sophistication / diversification stimulation / innovation / excitation... how about this demonstration for your contemplation /infatuation?</h2>
    </div>
  );
}

export default App;
