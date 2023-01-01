import React from 'react'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header className='flex items-baseline justify-between px-2 py-5 top-0 shadow-sm sticky bg-slate-50 dark:bg-slate-900 bg-opacity-30 dark:bg-opacity-30 z-10'>
        <a href='/'>
          <h1 className='text-3xl font-bold text-slate-800 dark:text-slate-50'>
            Calorie Manager
          </h1>
        </a>
        <ThemeSwitch />
    </header>
  )
}

export default Header