import React from 'react';
import './index.css'
import Select from 'react-select'
import CalorieCalc from './components/CalorieCalc';
import Header from './components/Header';
import Background from './components/Background';

function App() {
  const purpose = [
    { value: 'up', label: '増量'},
    { value: 'stay', label: 'キープ'},
    { value: 'down', label: '減量'}
  ]
  
  return (
    <div className='flex-auto'>
      <Background />
      <Header />
      <div className='flex-auto p-6'>
        <p className='mt-w text-slate-700'>
          食事管理をサポートします
        </p>
        <div id='input'>
          <Select options={purpose} />
          {/* <CalorieCalc /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
