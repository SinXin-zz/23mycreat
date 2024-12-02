import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css";

function App() {
    // 要用jason資料要寫在return前
    useEffect(() => {
        (async () => {
            // const data = await axios.get('./F-C0032-001.json');
            const data = await axios.get('./F-C0032-001.json');
            const { location } = data.data.cwaopendata.dataset;
            console.log(location);

        })
    }, [])


    return (
        <>
            <h2>36小時天氣預報</h2>
            <div className="col1">
                <div className="taipei">
                    <h3>台北市</h3>
                    <div className="dayWeather">
                        <h4>2日</h4>
                        <p>上午6:00</p>
                        <p>~</p>
                        <p>下午6:00</p>
                        <figure><img src="./public/weatherIcon/多雲.svg" alt="" /></figure>
                        <p>晴時多雲</p>
                    </div>
                    <div className="dayWeather">
                        <h4>2日</h4>
                        <p>上午6:00</p>
                        <p>~</p>
                        <p>下午6:00</p>
                        <figure><img src="./public/weatherIcon/多雲.svg" alt="" /></figure>
                        <p>晴時多雲</p>
                    </div>
                    <div className="dayWeather">
                        <h4>2日</h4>
                        <p>上午6:00</p>
                        <p>~</p>
                        <p>下午6:00</p>
                        <figure><img src="./public/weatherIcon/多雲.svg" alt="" /></figure>
                        <p>晴時多雲</p>
                    </div>
                </div>

                <div className="newtaipei">
                    <h3>新北市</h3>
                    <div className="dayWeather">
                        <h4>2日</h4>
                        <p>上午6:00</p>
                        <p>~</p>
                        <p>下午6:00</p>
                        <figure><img src="./public/weatherIcon/多雲.svg" alt="" /></figure>
                        <p>晴時多雲</p>
                    </div>
                    <div className="dayWeather">
                        <h4>2日</h4>
                        <p>上午6:00</p>
                        <p>~</p>
                        <p>下午6:00</p>
                        <figure><img src="./public/weatherIcon/多雲.svg" alt="" /></figure>
                        <p>晴時多雲</p>
                    </div>
                    <div className="dayWeather">
                        <h4>2日</h4>
                        <p>上午6:00</p>
                        <p>~</p>
                        <p>下午6:00</p>
                        <figure><img src="./public/weatherIcon/多雲.svg" alt="" /></figure>
                        <p>晴時多雲</p>
                    </div>
                </div>
            </div>


        </>
    )
}
export default App