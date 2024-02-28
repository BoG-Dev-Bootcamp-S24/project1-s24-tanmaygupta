import { useState, useEffect } from 'react';
import TrainsList from '../components/TrainsList';

const API_URL = "https://midsem-bootcamp-api.onrender.com/";

function LinesPages() {

    const [trains, setTrains] = useState(null);
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
            const newTrains = await trainsResponse.json();
            setTrains(newTrains);
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
        fetchData("green")
    }, [])

    return (
        <div className="lines-page">
            { error && <p> Error occurred </p>}
            { loading && <h1 className='text-2xl font-bold flex p-10'> Loading... </h1>}
            { trains && stations && <TrainsList trainsList={trains} stationsList={stations} />}
        </div>
    )
}

export default LinesPages;