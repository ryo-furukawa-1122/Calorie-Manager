import React from "react";
import { Chart } from 'chart.js';

const PieChart = (props) => {
    const ctx = document.getElementById('myChart');

    const energy1 = props.energy1SetState[0];
    const energy2 = props.energy2SetState[0];
    const energy3 = props.energy3SetState[0];

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Protein', 'Fat', 'Carbohydrate'],
            datasets: [{
                data: [energy1, energy2, energy3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    
    })
    return (
        <div className='p-2 z-1 relative bg-slate-50 dark:bg-slate-700 w-5/6 mx-auto my-10 rounded shadow-md text-slate-700 dark:text-slate-200 text-center'>
            <canvas id='myChart'></canvas>
        </div>
    )
}

export default PieChart;