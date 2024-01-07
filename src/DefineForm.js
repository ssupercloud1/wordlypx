import React, { useState } from 'react';

function DefineForm() {
  const [text, setText] = useState('');
  const [definition, setDefinition] = useState('');
  const [synonyms, setSynonyms] = useState([]);
  const [antonyms, setAntonyms] = useState([]);
  const [sentences, setSentences] = useState([]);
  const [partOfSpeech, setPartOfSpeech] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDefine = async () => {
    if (text.split(' ').length > 1) {
      setDefinition('Not Found');
      setSynonyms([]);
      setAntonyms([]);
      setSentences([]);
      setPartOfSpeech('');
      return;
    }

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${text}`);
    const data = await response.json();

    if (!data.length) {
      setDefinition('Not Found');
      setSynonyms([]);
      setAntonyms([]);
      setSentences([]);
      setPartOfSpeech('');
      return;
    }

    const meanings = data[0].meanings;
    const definition = meanings[0].definitions[0].definition;
    const synonyms = meanings[0].definitions[0].synonyms;
    const antonyms = meanings[0].definitions[0].antonyms;
    const sentences = meanings[0].definitions[0].example;
    const partOfSpeech = meanings[0].partOfSpeech;

    setDefinition(definition);
    setSynonyms(synonyms);
    setAntonyms(antonyms);
    setSentences(sentences);
    setPartOfSpeech(partOfSpeech);
  };

  const handleClear = () => {
    setText('');
    setDefinition('');
    setSynonyms([]);
    setAntonyms([]);
    setSentences([]);
    setPartOfSpeech('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleDefine();
    }
  };

  return (
    <div style={{ backgroundColor: '#f2f2f2', justifyContent: 'center', padding: '20px', overflowX: 'auto', borderRadius: '5px', border: '1px solid #ccc' }}>
	  <h2 style={{ textAlign: 'center', color: '#000435'}} >WordlyPX Define: Online Dictionary</h2>
	  <p>Welcome to WordlyPX Define, the dictionary component that helps you find the meaning, synonyms, antonyms, and examples in sentences for any English word! With WordlyPX Define, you can easily look up the definition of any word you come across.</p>
	  <p>Simply enter the word you want to look up, and our app will display its meaning, synonyms, antonyms, and examples in sentences. You can use WordlyPX Define to improve your vocabulary, learn new words, and become a better communicator. </p>
      <input type="text" placeholder="Enter your word" value={text} onChange={handleTextChange} style={{ width: '20%', padding: '10px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc' }} onKeyDown={handleKeyDown} />
      <button onClick={handleDefine} style={{ width: '100px', padding: '10px', margin: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>Define</button>
      <button onClick={handleClear} style={{ width: '100px', padding: '10px', margin: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>Clear</button>
      {definition && definition !== 'Not Found' && (
        <div style={{ justifyContent: 'center', width: '80%', padding: '10px', margin: '10px', borderRadius: '5px', border: '0px solid #ccc' }}>
          <p><b>Definition:</b> {definition}</p>
          <p><b>Part of Speech:</b> {partOfSpeech}</p>
          <p><b>Synonyms:</b> {synonyms.join(', ')}</p>
          <p><b>Antonyms:</b> {antonyms.join(', ')}</p>
          <p><b>Sentences:</b> {sentences}</p>
        </div>
      )}
      {definition === 'Not Found' && (
        <div style={{ justifyContent: 'center', width: '80%', padding: '10px', margin: '10px', borderRadius: '5px', border: '0px solid #ccc' }}>
          <p><b>Definition:</b> {definition}</p>
        </div>
      )}
    </div>
  );
}

export default DefineForm;
