import { useEffect } from "react";

function app() {
    //useEffect 通常用在監聽事件 或是拉外面資料的時候

    //每一次渲染之後執行
    // useEffect(() => { });

    // //只執行一次(開啟檔案的時候)
    // useEffect(() => { }, []);

    // //當陣列中的依賴條件改變時,就會執行
    // useEffect(() => { }, [count]);



    //每一次渲染之後執行
    useEffect(() => {
        /*按鈕監聽事件 需搭配 useEffect*/
        //取得按鈕
        let btn2 = document.getElementById('btn2');
        btn2.addEventListener('click', () => {
            //取得段落
            let p1b = document.getElementById('p1');
            //再變色
            p1b.style.color = "red";
        })
    });




    return (
        <>
            <h1>useEffect 可以更改執行順序</h1>
            <hr />
            <p id="p1">我是段落</p>
            {/* 綁定事件 不需要useEffect就可以執行 */}
            <button onClick={() => {
                //取得段落
                let p1a = document.getElementById('p1');

                //再變色
                p1a.style.color = "blue";
            }}>變藍色</button>

            {/*監聽事件的按鈕*/}
            <button id="btn2">變紅色</button>


        </>
    )
}
export default app