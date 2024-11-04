import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);



export function ToyDashboard() {
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const labels = useSelector(storeState => storeState.toyModule.labels)
    const data = {
        labels: ['In stock', 'Out of stock'],
        datasets: [
            {
                label: '# of Toys',
                data: toys.reduce((acc, toy) => {
                    if (toy.inStock) acc[0]++
                    else acc[1]++
                    return acc
                }, [0, 0]),
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
    };

    const data2 = {
        labels: ['Cheap', 'Average', 'Expensive'],
        datasets: [
            {
                label: '# of Toys',
                data: toys.reduce((acc, toy) => {
                    if (toy.price < 50) acc[0]++
                    else if (toy.price < 100) acc[1]++
                    else acc[2]++
                    return acc
                }, [0, 0, 0]),
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
    };

    return (
        <section className='toy-dashboard'>
            <div>
                <Pie data={data} />;
            </div>
            <div>
                <Pie data={data2} />;
            </div>

        </section  >
    )
}
