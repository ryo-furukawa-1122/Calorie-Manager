import React from 'react'
import Select from 'react-select'

const Settings = () => {
    const purpose = [
        { value: 'up', label: '増量'},
        { value: 'stay', label: 'キープ'},
        { value: 'down', label: '減量'}
    ]
    return (
        <div className='flex-auto p-2 z-1 relative bg-slate-50 dark:bg-slate-700 w-5/6 m-auto rounded mt-3 mb-3 shadow-md text-slate-700 dark:text-slate-200'>
            <p className='m-2'>
            食事管理をサポートします
            </p>
            <Select className='dark:text-slate-700 m-2' options={purpose} />
            {/* <CalorieCalc /> */}
            <label className='m-2'>
            食事数：
            <input className='mb-2' id='mealset' type={'text'}/>
            </label>
        </div>
    )
}

export default Settings