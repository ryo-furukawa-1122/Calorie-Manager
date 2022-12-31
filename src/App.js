import React from 'react';
import './index.css'
import Select from 'react-select'
import CalorieCalc from './components/CalorieCalc';

function App() {
  const purpose = [
    { value: 'up', label: '増量'},
    { value: 'stay', label: 'キープ'},
    { value: 'down', label: '減量'}
  ]
  
  return (
    <div className='flex-auto'>
      <header>
        <h1 className='text-3xl font-bold text-slate-800'>
          Calorie Manager
        </h1>
      </header>
      <div className='flex-auto p-6'>
        <p className='mt-w text-slate-700'>
          食事管理をサポートします
        </p>
        <div id='input'>
          <Select options={purpose} />
          <CalorieCalc />
        </div>
      </div>
    </div>
  );
}

export default App;
