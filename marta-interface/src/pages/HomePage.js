import { useNavigate } from "react-router-dom"
import martaLogo from "../imgs/martaLogo.png"
import martaRoutes from "../imgs/martaRoutes.png"

export default function HomePage() {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row justify-between h-15 items-center text-xl bg-slate-300 py-3">
                <img src={martaLogo} alt="Marta Logo" className="w-36 h-auto ml-10"></img>
                <button className="justify-self-end mr-10 px-3 py-1 hover:bg-slate-400 rounded-md" onClick={() => navigate("/about")}> About Marta </button>
            </div>
            <div className="h-screen flex flex-row">
                <div className="w-2/5 ml-40 mt-32">
                    <h1 className="text-5xl font-extrabold "> View Routes Schedule: </h1>
                    <ul className="mt-10 ml-5 text-xl">
                        <li> <span className="mr-2">&rarr;</span> <button onClick={() => navigate("/linespage/gold")} className="mb-8 rounded-lg px-5 py-2 hover:bg-yellow-500">Gold Line</button></li>
                        <li> <span className="mr-2">&rarr;</span> <button onClick={() => navigate("/linespage/red")} className="mb-8 rounded-lg px-5 py-2 hover:bg-red-500">Red Line</button></li>
                        <li> <span className="mr-2">&rarr;</span> <button onClick={() => navigate("/linespage/blue")} className="mb-8 rounded-lg px-5 py-2 hover:bg-blue-500">Blue Line</button></li>
                        <li> <span className="mr-2">&rarr;</span> <button onClick={() => navigate("/linespage/green")} className="mb-8 rounded-lg px-5 py-2 hover:bg-green-500">Green Line</button></li>
                    </ul>
                </div>
                <img className="w-1/3 object-contain mx-20 -mt-16" src={martaRoutes} alt="Gold Page image"></img>
            </div>
        </div>
    )
}