import { useEffect } from "react";

function App() {
    //建立變色函式
    const changeColor = () => {
        let p1 = document.getElementById('p1');
        p1.style.color = "blue";
        p1.style.fontWeight = "blod";
    }
    //顏色會變回來的函式
    const restoreColor = () => {
        let p1 = document.getElementById('p1');
        p1.style.color = "";
        p1.style.fontWeight = "";
    }

    



    return (
        <>
            <h1>滑鼠 p1變色在外面建立函式， p2變內容滑鼠綁定事件 </h1>
            <hr />

            <p id="p1"
                onMouseOver={changeColor}

                onMouseOut={restoreColor}
            >變色</p>


            <p id="p2"
                onMouseEnter={() => {
                    let p2 = document.getElementById('p2');
                    //第一步 : 取得段落
                    p2.textContent = "I have changed!";
                }}

                onMouseLeave={() => {
                    let p2 = document.getElementById('p2');
                    //第一步 : 取得段落
                    p2.textContent = "變回來!";
                }}
            > 變內容</p>


        </>
    )
}
export default App