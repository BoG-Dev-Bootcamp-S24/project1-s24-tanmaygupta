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

        <div className={`flex justify-start py-8 ${border} border-2`}>
            <p className="ml-4 w-10 text-5xl"> M </p>
            <div className="flex flex-col w-96 ml-16 items-start">
                <p> {train.STATION} --{'>'} {train.DESTINATION} </p>
                <div className="flex flex-row">
                    <div className="w-16 mr-10"> <p className={`text-white ${background}`}> {train.LINE} </p> </div>
                    {train.DELAY_TIME === "T0S" ? <p className="text-green-500"> On Time </p> : <p className="text-red-500"> Delayed </p>}
                </div>
            </div>
            <p className="flex items-center"> {train.WAITING_TIME} </p>
        </div>
    )
}