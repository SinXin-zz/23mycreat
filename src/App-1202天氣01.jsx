import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css";
import { CiUmbrella } from "react-icons/ci";

function App() {
    // 要用jason資料要寫在return前
    useEffect(() => {
        (async () => {
            // const data = await axios.get('./F-C0032-001.json');
            const data = await axios.get('https://github.com/SinXin-zz/23myreact/blob/main/F-C0032-001.json');
            const { location } = data.data.cwaopendata.dataset;
            console.log(location);

            //locationName =>縣市名
            //elementName =>Wx =>

        })
    }, [])


    return (
        <>
            <h2>36小時天氣預報</h2>

            {/* 一列兩欄 */}
            <div className="row">
                <div className="col">
                    {/* 卡片樣式 */}
                    <div className="card">
                        {/* 標題 */}
                        <div className="card-title">台北市</div>
                        {/* 內容 */}
                        <div className="card-body">
                            {/* 一列三欄 */}
                            <div className="row2">
                                <div className="col2">
                                    <p>2日</p>
                                    <p>上午6:00 <br />
                                        ~<br />
                                        下午6:00
                                    </p>
                                    <p>
                                        <img src="./public/weatherIcon/多雲.svg" alt="" />
                                    </p>
                                    <p><CiUmbrella />10%</p>
                                </div>
                                <div className="col2">
                                    <p>2日</p>
                                    <p>上午6:00 <br />
                                        ~<br />
                                        下午6:00
                                    </p>
                                    <p>
                                        <img src="./public/weatherIcon/多雲.svg" alt="" />
                                    </p>
                                    <p><CiUmbrella />10%</p>
                                </div>
                                <div className="col2">
                                    <p>2日</p>
                                    <p>上午6:00 <br />
                                        ~<br />
                                        下午6:00
                                    </p>
                                    <p>
                                        <img src="./public/weatherIcon/多雲.svg" alt="" />
                                    </p>
                                    <p><CiUmbrella />10%</p>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>

                <div className="col">
                    {/* 卡片樣式 */}
                    <div className="card">
                        {/* 標題 */}
                        <div className="card-title">台北市</div>
                        {/* 內容 */}
                        <div className="card-body">
                            {/* 一列三欄 */}
                            <div className="row2">
                                <div className="col2">
                                    <p>2日</p>
                                    <p>上午6:00 <br />
                                        ~<br />
                                        下午6:00
                                    </p>
                                    <p>
                                        <img src="./public/weatherIcon/多雲.svg" alt="" />
                                    </p>
                                    <p><CiUmbrella />10%</p>
                                </div>
                                <div className="col2">
                                    <p>2日</p>
                                    <p>上午6:00 <br />
                                        ~<br />
                                        下午6:00
                                    </p>
                                    <p>
                                        <img src="./public/weatherIcon/多雲.svg" alt="" />
                                    </p>
                                    <p><CiUmbrella />10%</p>
                                </div>
                                <div className="col2">
                                    <p>2日</p>
                                    <p>上午6:00 <br />
                                        ~<br />
                                        下午6:00
                                    </p>
                                    <p>
                                        <img src="./public/weatherIcon/多雲.svg" alt="" />
                                    </p>
                                    <p><CiUmbrella />10%</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}
export default App