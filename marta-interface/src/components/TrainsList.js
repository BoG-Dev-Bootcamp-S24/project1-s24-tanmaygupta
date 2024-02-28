import Stations from "./Stations";
import Train from "./Train";

export default function TrainsList( {trainsList, stationsList} ) {

    const trains = trainsList

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
        const filterTrains = (trains.filter((train, index) => { //filter to only include latest data
            const key = train.DESTINATION + train.STATION
            return lastIndexMap[key] === index
        }))

        return (
            <div className="flex">
                <Stations stations={stationsList} />
                <div>
                    {
                        filterTrains.map((train) => {
                            return ( <Train train={train} /> ) //map to print all unique trains
                        })
                    }
                </div>
            </div>
        )
    }
}