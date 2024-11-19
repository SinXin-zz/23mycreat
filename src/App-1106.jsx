import "./App.css"
//導入外部檔案一定寫第一行


//不建議把元件建在一起 但還是可以運行

//建立新的元件 //字首要大寫不能空格
function MyComponent() {
  return (
    //空標籤 : Fragment
    <>
      <h1>我是元件</h1>
      <p>只能輸出一個元素 要一個以上的話要用空標籤包起來</p>
    </> 
  )
}


function App() {

  //建立變數
  const strName="alex";
  return (
    <div>
      {/* JSX中使用js變數，前後加大括號{變數名稱} */}
      <h1>{strName}午安</h1>

      

      {/* 通常style都另外寫一個css / 變數中使用函數 */}
      <h1 style={{
        color:"red",
        width:"300px",       
      }}>{strName.toUpperCase()}午安</h1>

      {/* 屬性中使用變數 */}
      <label className="lbl-linecolor" htmlFor="username">請輸入姓名:</label>  {/* label for能點標題就跳進輸入框 */}
      <input type="text" id="username" placeholder="提示字"/> {/* 提示字那邊也可以放{變數名稱} */}

      <MyComponent></MyComponent>
      <MyComponent />
    </div>
    //中間沒有要做什麼事的話可以刪一個 後面記得+關閉標籤<MyComponent/>
  )
}

export default App
//元件寫好之後想被其他檔案使用的話 要export檔案 元件名
