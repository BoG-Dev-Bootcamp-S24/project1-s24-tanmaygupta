export default function Train( {train} ) {
    const color = train.LINE
    let border = "";
    let background = "";
    if (color === "GOLD") {
        border = "border-y-yellow-500"
        background = "bg-yellow-500"
    } else if (color === "BLUE") {
        border = "border-y-blue-500"
        background = "bg-blue-500"
    } else if (color === "GREEN") {
        border = "border-y-green-500"
        background = "bg-green-500"
    } else if (color === "RED") {
        border = "border-y-red-500"
        background = "bg-red-500"
    }

    return (
        <div className={`flex justify-start py-8 ${border} border-b-4`}>
            <p className="ml-6 w-10 text-5xl font-extrabold"> {train.STATION[0]} </p>
            <div className="flex flex-col w-auto ml-16 items-start font-semibold">
                <p> {train.STATION} --{'>'} {train.DESTINATION} </p>
                <div className="flex flex-row font-semibold">
                    <div className={`w-16 mr-10 rounded-md ${background}`}> <p className={`text-white`}> {train.LINE} </p> </div>
                    {train.DELAY_TIME === "T0S" ? <p className="text-green-500"> On Time </p> : <p className="text-red-500 italic"> Delayed </p>}
                </div>
            </div>
            <p className="flex items-center ml-20"> {train.WAITING_TIME} </p>
        </div>
    )
}