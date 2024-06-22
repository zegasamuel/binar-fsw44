import React, { useRef, useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import '../assets/style.css'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

export const data = {
    labels: [
        'Kecelakaan',
        'Jalan Rusak',
        'Pencurian',
        'Narkoba',
        'Buang sampah sembarangan',
        'kebisingan',
    ],
    datasets: [
        {
            label: 'laporan warga',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
}

export function PieChart() {
    const options = {
        plugins: {
            datalabels: {
                formatter: (value, context) => {
                    const total = 12 + 19 + 3 + 5 + 2 + 3
                    const percentage = ((value / total) * 100).toFixed(2) + '%'
                    return percentage
                },
                color: '#000',
                font: {
                    weight: 'bold',
                },
            },
        },
    }

    return (
        <div className="pie-chart-container">
            <p>total laporan warga: {12 + 19 + 3 + 5 + 2 + 3} </p>
            <Pie className="pie-chart" data={data} options={options} />
        </div>
    )
}
