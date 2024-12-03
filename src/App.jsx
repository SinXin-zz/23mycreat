import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css";
import { CiUmbrella } from "react-icons/ci";

function App() {
    // 要用jason資料要寫在return前
    useEffect(() => {
        (async () => {
            // const data = await axios.get('./F-C0032-001.json');
            const data = await axios.get('./F-C0032-001.json');
            const { location } = data.data.cwaopendata.dataset;
            console.log(location);

            //locationName =>縣市名
            //elementName =>Wx =>天氣概況
            //elementName =>PoP =>降雨律

            location.map((city)=>{
                return <div key={city.locationName}>{city.locationName}</div>
            })
        })()
    }, [])


    return (
        <>
            <div className="wrap">
                <h2>36小時天氣預報</h2>
            </div>
            {}

            {/* 一列兩欄 */}
            <div className="row">
                {

                }


            </div>



        </>
    )
}
export default App