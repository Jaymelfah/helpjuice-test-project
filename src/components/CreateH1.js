/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const CreateH1 = () => {
  const [text, setText] = useState(''); // store the typed text
  const [substr, setSubstr] = useState(''); // get the string after deleting /1
  const [h1text, setH1text] = useState([]); // array of various h1 elements created
  const lastChar = text.charAt(text.length - 1);

  // a function to get check if user typed /1 and then subsequently get the typed text
  const charactersCheck = () => {
    const check = text.slice(0, 2);
    const sub = text.slice(2);
    setSubstr(sub);
    return check;
  };

  // create h1 elements when user hits enter key
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
        <h1 key={index}>
          <RxHamburgerMenu className="hamburger" />
          {' '}
          {' '}
          {text}
        </h1>
      ))}
      <input
        type="text"
        className="input"
        value={text}
        placeholder="Create your h1 tag by starting with /1(Type here)..."
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleEnterKey}
      />
    </div>
  );
};

export default CreateH1;
