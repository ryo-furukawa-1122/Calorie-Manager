import React, { useState } from 'react'
import Select from 'react-select'

const Settings = (props) => {
    const [mealset, setMealSet] = props.mealSetState;

    const purpose = [
        { value: 1.2, label: '増量（×1.2）'},
        { value: 1, label: 'キープ（×1）'},
        { value: 0.8, label: '減量（×0.8）'}
    ]

    const purposeEn = [
        { value: 1.2, label: 'Bulk up (×1.2)'},
        { value: 1, label: 'Maintenance (×1)'},
        { value: 0.8, label: 'Lose weight (×0.8)'}
    ]

    const activity = [
        { value: 1.2, label: '非アクティブ（×1.2）'},
        { value: 1.55, label: '普通（×1.55）'},
        { value: 1.725, label: 'アクティブ（×1.725）'}
    ]
    const activityEn = [
        { value: 1.2, label: 'Non-active (×1.2)'},
        { value: 1.55, label: 'Normal (×1.55)'},
        { value: 1.725, label: 'Active (×1.725)'}
    ]
    
    const handleMealNumChange = (event) => {
        setMealSet(Number(event.target.value));
    }

    
    const [base, setBase] = useState(0);
    const [purAmp, setPurAmp] = useState(1);
    const [actAmp, setActAmp] = useState(1);
    
    const handlePurAmp = (event) => {
        setPurAmp(Number(event.value));
    }
    const handleActAmp = (event) => {
        setActAmp(Number(event.value));
    }
    const handleBase = (event) => {
        setBase(Number(event.target.value));
    }
    
    const intake = base * purAmp * actAmp;

    return (
        <div className='flex flex-col relative'>
            <div className='flex flex-col p-2 bg-slate-50 dark:bg-slate-700 w-5/6 mx-auto my-5 rounded shadow-md'>
                <Select id='purpose' className='ja dark:text-slate-700 m-2' options={purpose} onChange={handlePurAmp} placeholder='目的' />
                <Select id='purpose' className='en hide dark:text-slate-700 m-2' options={purposeEn} onChange={handlePurAmp} placeholder='Aim' />
                <label className='m-2 ja'>
                    基礎代謝：
                    <input className='dark:bg-slate-500 w-20 mx-3' id='base' type={'text'} onChange={handleBase} />
                    kcal
                </label>
                <label className='m-2 en hide'>
                    Basel metabolism: 
                    <input className='dark:bg-slate-500 w-20 mx-3' id='base' type={'text'} onChange={handleBase} />
                    kcal
                </label>
                <Select className='ja dark:text-slate-700 m-2' options={activity} onChange={handleActAmp} placeholder='活動量' />
                <Select className='en hide dark:text-slate-700 m-2' options={activityEn} onChange={handleActAmp} placeholder='Activity' />
                <label className='m-2 ja'>
                    食事数：
                    <input className='dark:bg-slate-500 w-10 mx-3' id='mealset' type={'number'} max='10' min='1' onChange={handleMealNumChange} />
                    回
                </label>
                <label className='m-2 en hide'>
                    Meals: 
                    <input className='dark:bg-slate-500 w-10 mx-3' id='mealset' type={'number'} max='10' min='1' onChange={handleMealNumChange} />
                    per day
                </label>
            </div>
            <div className='ja p-2 bg-slate-50 dark:bg-slate-700 w-5/6 mx-auto my-5 rounded shadow-md'>
                1日の摂取量：<span className='mx-3'>{intake}</span>kcal
            </div>
            <div className='en hide p-2 bg-slate-50 dark:bg-slate-700 w-5/6 mx-auto my-5 rounded shadow-md'>
                Intake of a day<span className='mx-3'>{intake}</span>kcal
            </div>
        </div>
    )
}

export default Settings