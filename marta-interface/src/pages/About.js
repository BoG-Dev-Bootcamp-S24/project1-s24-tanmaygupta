import { useNavigate } from "react-router-dom";
import martaLogo from "../imgs/martaLogo.png"
import martaTrain from "../imgs/martaTrain.png"

export default function AboutMarta() {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row justify-between h-15 items-center text-xl bg-slate-300 py-3">
                <img src={martaLogo} alt="Marta Logo" className="w-36 h-auto ml-10"></img>
                <button className="justify-self-end mr-10 px-3 py-1 hover:bg-slate-400 rounded-md" onClick={() => navigate("/")}> Home </button>
            </div>
            <div className="h-screen flex flex-row">
                <div className="w-3/5 ml-40 mt-24">
                    <h1 className="text-5xl font-extrabold "> About Us </h1>
                    <p className="mt-8 font-semibold text-2xl"> Our Mission </p>
                    <p className="mt-4 text-xl"> To advocate for and provide safe, multimodal transit services that advance prosperity, connectivity and equity for a more livable region. </p>
                    <p className="mt-8 font-semibold text-2xl"> Our Priorities </p>
                    <p className="mt-4 text-xl"> Everyday, we will do our part at MARTA to operate a transit system that:</p>
                    <ul className="list-disc text-xl ml-4">
                        <li> Consistently provides excellence in customer service </li>
                        <li> Delivers the capital program with speed and efficiency </li>
                        <li> Strengthens the MARTA brand </li>
                        <li> Demonstrates fiscal responsibility </li>
                    </ul>
                </div>
                <img className="w-1/3 object-contain mx-20 -mt-16" src={martaTrain} alt="Gold Page image"></img>
            </div>
        </div>
    )
}