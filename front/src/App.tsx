import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import SignUp from './pages/SignUp';

const Lab = loadable(() => import('./pages/Lab'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
