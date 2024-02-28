export default function Stations( {stations, setCurrStation} ) {

    function clicked(station) {
        if (station === "Hamilton E. Holmes") {
            station = "HE Holmes"
        } else if (station === "GWCC/CNN Center") {
            station = "Dome"
        } else if (station === "Edgewood") {
            station = "Candler Park"
        } else if (station === "Lakewood/Ft. McPherson") {
            station = "Lakewood"
        }
        setCurrStation(station);
    }

    return (
        <div className="text-white bg-slate-800 p-10 flex flex-col text-lg">
            <button onClick={() => clicked(null)}> All Stations </button>
            {stations.map((station) => {
                return (
                    <button className="text-lg mt-3" onClick={() => clicked(station)}> {station} </button>
                )
            })}
        </div>
    )
}