import React from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import Weather from './components/Weather/Weather';



function App(props) {
  return (
    <div className="App">
        <Weather />
        <Calendar />
    </div>
  );
}

export default App;

