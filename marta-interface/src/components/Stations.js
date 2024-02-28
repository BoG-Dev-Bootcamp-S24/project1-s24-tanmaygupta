export default function Stations( {stations} ) {
    return (
        <div className=" text-white bg-slate-800 p-10">
            <p> All Stations </p>
            {stations.map((station) => {
                return (
                    <p className="text-xl "> {station} </p>
                )
            })}
        </div>
    )
}