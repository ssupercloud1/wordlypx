import React, { useState } from 'react';

function SpeechForm() {
  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(1);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
  };

  const handlePronounce = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speed;
    window.speechSynthesis.speak(utterance);
  };

  const handleClear = () => {
    setText('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handlePronounce();
    }
  };

  return (
    <div style={{justifyContent: 'center', padding: '20px', overflowX: 'auto', borderRadius: '5px', border: '1px solid #ccc' }}>
	  <input type="text" placeholder="Enter your word" value={text} onChange={handleTextChange} style={{ width: '20%', padding: '10px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc' }} onKeyDown={handleKeyDown} />
      <button onClick={handlePronounce} style={{ width: '100px', padding: '10px', margin: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>Pronounce</button>
      <input type="range" min="0.5" max="2" step="0.1" value={speed} onChange={handleSpeedChange} style={{ width: '10%', margin: '10px' }} />
      <h2 style ={{textAlign: 'center', color: '#000435'}}>WordlyPX Word Pronouncer</h2>
	  <p>Welcome to WordlyPX, the app that helps you pronounce English words with ease! Our app uses a US accent to help you learn the correct pronunciation of words. English pronunciation is notoriously difficult, but with WordlyPX, you can learn to speak English like a native speaker.</p>
      <p>Our app is perfect for anyone who wants to improve their English pronunciation, whether you are a student, a professional, or just someone who loves learning new things. With WordlyPX, you can learn at your own pace and practice as much as you want. Use WordlyPX today and start speaking English with confidence!</p>
      <p>Take your English to another level by using WordlyPX. Just enter a word and click Pronounce button or simply hit Enter on the keyboard. You can also adjust playback speed from 0.5 to 2 (The default speed being 1).</p>
    </div>
  );
}

export default SpeechForm;
