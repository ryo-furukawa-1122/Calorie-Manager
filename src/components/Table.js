import React from 'react'

const getNumArray = (n) => Array.apply(null, new Array(n)).map(function(v,i){ return 1+i;});

const Table = (props) => {
    const mealset = props.mealSetState[0];

    const rows = [...getNumArray(mealset), 'Total']
    const cols = ['Meal', 'Carbohydrate (g)', 'Protein (g)', 'Fat (g)']
    
    return (
        <div className='p-2 z-1 relative bg-slate-50 dark:bg-slate-700 w-5/6 mx-auto my-10 rounded shadow-md text-slate-700 dark:text-slate-200 text-center'>
            <table className='w-full align-middle'>
                <thead>
                    <tr>
                        {cols.map((col) => (
                            <th scope='col'>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr>
                            <th scope='cols'>{row}</th>
                            <td><input className='dark:bg-slate-500 w-full' type={'number'} placeholder='' min={0}/></td>
                            <td><input className='dark:bg-slate-500 w-full' type={'number'} placeholder='' min={0}/></td>
                            <td><input className='dark:bg-slate-500 w-full' type={'number'} placeholder='' min={0}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table