import React from 'react';
import '../../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from './sections/Logo';

const Lab = () => {
  useEffect(() => {
    axios.get('/api/hello').then((response) => console.log('hello res: ', response.data));
  }, []);

  return (
    <div>
      <Logo />
    </div>
  );
};

export default Lab;
