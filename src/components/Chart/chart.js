import React , {useState, useEffect} from 'react';
import { fetchLiveData } from '../../api';
import { Line, Bar, Chart } from 'react-chartjs-2';
import styles from './chart.module.css'

function CovidChart({data: {confirmed, recovered, deaths}, country}){

    const [todayData, setTodayData] = useState([])

    useEffect(() => {
        const fetchAPI = async () =>{
            setTodayData(await fetchLiveData());
        }

        // console.log(todayData)
        fetchAPI();
    }, []);

    const lineChart =(
        todayData.length ? (<Line
            data={{
                labels: todayData.map(({ date }) => date),
                datasets: [{
                    data: todayData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: 'rgb(11, 156, 137)',
                    fill: true,
                }, 
                {
                    data: todayData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'rgb(255, 33, 70)',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }],
            }}
        />) : null 
    );

    const barChart = (
        confirmed ? (
            <Bar
                data = {{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets:[{
                        label: 'Total',
                        backgroundColor: [
                            'rgb(11, 156, 137)',
                            'rgb(223, 157, 15)',
                            'rgb(255, 33, 70)'
                        ],
                        data: [
                            confirmed.value, recovered.value, deaths.value
                        ]
                    }] 
                }}

                options = {{
                    legend: {display: false},
                    title: {display: true, text: `COVID-19 situation bar chart in ${country}`},
                }}
            />
        ): null
    )
    return(
        <div className={styles.container}>
            {country ? barChart : lineChart}
            
        </div>
    )
}

export default CovidChart