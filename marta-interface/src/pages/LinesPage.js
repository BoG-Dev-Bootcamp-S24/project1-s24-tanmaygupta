import { useState, useEffect } from 'react';
import TrainsList from '../components/TrainsList';

const API_URL = "https://midsem-bootcamp-api.onrender.com/";

function LinesPages() {

    const [data, setData] = useState(null);
    const [stations, setStations] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchTrains(color) {
        try {
            let response = await fetch(API_URL + `arrivals/${color}`);
            if (!response.ok) {
                throw Error("Problem in fetching data");
            }
            const newData = await response.json();
            setData(newData);
            response = await fetch(API_URL + `stations/${color}`);
            if (!response.ok) {
                throw Error("Problem fetching stations");
            }
            const newStations = await response.json();
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
        fetchTrains("red")
    }, [])

    return (
        <div className="lines-page">
            { error && <p> Error occurred </p>}
            { loading && <h1 className='text-2xl font-bold flex p-10'> Loading... </h1>}
            { data && <TrainsList trainsList={data} stations={stations} />}
        </div>
    )
}

export default LinesPages;