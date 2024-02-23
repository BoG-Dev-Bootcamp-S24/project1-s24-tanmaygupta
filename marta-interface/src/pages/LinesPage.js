import { useState, useEffect } from 'react';

const API_URL = "https://midsem-bootcamp-api.onrender.com/";

function LinesPages() {


    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    async function fetchData() {
        try {
            const response = await fetch(API_URL + "arrivals/gold");
            if (!response.ok) {
                throw Error("Problem in fetching data");
            }
            const newData = await response.json();
            setData(newData);
            setError(null);
        } catch (error) {
            console.log("Error occured: " + error);
            setError(error);
        }
    }

    useEffect( () => {
        fetchData()
    }, [])

    return (
        <div className="lines-page">
            { error && <p> Error occurred </p>}
            { data && <p> Data fetched properly </p>}
        </div>
    )
}

export default LinesPages;