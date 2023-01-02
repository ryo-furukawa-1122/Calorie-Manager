import React, { useState } from 'react'
import mealset from './Settings';

const Table = () => {
    let mealset = ['1', '2', '3']
    mealset[3] = ('Total');
    // const arr = Array.apply(null, new Array(mealset)).map(function(v,i){ return 1+i;});

    const [cols, setCols] = useState(['Meal', 'Carbohydrate (g)', 'Protein (g)', 'Fat (g)'])
    const [rows, setRows] = useState(mealset)

    // onclick = (() => {
    //     setRows()
    // })

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
                            <td>10</td>
                            <td>20</td>
                            <td>30</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table