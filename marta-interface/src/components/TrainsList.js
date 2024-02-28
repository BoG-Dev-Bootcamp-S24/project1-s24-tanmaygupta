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
    const [eastbound, setEastbound] = useState(false);
    const [westbound, setWestbound] = useState(false);

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

        filterTrains = filterTrains.filter((train) => {
            if ((!arriving && !scheduled) || (arriving && scheduled)) {
                return true;
            } else {
                return  (arriving ? train.WAITING_TIME === "Arriving" : train.WAITING_TIME !== "Arriving")
            }
        })

        filterTrains = filterTrains.filter((train) => {
            if ((!northbound && !southbound) || (northbound && southbound)) {
                return true;
            } else {
                return  (northbound ? train.DIRECTION === "N" : train.DIRECTTION === "S")
            }
        })

        filterTrains = filterTrains.filter((train) => {
            if ((!eastbound && !westbound) || (eastbound && westbound)) {
                return true;
            } else {
                return  (eastbound ? train.DIRECTION === "E" : train.DIRECTION === "W")
            }
        })
        
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

        const toggleEastbound = (() => {
            setEastbound(!eastbound);
        }) 

        const toggleWestbound = (() => {
            setWestbound(!westbound);
        }) 

        const line = trains[0].LINE

        return (
            <div className="flex">
                <Stations stations={stationsList} setCurrStation={setCurrStation}/>
                <div className='flex flex-col flex-grow'>
                    { (line === "GOLD" || line === "RED") && (
                        <div className='flex flex-row justify-around items-center mx-2 text-white my-3'>
                            <button className={arriving ? 'rounded-md bg-green-600 shadow-md px-4 py-1 transform transition-transform scale-105' : 'rounded-md bg-slate-800 px-4 py-1'} onClick={toggleArriving}> Arriving </button>
                            <button className={scheduled ? 'rounded-md bg-green-600 shadow-md px-4 py-1 transform transition-transform scale-105' : 'rounded-md bg-slate-800 px-4 py-1'} onClick={toggleScheduled}> Scheduled </button>
                            <button className={northbound ? 'rounded-md bg-green-600 shadow-md px-4 py-1 transform transition-transform scale-105' : 'rounded-md bg-slate-800 px-4 py-1'} onClick={toggleNorthbound}> Northbound </button>
                            <button className={southbound ? 'rounded-md bg-green-600 shadow-md px-4 py-1 transform transition-transform scale-105' : 'rounded-md bg-slate-800 px-4 py-1'} onClick={toggleSouthbound}> Southbound </button>
                        </div>
                    )}

                    { (line === "BLUE" || line === "GREEN") && (
                        <div className='flex flex-row justify-around items-center text-white mx-2 my-3'>
                            <button className={arriving ? 'rounded-md bg-green-600 shadow-md px-4 py-1 transform transition-transform scale-105' : 'rounded-md bg-slate-800 px-4 py-1'} onClick={toggleArriving}> Arriving </button>
                            <button className={scheduled ? 'rounded-md bg-green-600 shadow-md px-4 py-1 transform transition-transform scale-105' : 'rounded-md bg-slate-800 px-4 py-1'} onClick={toggleScheduled}> Scheduled </button>
                            <button className={eastbound ? 'rounded-md bg-green-600 shadow-md px-4 py-1 transform transition-transform scale-105' : 'rounded-md bg-slate-800 px-4 py-1'} onClick={toggleEastbound}> Eastbound </button>
                            <button className={westbound ? 'rounded-md bg-green-600 shadow-md px-4 py-1 transform transition-transform scale-105' : 'rounded-md bg-slate-800 px-4 py-1'} onClick={toggleWestbound}> Westbound </button>
                        </div>
                    )}
                    <div>
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