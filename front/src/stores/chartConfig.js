export const options = {
    responsive: true,
    maintainAspectRatio: false,
    parsing: {
                xAxisKey: 'date',
                yAxisKey: 'totalLiquidityUSD'
                },
    scales: {
            y: {
                type: 'logarithmic',
                alignToPixels: true,
                stacked: true,
                grid: {
                    display: false,
                },
            },
            x: {
                alignToPixels: true,
                stacked: true,
                type: 'time',
                time: {
                    unit: 'month',
                },
                grid: {
                    display: false,
                },
            }
        },
    plugins: {
        zoom: {
            pan: {
                    enabled: true,
                    mode: 'xy',
                    },
            limits: { 
                    y: {min: 0, minRange: 10000000},
                    x: {min: 0, minRange: 0},
                    },
            zoom: {
                wheel: { enabled: true },
                pinch: { enabled: true },
                mode: 'xy',
            }
        }
    }
}
