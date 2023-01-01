import React from 'react'
import Select from 'react-select'
import CalorieCalc from './CalorieCalc'

const Settings = () => {
    const purpose = [
        { value: 'up', label: '増量'},
        { value: 'stay', label: 'キープ'},
        { value: 'down', label: '減量'}
    ]

    const activity = [
        { value: '1', label: 'Non-active'},
        { value: '1.2', label: 'Normal'},
        { value: '1.5', label: 'Active'}
    ]

    onclick = (() => {
        let base = document.getElementById('base').value;
        let mealset = document.getElementById('set').value;
    })

    return (
        <div className='flex flex-col relative'>
            <div className='flex flex-col p-2 bg-slate-50 dark:bg-slate-700 w-5/6 mx-auto my-5 rounded shadow-md'>
                <Select className='dark:text-slate-700 m-2' options={purpose} />
                <Select className='dark:text-slate-700 m-2' options={activity} />
                {/* <CalorieCalc /> */}
                <label className='m-2'>
                    基礎代謝：
                    <input className='dark:text-slate-700 w-20' id='base' type={'text'} />
                    kcal
                </label>
                <label className='m-2'>
                    食事数：
                    <input className='dark:text-slate-700 w-10' id='mealset' type={'text'}/>
                    回
                </label>
                <button id='set' className='rounded bg-sky-300 dark:bg-sky-600 px-4 py-2 w-2/5 mx-auto'>セット</button>
            </div>
            <div className='p-2 bg-slate-50 dark:bg-slate-700 w-5/6 mx-auto my-5 rounded shadow-md'>
                total
            </div>

        </div>
    )
}

export default Settings