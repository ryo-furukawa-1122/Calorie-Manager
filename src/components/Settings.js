import React from 'react'
import Select from 'react-select'
import CalorieCalc from './CalorieCalc'

const Settings = () => {
    const purpose = [
        { value: 'up', label: '増量'},
        { value: 'stay', label: 'キープ'},
        { value: 'down', label: '減量'}
    ]

    onclick = (() => {
        let mealset = document.getElementById('set').value;
    })

    return (
        <div className='flex-auto p-2 z-1 relative bg-slate-50 dark:bg-slate-700 w-5/6 m-auto rounded mt-3 mb-3 shadow-md text-slate-700 dark:text-slate-200'>
            <p className='m-2'>
                食事管理をサポートします
            </p>
            <Select className='dark:text-slate-700 m-2' options={purpose} />
            {/* <CalorieCalc /> */}
            <label className='m-2'>
                食事数：
                <input className='mb-2 dark:text-slate-700' id='mealset' type={'text'}/>
            </label>
            <button id='set' className='rounded bg-sky-300 dark:bg-sky-600 px-4 py-2'>セット</button>
        </div>
    )
}

export default Settings