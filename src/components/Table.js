import React from 'react'

const getNumArray = (n) => Array.apply(null, new Array(n)).map(function(v,i){ return 1+i;});

const Table = (props) => {
    const mealset = props.mealSetState[0];

    const rows = getNumArray(mealset)
    const cols = ['Meal', 'Carbohydrate (g)', 'Protein (g)', 'Fat (g)']
    
    const totalCalc = () => {
        var tableElem = document.getElementById('table');
        var rowElems = tableElem.rows;
        var t = [0, 0, 0];
        var len = rowElems.length-1;
        for (let j = 1; j < 4; j++) {
            for (let i = 0; i < len; i++) {
                t[j-1] += parseInt(Number(rowElems[i].cells[j].getElementsByTagName('input')[0].value));
            }
            rowElems[len].cells[j].innerText = t[j-1];
        }
    }
    
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
                <tbody id='table' onChange={totalCalc}>
                    {rows.map((row) => (
                        <tr>
                            <th scope='cols'>{row}</th>
                            <td><input className='dark:bg-slate-500 w-full rounded' type={'number'} placeholder='' min={0}/></td>
                            <td><input className='dark:bg-slate-500 w-full rounded' type={'number'} placeholder='' min={0}/></td>
                            <td><input className='dark:bg-slate-500 w-full rounded' type={'number'} placeholder='' min={0}/></td>
                        </tr>
                    ))}
                    <tr>
                        <th>Total</th>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table