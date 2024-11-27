import { useState } from "react"

function App() {
    // 使用者名稱
    const [inputUseerName, setInputUseerName] = useState("我是文字方塊");

    // 縣市名
    const [selCity, setSelCity] = useState("預設值:台北市");
    const arrCity = ['台北市', '桃園市', '新北市'];

    //閱讀確認
    const [check, setCheck] = useState(false);

    //複選 : 多個核取方塊
    const [chkList, setChkList] = useState([]);

    //建立函式處理被勾選的項目
    const handleChkList = (e) => {
        // console.log(e.target.value);
        // 使用其餘運算子保留之前已經被勾選的項目+目前被勾選的項目
        // setChkList([...chkList,e.target.value]);

        //檢查是否被勾選
        if (e.target.checked) {
            //是 => 原本+新的
            setChkList([...chkList, e.target.value]);
        } else {
            //否 => 從原本被勾選的項目中,拿掉不要的(filter)
            setChkList(
                chkList.filter((list) => {
                    return list !== e.target.value
                })
            );
        }
    }

    return (
        <>
            <h1>React-表單</h1>
            <hr />
            {/* input標籤 */}
            <label htmlFor="username">使用者名稱</label>
            <input type="text" id="username"
                value={inputUseerName}
                onChange={(e) => {
                    setInputUseerName(e.target.value);
                }}
            />{inputUseerName}
            <br />
            {/* select */}
            <label htmlFor="city">縣市名</label>
            <select name="" id="city"
                value={selCity}
                onChange={(e) => {
                    setSelCity(e.target.value);
                }}>

                {/*逐行寫法*/}
                {/* 
                <option value="台北市">台北市</option>
                <option value="桃園市">桃園市</option>
                <option value="新北市">新北市</option> */}


                {/*讀取陣列寫法 在jsx寫js,記得包{}*/}
                <option value="" disabled>請選擇</option>
                {
                    arrCity.map((city) => {
                        return <option value={city} key={city}>{city}</option>
                    })
                }
            </select>{selCity}
            <br />

            {/* 單一核取方塊 */}
            <label htmlFor="isCheck">閱讀確認</label>
            <input type="checkbox" id="isCheck"
                value={check}
                onChange={(e) => {
                    //處理勾選值的變化
                    setCheck(e.target.checked);
                }} />{check.toString()}

            <br />
            {/* 複選 : 多個核取方塊 */}

            <input type="checkbox" id="chkList1" name="like" value='HTML' onChange={handleChkList} />
            <label htmlFor="chkList1">HTML</label>
            <input type="checkbox" id="chkList2" name="like" value='CSS' onChange={handleChkList} />
            <label htmlFor="chkList1">CSS</label>
            <input type="checkbox" id="chkList3" name="like" value='JS' onChange={handleChkList} />
            <label htmlFor="chkList1">JS</label>
            <br />
            {chkList}

        </>
    )
}
export default App