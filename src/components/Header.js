import React from 'react'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header className='flex items-baseline justify-between p-2 top-0 shadow-sm sticky bg-slate-50 dark:bg-slate-900 bg-opacity-30 dark:bg-opacity-30 z-10'>
        <a href='/'>
          <img className='w-[60px] h-auto' src='./calorie-manager-logo.svg' alt='logo' />
        </a>
        <ThemeSwitch />
    </header>
  )
}

export default Header