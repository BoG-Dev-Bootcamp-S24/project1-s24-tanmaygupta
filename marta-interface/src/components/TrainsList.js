import {useState} from 'react';
import Stations from "./Stations";
import Train from "./Train";

export default function TrainsList( {trainsList, stationsList} ) {

    const trains = trainsList;
    const [currStation, setCurrStation] = useState(null);
    const [arriving, setArriving] = useState(false);
    const [scheduled, setScheduled] = useState(false);

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
        let filterTrains = (trains.filter((train, index) => { //filter to only include latest data
            const key = train.DESTINATION + train.STATION
            return lastIndexMap[key] === index
        }))

        if (currStation !== null) {
            filterTrains = filterTrains.filter((train) => {
                return train.STATION.includes(currStation.toUpperCase());
            })
            console.log(filterTrains);
        }

        if (arriving) {
            filterTrains = filterTrains.filter((train) => {
                return train.WAITING_TIME === "Arriving"
            })
        }

        if (scheduled) {
            filterTrains = filterTrains.filter((train) => {
                return train.WAITING_TIME !== "Arriving"
            })
        }

        const toggleArriving = (() => {
            setArriving(!arriving);
        }) 

        const toggleScheduled = (() => {
            setScheduled(!scheduled);
        })

        return (
            <div className='flex flex-col'>
                <button className="" onClick={toggleArriving}> Arriving </button>
                <button onClick={toggleScheduled}> Scheduled </button>
                <div className="flex">
                    <Stations stations={stationsList} setCurrStation={setCurrStation}/>
                    <div className="flex-grow">
                        {
                            filterTrains.map((train) => {
                                return ( <Train train={train} /> )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}