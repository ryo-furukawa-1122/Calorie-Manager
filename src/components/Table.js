import React, { useState } from 'react'

const Table = () => {
    const [mealset, setMealSet] = useState(5);
    // const [meal, setMeal] = useState(Array.apply(null, new Array(mealset)).map(function(v,i){ return 1+i;}));
    const meal = Array.apply(null, new Array(mealset)).map(function(v,i){ return 1+i;});
    meal[mealset] = (['Total']);

    const cols = ['Meal', 'Carbohydrate (g)', 'Protein (g)', 'Fat (g)']
    const [rows, setRows] = useState(meal)
    
    function reMake() {
        setMealSet(document.getElementById('mealset').value);
        console.log(mealset);
        console.log(meal);
        // setMeal();
        // meal[mealset] = ('Total');
        // setRows(meal);
        console.log('remake');
    }
    // function clicked() {
    //     console.log(document.getElementById('mealset').value);
    // }

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
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table