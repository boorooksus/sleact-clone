import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import SignUp from './pages/SignUp';

const Lab = loadable(() => import('./pages/Lab'));

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <div className="App-header">
        <div className="anaglyph">hello</div>
=======
      <header className="App-header">
>>>>>>> 2ee06cbdd219a7a6c66879ca4fed0a8d04eba8db
        <Routes>
          <Route path="/" element={<div>hello</div>} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
