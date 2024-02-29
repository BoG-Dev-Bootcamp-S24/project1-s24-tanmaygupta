import { useState, useEffect } from 'react';
import TrainsList from '../components/TrainsList';
import NavBar from '../components/NavBar';

const API_URL = "https://midsem-bootcamp-api.onrender.com/";

function LinesPages() {

    const [line, setLine] = useState(null);
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
        fetchData(line)
    }, [line])

    return (
        <div className="lines-page">
            <NavBar line={line} setLine={setLine} setLoading={setLoading}/>
            { error && <p> Error occurred </p>}
            { !loading ? <TrainsList trainsList={trains} stationsList={stations} line={line}/> : <h1 className='text-5xl font-bold flex mt-20 p-10 justify-center'> Loading... </h1>}
        </div>
    )
}

export default LinesPages;