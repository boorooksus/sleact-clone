import React from 'react';
import '../../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { Anaglyph } from './style';
=======
import Logo from './sections/Logo';
>>>>>>> 2ee06cbdd219a7a6c66879ca4fed0a8d04eba8db

const Lab = () => {
  useEffect(() => {
    axios.get('/api/hello').then((response) => console.log('hello res: ', response.data));
  }, []);

  return (
    <div>
<<<<<<< HEAD
      <Anaglyph>Test</Anaglyph>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
=======
      <Logo />
>>>>>>> 2ee06cbdd219a7a6c66879ca4fed0a8d04eba8db
    </div>
  );
};

export default Lab;
