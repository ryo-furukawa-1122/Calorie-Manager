import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import LangSwitch from './LangSwitch'
import AddToHomeScreenButton from './AddToHomeScreenBotton'

const Header = () => {
  return (
    <header className='flex justify-between py-4 px-3 top-0 shadow-sm sticky bg-slate-50 dark:bg-slate-900 bg-opacity-30 dark:bg-opacity-30 z-10 items-center'>
        <a href='/'>
          <img className='w-[70px] h-auto' src='./calorie-manager-logo.svg' alt='logo' />
        </a>
        <div className='flex flex-row'>
          <div className='flex flex-col mr-4 my-auto'>
            <AddToHomeScreenButton />
          </div>
          <div className='flex flex-col'>
            <LangSwitch />
            <ThemeSwitch />
          </div>
        </div>
    </header>
  )
}

export default Header