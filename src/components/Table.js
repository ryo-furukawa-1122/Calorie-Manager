import React, { useState } from 'react'


const Table = () => {
    const [cols, setCols] = useState(['Meal', 'Carbohydrate (g)', 'Protein (g)', 'Fat (g)'])
    const [rows, setRows] = useState(['1', '2', '3', 'Total'])

    return (
        <div className='p-2 z-1 relative bg-slate-50 dark:bg-slate-700 w-5/6 mx-auto my-10 rounded shadow-md text-slate-700 dark:text-slate-200 text-center'>
            <table className='w-full'>
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