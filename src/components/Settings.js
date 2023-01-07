import React, { useState } from 'react'
import Select from 'react-select'

const Settings = (props) => {
    const [mealset, setMealSet] = props.mealSetState;

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
    
    const handleMealNumChange = (event) => {
        setMealSet(Number(event.target.value));
    }

    const [base, setBase] = useState(0);
    const [purAmp, setPurAmp] = useState(1);
    const [actAmp, setActAmp] = useState(1);
    const [intake, setIntake] = useState(0);
    
    const handleBase = () => {
        setBase(Number(document.getElementById('base').value));
        console.log('clicked')
    }

    const handleIntake = () => {
        setIntake(Number(base * purAmp * actAmp));
        console.log('clicked')
    }

    return (
        <div className='flex flex-col relative'>
            <div className='flex flex-col p-2 bg-slate-50 dark:bg-slate-700 w-5/6 mx-auto my-5 rounded shadow-md'>
                <Select className='dark:text-slate-700 m-2' options={purpose} />
                <label className='m-2'>
                    基礎代謝：
                    <input className='dark:bg-slate-500 w-20 mx-3' id='base' type={'text'} />
                    kcal
                </label>
                <Select className='dark:text-slate-700 m-2' options={activity} />
                <label className='m-2'>
                    食事数：
                    <input className='dark:bg-slate-500 w-10 mx-3' id='mealset' type={'number'} max='10' min='1' onClick={handleMealNumChange} />
                    回
                </label>
                <button id='set' className='rounded bg-sky-300 dark:bg-sky-600 px-4 py-2 w-2/5 mx-auto' onClick={() => {handleBase();handleIntake();}}>セット</button>
            </div>
            <div className='p-2 bg-slate-50 dark:bg-slate-700 w-5/6 mx-auto my-5 rounded shadow-md'>
                1日の摂取量：<span className='mx-3'>{intake}</span>kcal
            </div>

        </div>
    )
}

export default Settings