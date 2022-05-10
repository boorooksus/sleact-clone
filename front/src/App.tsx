import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Lab from './pages/Lab/Lab';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        hello
        <Routes>
          <Route path="lab" element={<Lab />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
