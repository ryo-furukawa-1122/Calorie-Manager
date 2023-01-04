import React, { useState } from 'react'

const Table = () => {
    const [mealset, setMealSet] = useState(5);
    const [arr, setArr] = useState(Array.apply(null, new Array(mealset)).map(function(v,i){ return 1+i;}));
    const [meal, setMeal] = useState(arr);
    // const meal = Array.apply(null, new Array(mealset)).map(function(v,i){ return 1+i;});
    meal[mealset] = ('Total');
    console.log('out');

    const cols = ['Meal', 'Carbohydrate (g)', 'Protein (g)', 'Fat (g)']
    const [rows, setRows] = useState(meal)
    
    function reMake() {
        setMealSet(1);
        setMealSet(document.getElementById('mealset').value);
        console.log(mealset);
        // const arr = Array.apply(null, new Array(mealset)).map(function(v,i){ return 1+i;});
        // console.log(Array.apply(null, new Array(mealset)).map(function(v,i){ return 1+i;}));
        setMeal(arr);
        console.log(arr);
        meal[mealset] = ('Total');
        // console.log(meal);
        setRows(meal);
        console.log('remake');
    }

    return (
        <div className='p-2 z-1 relative bg-slate-50 dark:bg-slate-700 w-5/6 mx-auto my-10 rounded shadow-md text-slate-700 dark:text-slate-200 text-center'>
            <button id='set' className='rounded bg-sky-300 dark:bg-sky-600 px-4 py-2 w-2/5 mx-auto' onClick={() => {reMake();}}>セット</button>
            <table className='w-full align-middle'>
                <thead>
                    <tr>
                        {cols.map((value1) => (
                            <th scope='col'>{value1}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((value2) => (
                        <tr>
                            <th scope='cols'>{value2}</th>
                            <td><input className='dark:bg-slate-500 w-full' type={'text'}/></td>
                            <td><input className='dark:bg-slate-500 w-full' type={'text'}/></td>
                            <td><input className='dark:bg-slate-500 w-full' type={'text'}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table