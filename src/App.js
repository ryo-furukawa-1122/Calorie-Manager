import React from 'react';
import './index.css'
import Header from './components/Header';
import Background from './components/Background';
import Settings from './components/Settings';
import Table from './components/Table';

function App() {
  return (
    <div>
      <Background />
      <div className='flex-auto text-slate-700 dark:text-slate-200 relative'>
        <Header />
        <div className='container'>
          <Settings />
          <Table />
        </div>
        {/* <p className='m-5 relative'>
          食事管理をサポートします
        </p> */}
      </div>
    </div>
  );
}

export default App;
