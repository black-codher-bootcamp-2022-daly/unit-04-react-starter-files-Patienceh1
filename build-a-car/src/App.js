import './App.css';
import React from 'react'
import Car from './Components/Car'
import Bicycle from './Components/Bicycle';
import Skateboard from './Components/Skateboard';
import Bus from './Components/Bus';
import Truck from './Components/Truck';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Car />
      <Bicycle />
      <Bus />
      <Skateboard />
      <Truck />
        <p>
        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>

      </header>
      
    </div>
  );
}

export default App;
