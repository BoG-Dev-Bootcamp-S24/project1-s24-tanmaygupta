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
            setLoading(true);
            const trainsResponse = await fetch(API_URL + `arrivals/${color}`);
            if (!trainsResponse.ok) {
                throw Error("Problem in fetching data");
            }
            let newTrains = await trainsResponse.json();
            const lastIndexMap = {};
            newTrains.forEach((train, index) => {
                const key = train.STATION + train.DESTINATION;
                lastIndexMap[key] = index;
            });

            newTrains = newTrains.filter((train, index) => {
                const key = train.STATION + train.DESTINATION;
                return lastIndexMap[key] === index;
            });
            setTrains(newTrains);
            const stationsResponse = await fetch(API_URL + `stations/${color}`);
            if (!stationsResponse.ok) {
                throw Error("Problem fetching stations");
            }
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

    function displayLoading() {
        return (
            <h1 className='text-5xl font-bold flex mt-20 p-10 justify-center'> Loading... </h1>
        )
    }

    return (
        <div className="lines-page">
            <NavBar line={line} setLine={setLine} setLoading={setLoading}/>
            { error && <p> Error occurred </p>}
            { !loading ? <TrainsList trainsList={trains} stationsList={stations} line={line} loading={loading} setLoading={setLoading}/> : displayLoading()}
        </div>
    )
}

export default LinesPages;