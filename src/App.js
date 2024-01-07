import React from 'react';
import './App.css';
import SpeechForm from './SpeechForm';
import DefineForm from './DefineForm';
import QuizzesForm from './QuizzesForm';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#" target="_blank" rel="noreferrer">Home</a>
      </nav>
      <div className="ribbon">
        <h1>WordlyPX</h1>
        <p>Helping you stand out confidently in English</p>
      </div>
      <SpeechForm />
      <DefineForm />
      <QuizzesForm />
	  <AboutUs />
      <footer>© 2023 WordlyPX. All Rights Reserved</footer>
    </div>
  );
}

export default App;