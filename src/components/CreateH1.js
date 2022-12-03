/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

const CreateH1 = () => {
  const [text, setText] = useState('');
  const [substr, setSubstr] = useState('');
  const [h1text, setH1text] = useState([]);
  const lastChar = text.charAt(text.length - 1);

  const charactersCheck = () => {
    const check = text.slice(0, 2);
    const sub = text.slice(2);
    setSubstr(sub);
    return check;
  };

  const handleEnterKey = (e) => {
    const firstTwoChar = charactersCheck();
    if (e.key === 'Enter' && firstTwoChar === '/1') {
      setH1text([...h1text, substr + lastChar]);
    }
  };

  return (
    <div className="wrapper">
      <h1 className="headline">Front-end developer test project</h1>
      {h1text.map((text, index) => (
        <h1 key={index}>{text}</h1>
      ))}
      <input
        type="text"
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleEnterKey}
      />
    </div>
  );
};
export default CreateH1;
