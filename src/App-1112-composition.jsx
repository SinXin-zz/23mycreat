//傳遞組件
//把組件放到訂一個組件的內容裡面
//這種寫法在react中叫組合(composition)
//此方法在不影響組件功能的基礎上，別外再給組件加入額外的功能

// 建立一個新的組件
function SecondComponent(){
  return <h1>我是SecondComponent組件</h1>
}

//子組件
function MyComponent({children}) {
  return <>
  我是MyComponent
  {children}
  </>
}

//父組件
function App() {
  return (
    <>
    {/* 等同於下面寫的 <MyComponent children ={<SecondComponent/>}/> */}
      <MyComponent>
        {/* 因為children是react內建的屬性，所以傳送組件時，可以不用寫children屬性 */}
        <SecondComponent/> {/* 子組件呼叫新組件(這時候子組件是新組件的父)，這邊的父組件再呼叫子組件 一層一層往下 */}
      </MyComponent>

      
    </>
  )
}

export default App
