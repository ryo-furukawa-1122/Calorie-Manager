import React from 'react';
import './index.css'
import Header from './components/Header';
import Background from './components/Background';
import Settings from './components/Settings';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
  return (
    <div className='font-sans'>
      <Background />
      <div className='flex-auto text-slate-700 dark:text-slate-200 relative'>
        <Header />
        <div className='container'>
          <h1 className='text-3xl m-3 font-bold text-slate-800 dark:text-slate-50'>
            Calorie Manager
          </h1>
          <Settings />
          <Table />
        </div>
        <Footer />
        {/* <p className='m-5 relative'>
          食事管理をサポートします
        </p> */}
      </div>
    </div>
  );
}

export default App;
