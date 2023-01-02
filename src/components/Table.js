import React, { useState } from 'react'

const Table = () => {
    const mealset = 5
    // onclick = (() => {
    //     let mealset = document.getElementById('mealset').value;
    // })
    const meal = Array.apply(null, new Array(mealset)).map(function(v,i){ return 1+i;});
    meal[mealset] = ('Total');

    const [cols, setCols] = useState(['Meal', 'Carbohydrate (g)', 'Protein (g)', 'Fat (g)'])
    const [rows, setRows] = useState(meal)
    
    function reMake() {
        let mealset = document.getElementById('set').value;
        setRows(meal);
        meal[mealset] = ('Total');
    }

    return (
        <div className='p-2 z-1 relative bg-slate-50 dark:bg-slate-700 w-5/6 mx-auto my-10 rounded shadow-md text-slate-700 dark:text-slate-200 text-center'>
            <table className='w-full align-middle'>
                <thead>
                    <tr>
                        {cols.map((value1) => (
                            <th scope='col'>{value1}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((value) => (
                        <tr>
                            <th scope='cols'>{value}</th>
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