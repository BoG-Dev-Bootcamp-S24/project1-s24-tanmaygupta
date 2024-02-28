export default function Stations( {stations, setCurrStation, currStation} ) {

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
        <div className="text-white bg-slate-800 flex flex-col text-lg">
            <button className={currStation === null ? "text-lg w-100 px-10 py-3 bg-slate-700" : "text-lg mx-10 my-3"} onClick={() => clicked(null)}> All Stations </button>
            {stations.map((station) => {
                return (
                    <button className={currStation === station ? "text-lg w-100 px-10 py-3 bg-slate-700" : "text-lg mx-10 my-3"} onClick={() => clicked(station)}> {station} </button>
                )
            })}
        </div>
    )
}