import { useNavigate } from "react-router-dom"
import goldImage from "../imgs/gold_page.png"

export default function HomePage() {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col">
            <nav className="flex justify-end">
                <button onClick={() => navigate("/linespage/gold")}> About Marta </button>
            </nav>
            <div>
                <h1> Welcome to the MARTA Interface </h1>
            </div>
            <img className="w-20" src={goldImage} alt="Gold Page image"></img>
        </div>
    )
}