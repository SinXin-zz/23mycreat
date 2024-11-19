
function Component() {
  return <h1>React</h1>
}

function App() {
  //建立陣列(可以是任何形式的資料)元件也可
  //同一個陣列中,KEY屬性的值不可重複
  const listItem = [
    <Component key="0" />,
    <Component key="1" />,
    <Component key="2" />,
  ]

  //

  const listbook = [
    { bookname: '本1', id: 'book1' },
    { bookname: '本2', id: 'book2' },
    { bookname: '本3', id: 'book3' },
  ]

  //過濾出陣列中除了本2的書本
  //三元運算子的判斷式
  //判斷式?條件成立:條件不成立
  const filterBooks = listbook.filter((book) => {
    return book.bookname !== '本2' ? true : false
  })


  return (
    <>
      {/* 使用陣列方法1 */}
      {listItem}
      <hr />
      {/* 使用陣列方法2 =>map()=> 此方法可以把一個陣列轉換成另一個陣列 */}
      {
        listbook.map((book) => {
          return <div>{book.bookname}</div>
        })
      }
    </>
  )

}

export default App
