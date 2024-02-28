import { useState, useEffect } from 'react';
import TrainsList from '../components/TrainsList';

const API_URL = "https://midsem-bootcamp-api.onrender.com/";

function LinesPages() {

    const [data, setData] = useState(null);
    const [stations, setStations] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchData(color) {
        try {
            const trainsResponse = await fetch(API_URL + `arrivals/${color}`);
            const stationsResponse = await fetch(API_URL + `stations/${color}`);
            if (!trainsResponse.ok) {
                throw Error("Problem in fetching data");
            }
            if (!stationsResponse.ok) {
                throw Error("Problem fetching stations");
            }
            const newData = await trainsResponse.json();
            setData(newData);
            const newStations = await stationsResponse.json();
            setStations(newStations)
            setError(null);
            setLoading(false);
        } catch (error) {
            console.log("Error occured: " + error);
            setError(error);
            setLoading(false);
        }
    }

    useEffect( () => {
        fetchData("blue")
    }, [])

    return (
        <div className="lines-page">
            { error && <p> Error occurred </p>}
            { loading && <h1 className='text-2xl font-bold flex p-10'> Loading... </h1>}
            { data && <TrainsList trainsList={data} stationsList={stations} />}
        </div>
    )
}

export default LinesPages;