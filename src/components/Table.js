import React, { useState } from 'react'

const getNumArray = (n) => Array.apply(null, new Array(n)).map(function(v,i){ return 1+i;});

const Table = (props) => {
    const mealset = props.mealSetState[0];

    const rows = getNumArray(mealset)
    const cols = ['Meal', 'Carbohydrate (g)', 'Protein (g)', 'Fat (g)']
    
    const [total, setTotal] = useState(0);

    const totalCalc = () => {
        var tableElem = document.getElementById('table');
        var rowElems = tableElem.rows;
        var t = 0;
        var len = rowElems.length-1;
        for (let i = 0; i < len; i++) {
            t += parseInt(rowElems[i].cells[1].innerText);
        }
        console.log('calculated')
        return(t);
        // document.getElementsByClassName('total').innerText = t;
    }

    const reCalc = () => {
        setTotal(totalCalc());
        console.log(total);
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
                <tbody id='table' onChange={reCalc}>
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
                        <td>{total}</td>
                        <td>{total}</td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table