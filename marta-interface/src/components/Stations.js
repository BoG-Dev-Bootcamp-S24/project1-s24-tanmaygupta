export default function Stations( {stations, setCurrStation} ) {

    function clicked(station) {
        setCurrStation(station);
    }

    return (
        <div className="text-white bg-slate-800 p-10 flex flex-col text-xl leading-8">
            <button onClick={() => clicked(null)}> All Stations </button>
            {stations.map((station) => {
                return (
                    <button className="text-xl leading-8" onClick={() => clicked(station)}> {station} </button>
                )
            })}
        </div>
    )
}