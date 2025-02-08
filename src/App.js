import React from 'react';
import './App.css';
import click from "./images/click.png";
import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";
import { useState } from 'react';


function App() {

  const [numClicks, setNumClicks] = useState(0);
  
  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };
  
  const restClick = () => {
    setNumClicks(numClicks - 1);
  };

  const restartCount = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="click-logo-container">
        <img className="click-logo" src={click}
        alt="click logo" />
      </div>
      <div className="principal-container">
        <Counter 
        numClicks={numClicks}/>
        <Button 
        text="Click"
        isClickButton={true}
        isRestButton={false}
        handleClick={handleClick} />
        <Button 
        text="Rest Click"
        isClickButton={false}
        isRestButton={true}
        handleClick={restClick} />
        <Button 
        text="Restart"
        isClickButton={false}
        isRestButton={false}
        handleClick={restartCount} />
      </div>
    </div>
  );
}

export default App;