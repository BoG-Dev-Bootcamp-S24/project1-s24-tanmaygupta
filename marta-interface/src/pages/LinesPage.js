import { useState, useEffect } from 'react';
import Train from '../components/Train';

const API_URL = "https://midsem-bootcamp-api.onrender.com/";

function LinesPages() {


    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {
            const response = await fetch(API_URL + "arrivals/red");
            if (!response.ok) {
                throw Error("Problem in fetching data");
            }
            const newData = await response.json();
            setData(newData);
            setError(null);
            setLoading(false);
        } catch (error) {
            console.log("Error occured: " + error);
            setError(error);
        }
    }

    useEffect( () => {
        fetchData()
    }, [])

    function displayTrains(trains) {
        if (trains.length === 0) {
            return (
                <div className='flex flex-col justify-start items-center p-10'>
                    <h2 className='font-bold text-xl'> There are currently no trains running at this moment. </h2>
                    <br />
                    <h2 className='text-xl'>Please check back again later</h2>
                </div>
            )
        } else {
            const lastIndexMap = {};

            trains.forEach((train, index) => {
                const key = train.DESTINATION + train.STATION
                lastIndexMap[key] = index;
            })
            const filterTrains = (trains.filter((train, index) => { //filter to only include latest data
                const key = train.DESTINATION + train.STATION
                return lastIndexMap[key] === index
            }))
            return (
                <div>
                    <p> {filterTrains.length} </p>
                    {
                        filterTrains.map((train) => {
                            return ( <Train train={train} /> ) //map to print all unique trains
                        })
                    }
                </div>
            )
        }
    }

    return (
        <div className="lines-page">
            { error && <p> Error occurred </p>}
            { loading && <h1 className='text-2xl font-bold flex p-10'> Loading... </h1>}
            { data && displayTrains(data) }
        </div>
    )
}

export default LinesPages;