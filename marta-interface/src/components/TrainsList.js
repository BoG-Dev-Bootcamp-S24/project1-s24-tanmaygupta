import {useState} from 'react';
import Stations from "./Stations";
import Train from "./Train";

export default function TrainsList( {trainsList, stationsList} ) {

    const trains = trainsList;
    const [currStation, setCurrStation] = useState(null);
    const [arriving, setArriving] = useState(false);
    const [scheduled, setScheduled] = useState(false);
    const [northbound, setNorthbound] = useState(false);
    const [southbound, setSouthbound] = useState(false);

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

        // filter to only include latest data
        trains.forEach((train, index) => {
            const key = train.DESTINATION + train.STATION
            lastIndexMap[key] = index;
        })

        let filterTrains = (trains.filter((train, index) => { 
            const key = train.DESTINATION + train.STATION
            return lastIndexMap[key] === index
        }))

        // filter by station clicked
        if (currStation !== null) {
            filterTrains = filterTrains.filter((train) => {
                return train.STATION.includes(currStation.toUpperCase());
            })
            console.log(filterTrains);
        }

        // filters for buttons clicked
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

        if (northbound) {
            filterTrains = filterTrains.filter((train) => {
                return train.DIRECTION === "N"
            })
        }

        if (southbound) {
            filterTrains = filterTrains.filter((train) => {
                return train.DIRECTION === "S"
            })
        }

        // Toggle click functions

        const toggleArriving = (() => {
            setArriving(!arriving);
        }) 

        const toggleScheduled = (() => {
            setScheduled(!scheduled);
        })

        const toggleNorthbound = (() => {
            setNorthbound(!northbound);
        }) 

        const toggleSouthbound = (() => {
            setSouthbound(!southbound);
        }) 

        const line = trains[0].LINE

        return (
            <div className='flex flex-col'>
                <button onClick={toggleArriving}> Arriving </button>
                <button onClick={toggleScheduled}> Scheduled </button>
                { (line === "GOLD" || line === "RED") && (
                    <div>
                        <button onClick={toggleNorthbound}> Northbound </button>
                        <button onClick={toggleSouthbound}> Southbound </button>
                    </div>
                )}

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