
<h1>123</h1>
function App() {

  //建立函式方法1
  function sayhi(){
    alert("hi3")
  }


  return (
    <div>
      {/* 事件處理1 : 在html標籤上綁定事件 */}
      <button onClick={
        //匿名函式寫法
        function () {
          alert("hi")
        }}>打招呼</button>

        <button onClick={
          //箭頭函式
          ()=>{
            alert("hi2")
          }
        }>打招呼2</button>

        {/* 事件處理2:呼叫函式 */}
        {/* 等待被呼叫的函式，函式名稱後面不可以加上()，不然會直接被執行 */}
        <button onClick={sayhi}>打招呼3</button>

    </div>
  )
}
