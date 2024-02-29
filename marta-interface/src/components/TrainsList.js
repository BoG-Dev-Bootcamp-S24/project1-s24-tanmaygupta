import {useState} from 'react';
import Stations from "./Stations";
import Train from "./Train";

export default function TrainsList( {trainsList, stationsList, line} ) {

    const trains = trainsList;
    const [currStation, setCurrStation] = useState(null);
    const [arriving, setArriving] = useState(false);
    const [scheduled, setScheduled] = useState(false);
    const [northbound, setNorthbound] = useState(false);
    const [southbound, setSouthbound] = useState(false);
    const [eastbound, setEastbound] = useState(false);
    const [westbound, setWestbound] = useState(false);

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
    }

    // filters for buttons clicked
    filterTrains = filterTrains.filter((train) => {
        if ((!arriving && !scheduled) || (arriving && scheduled)) {
            return true;
        } else {
            return  (arriving ? train.WAITING_TIME === "Arriving" : train.WAITING_TIME !== "Arriving")
        }}
    )

    filterTrains = filterTrains.filter((train) => {
        if ((!northbound && !southbound) || (northbound && southbound)) {
            return true;
        } else {
            return  (northbound ? train.DIRECTION === "N" : train.DIRECTION === "S")
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

    function displayNoTrains () {
        return (
            <div className='flex flex-col justify-start items-center p-10'>
                <h2 className='font-bold text-xl'> There are currently no trains running at this moment. </h2>
                <br />
                <h2 className='text-xl'>Please check back again later</h2>
            </div>
        )
    }

    function displayTrains() {
        return (
            <div>
                
                { filterTrains.map((train) => {
                    return ( <Train train={train} /> )
                }) }
            </div>
        )
    }

    let lineColor = "";
    if (line === "gold") {
        lineColor = "border-y-yellow-500"
    } else if (line === "red") {
        lineColor = "border-y-red-500"
    } else if (line === "blue") {
        lineColor = "border-y-blue-500"
    } else if (line === "green") {
        lineColor = "border-y-green-500"
    }

    return (
        <div className="flex">
            <Stations stations={stationsList} setCurrStation={setCurrStation} currStation={currStation}/>
            <div className='flex flex-col flex-grow'>
                { (line === "gold" || line === "red") && (
                    <div className={`flex flex-row justify-around items-center text-white pb-3 mt-3 border-b-4 ${lineColor}`}>
                        <button className={arriving ? 'rounded-md bg-green-600 shadow-md px-5 py-1 transform transition-transform scale-105' : 'rounded-md bg-slate-800 px-5 py-1'} onClick={toggleArriving}> Arriving </button>
                        <button className={scheduled ? 'rounded-md bg-green-600 shadow-md px-5 py-1 transform transition-transform scale-105' : 'rounded-md bg-slate-800 px-5 py-1'} onClick={toggleScheduled}> Scheduled </button>
                        <button className={northbound ? 'rounded-md bg-green-600 shadow-md px-5 py-1 transform transition-transform scale-105' : 'rounded-md bg-slate-800 px-5 py-1'} onClick={toggleNorthbound}> Northbound </button>
                        <button className={southbound ? 'rounded-md bg-green-600 shadow-md px-5 py-1 transform transition-transform scale-105' : 'rounded-md bg-slate-800 px-5 py-1'} onClick={toggleSouthbound}> Southbound </button>
                    </div>
                )}

                { (line === "blue" || line === "green") && (
                    <div className={`flex flex-row justify-around items-center text-white pb-3 mt-3 border-b-4 ${lineColor}`}>
                        <button className={arriving ? 'rounded-md bg-green-600 shadow-md px-5 py-1 transform transition-transform scale-105' : 'rounded-md bg-slate-800 px-5 py-1'} onClick={toggleArriving}> Arriving </button>
                        <button className={scheduled ? 'rounded-md bg-green-600 shadow-md px-5 py-1 transform transition-transform scale-105' : 'rounded-md bg-slate-800 px-5 py-1'} onClick={toggleScheduled}> Scheduled </button>
                        <button className={eastbound ? 'rounded-md bg-green-600 shadow-md px-5 py-1 transform transition-transform scale-105' : 'rounded-md bg-slate-800 px-5 py-1'} onClick={toggleEastbound}> Eastbound </button>
                        <button className={westbound ? 'rounded-md bg-green-600 shadow-md px-5 py-1 transform transition-transform scale-105' : 'rounded-md bg-slate-800 px-5 py-1'} onClick={toggleWestbound}> Westbound </button>
                    </div>
                )}
                { filterTrains.length === 0 ? displayNoTrains() : displayTrains() }
            </div>
        </div>
    )
}