import { useState, useEffect } from 'react';
import Train from '../components/Train';
import TrainsList from '../components/TrainsList';

const API_URL = "https://midsem-bootcamp-api.onrender.com/";

function LinesPages() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {
            const response = await fetch(API_URL + "arrivals/gold");
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
            setLoading(false);
        }
    }

    useEffect( () => {
        fetchData()
    }, [])

    return (
        <div className="lines-page">
            { error && <p> Error occurred </p>}
            { loading && <h1 className='text-2xl font-bold flex p-10'> Loading... </h1>}
            { data && <TrainsList trainsList={data} />}
        </div>
    )
}

export default LinesPages;