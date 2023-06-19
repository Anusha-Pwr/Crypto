import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import { Line } from "react-chartjs-2";
import { chartDays } from "./config/data";
import "./CoinChart.css";
import SelectButton from "./SelectButton";


function CoinChart(props) {
    const [historicalData, setHistoricalData] = useState([]);
    const [days, setDays] = useState(1);
    const [selected, setSelected] = useState(false);
    console.log(props.currentCoin);
    const url = `https://api.coingecko.com/api/v3/coins/${props.currentCoin}/market_chart?vs_currency=inr&days=${days}`;


    useEffect(() => {
        axios.get(url).then(response => {
            setHistoricalData(response.data.prices);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    console.log(historicalData);
    

    return (
        <div>
            <Line
                data={{
                    labels: historicalData.map(coin => {
                        let date = new Date(coin[0]);
                        let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`;
                        return days === 1 ? time : date.toLocaleDateString()
                    }),

                    datasets: [
                        {
                            data: historicalData.map(coin => coin[1]),
                            label: `Price ( Past ${days} Days ) in INR`,
                            borderColor: "#EEBC1D",
                        }
                    ]
                }}

                options={{
                    elements: {
                        point: {
                            radius: 1
                        }
                    }
                }}
            />

            <div style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: 20,
                width: "100%",
            }}>

                {chartDays.map(day => {
                   return <SelectButton key={day.value} onSelected={() => setDays(day.value)} selected={day.value === days} val={day.label} />
                })}

                
                
            </div>
        </div>
    );
}

export default CoinChart;