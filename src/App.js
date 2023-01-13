import React from 'react';
import './index.css'
import Header from './components/Header';
import Background from './components/Background';
import MakeTable from './components/MakeTable';
import Footer from './components/Footer';

function App() {
  return (
    <div className='font-sans'>
      <Background />
      <div className='flex-auto text-slate-700 dark:text-slate-200 relative'>
        <Header />
        <div className='container mx-auto'>
          <h1 className='ja text-3xl m-3 font-bold text-slate-800 dark:text-slate-50'>
            カロリーマネージャー
          </h1>
          <h1 className='en hide text-3xl m-3 font-bold text-slate-800 dark:text-slate-50'>
            Calorie Manager
          </h1>
          <MakeTable />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
