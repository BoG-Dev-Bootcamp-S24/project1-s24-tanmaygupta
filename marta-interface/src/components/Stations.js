import { useState } from "react"

const API_URL = "https://midsem-bootcamp-api.onrender.com/";

export default function Stations( {stations} ) {
    return (
        <div>
            <p> All Stations </p>
            {stations.map((station) => {
                return (
                    <p> {station} </p>
                )
            })}
        </div>
    )
}