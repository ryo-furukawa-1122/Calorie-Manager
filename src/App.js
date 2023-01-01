import React from 'react';
import './index.css'
import Header from './components/Header';
import Background from './components/Background';
import Settings from './components/Settings';

function App() {
  return (
    <div className='flex-auto'>
      <Background />
      <Header />
      <Settings />
    </div>
  );
}

export default App;
