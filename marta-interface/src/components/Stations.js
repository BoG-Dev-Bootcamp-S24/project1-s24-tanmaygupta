import { useState } from "react"

const API_URL = "https://midsem-bootcamp-api.onrender.com/";

export default function Stations( {stations} ) {

    return (
        <div>
            {stations.map((stations) => {
                return (
                    <p> {station} </p>
                )
            })}
        </div>
    )
}