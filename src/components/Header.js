import React from 'react'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header className='flex items-baseline justify-between p-2 relative'>
        <h1 className='text-3xl font-bold text-slate-800 dark:text-slate-50'>
          Calorie Manager
        </h1>
        <ThemeSwitch />
    </header>
  )
}

export default Header