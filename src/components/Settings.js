import React, { useState } from 'react'
import Select from 'react-select'

const Settings = (props) => {
    const [mealset, setMealSet] = props.mealSetState;

    const purpose = [
        { value: 1.2, label: '増量（×1.2）'},
        { value: 1, label: 'キープ（×1）'},
        { value: 0.8, label: '減量（×0.8）'}
    ]

    const activity = [
        { value: 1.2, label: 'Non-active（×1.2）'},
        { value: 1.55, label: 'Normal（×1.55）'},
        { value: 1.725, label: 'Active（×1.725）'}
    ]
    
    const handleMealNumChange = (event) => {
        setMealSet(Number(event.target.value));
        // console.log('changed')
    }

    
    const [base, setBase] = useState(0);
    const [purAmp, setPurAmp] = useState(1);
    const [actAmp, setActAmp] = useState(1);
    
    const handlePurAmp = (event) => {
        setPurAmp(Number(event.value));
        console.log(purAmp)
    }
    const handleActAmp = (event) => {
        setActAmp(Number(event.value));
        console.log(actAmp)
    }
    const handleBase = (event) => {
        setBase(Number(event.target.value));
    }
    
    // const handleBase = () => {
    //     setBase(Number(document.getElementById('base').value));
    //     // console.log('clicked')
    // }

    const intake = base * purAmp * actAmp;

    return (
        <div className='flex flex-col relative'>
            <div className='flex flex-col p-2 bg-slate-50 dark:bg-slate-700 w-5/6 mx-auto my-5 rounded shadow-md'>
                <Select id='purpose' className='dark:text-slate-700 m-2' options={purpose} onChange={handlePurAmp} placeholder='目的' />
                <label className='m-2'>
                    基礎代謝：
                    <input className='dark:bg-slate-500 w-20 mx-3' id='base' type={'text'} onChange={handleBase} />
                    kcal
                </label>
                <Select className='dark:text-slate-700 m-2' options={activity} onChange={handleActAmp} placeholder='活動量' />
                <label className='m-2'>
                    食事数：
                    <input className='dark:bg-slate-500 w-10 mx-3' id='mealset' type={'number'} max='10' min='1' onClick={handleMealNumChange} />
                    回
                </label>
                {/* <button id='set' className='rounded bg-sky-300 dark:bg-sky-600 px-4 py-2 w-2/5 mx-auto'>セット</button> */}
            </div>
            <div className='p-2 bg-slate-50 dark:bg-slate-700 w-5/6 mx-auto my-5 rounded shadow-md'>
                1日の摂取量：<span className='mx-3'>{intake}</span>kcal
            </div>

        </div>
    )
}

export default Settings