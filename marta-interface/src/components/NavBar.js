import { useNavigate } from "react-router-dom"

export default function NavBar( {line} ) {

    const navigate = useNavigate();

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

    function clickLine(clickLine) {
        if (line !== clickLine) {
            navigate(`/linespage/${clickLine}`);
        }
    }

    return (
        <div className="flex flex-col">
            <nav className="flex flex-row justify-around h-14 items-center">
                <button className={line === "gold" ? 'rounded-md bg-yellow-500 shadow-md px-10 py-1 transform transition-transform scale-105' : 'rounded-md border-2 border-yellow-500 px-10 py-1'} onClick={() => clickLine("gold")}> Gold </button>
                <button className={line === "red" ? 'rounded-md bg-red-500 shadow-md px-10 py-1 transform transition-transform scale-105' : 'rounded-md border-2 border-red-500 px-10 py-1'} onClick={() => clickLine("red")}> Red </button>
                <button className={line === "blue" ? 'rounded-md bg-blue-500 shadow-md px-10 py-1 transform transition-transform scale-105' : 'rounded-md border-2 border-blue-500 px-10 py-1'} onClick={() => clickLine("blue")}> Blue </button>
                <button className={line === "green" ? 'rounded-md bg-green-500 shadow-md px-10 py-1 transform transition-transform scale-105' : 'rounded-md border-2 border-green-500 px-10 py-1'} onClick={() => clickLine("green")}> Green </button>
            </nav>
            <div className={`border-y-4 ${lineColor} py-2 mt-2 font-extrabold text-center`}>
                <h1 className="text-5xl"> {line === null ? "SELECT LINE" : line.toUpperCase()} </h1>
            </div>
        </div>
    )
}