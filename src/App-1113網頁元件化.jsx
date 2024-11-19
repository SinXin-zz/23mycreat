import "./App.css";

//特色區元件
function ShowContent({arrData}){

}





function ShowContent() {
    //特色區資料
    // 用陣列去建立資料的話 要用中括號
    const contenData = [
        {
            id: 1,
            title: "1教學影音",
            desc: "1學習過程中若您提到任何問題或是任何想法都歡迎提出,我們會儘快解決",
        },
        {
            id: 2,
            title: "2教學影音",
            desc: "2學習過程中若您提到任何問題或是任何想法都歡迎提出,我們會儘快解決任何問題或是任何想法都歡迎提出,我們會儘快解決",
        },
        {
            id: 3,
            title: "3教學影音",
            desc: "3學習過程中若您提到任何問題或是任何想法都歡迎提出,我們會儘快解決",
        },
    ]
    return(
        <>

        </>
    )

    //推薦課程區資料
    function ShowContentClass(){}
    const recommendData = [
        {
            id:1,
            classimg:"public/unity.jpg",
            name:"1課程名稱",
            desc:"1推薦課程 學習過程中若您提到任何問題或是任何想法都歡迎提出,我們會儘快解決",
            teacher:"講師:111",
            time:"課程時數:11",
            price:"原價:1500",
            specialPrice:"特價:1000",
        },
        {
            id:2,
            classimg:"public/gamesalad.jpg",
            name:"2課程名稱",
            desc:"2推薦課程 學習過程中若您提到任何問題或是任何想法都歡迎提出,我們會儘快解決",
            teacher:"講師:222",
            time:"課程時數:22",
            price:"原價:1500",
            specialPrice:"特價:1000",
        },
        {
            id:1,
            classimg:"public/gwd.jpg",
            name:"3課程名稱",
            desc:"3推薦課程 學習過程中若您提到任何問題或是任何想法都歡迎提出,我們會儘快解決",
            teacher:"講師:333",
            time:"課程時數:33",
            price:"原價:1500",
            specialPrice:"特價:1000",
        },
    ]
    

    return (
        <>

            <main>
                <div id="banner" title="網站橫幅">
                    <img src="public/banner.jpg" alt="頁首廣告" />
                </div>

                {/* <!-- 特色區 元件化--> */}
                <div className="listbox">
                    {
                        contenData.map((item) => {
                            return (
                                <>
                                    <div className="content" >

                                    </div>
                                </>
                            )
                        })
                    }
                    {/* 在jsx中使用迴圈，要用map 在jsx中使用js語法要用大括號刮起來 */}

                    {/* <div class="content">
                        <h2><strong>{contenData.data1.title}</strong></h2>
                        <p>{contenData.data1.desc}</p>
                    </div>
                    <div class="content">
                        <h2><strong>{contenData.data2.title}</strong></h2>
                        <p>{contenData.data2.desc}</p>
                    </div>
                    <div class="content">
                        <h2><strong>3教學影音</strong></h2>
                        <p>3學習過程中若您提到任何問題或是任何想法<br />
                            都歡迎提出,我們會儘快解決</p>
                    </div> */}
                </div>

                <div class="maintitle">
                    <p>讓學習成為習慣</p>
                </div>

                <div class="recommendText">
                    <h2>推薦課程</h2>
                </div>

                {/* <!-- 推薦課程區 --> */}
                <div class="recommendCard">
                    <div class="card">
                        <img src="public/unity.jpg" alt="" />
                        <h2><strong>課程名稱</strong></h2>
                        <h3>學習過程中若您提到任何問題或是任何想法<br />
                            都歡迎提出,我們會儘快解決</h3>
                        <p>講師:xxx</p>
                        <p>課程時數:xxx</p>
                        <p><del>原價:1500</del><span>特價:1000</span></p>
                        <button>付款上課去</button>
                    </div>
                    <div class="card">
                        <img src="public/gamesalad.jpg" alt="" />
                        <h2><strong>課程名稱</strong></h2>
                        <h3>學習過程中若您提到任何問題或是任何想法<br />
                            都歡迎提出,我們會儘快解決</h3>
                        <p>講師:xxx</p>
                        <p>課程時數:xxx</p>
                        <p><del>原價:1500</del><span>特價:1000</span></p>
                        <button>付款上課去</button>
                    </div>

                    <div class="card">
                        <img src="public/gwd.jpg" alt="" />
                        <h2><strong>課程名稱</strong></h2>
                        <h3>學習過程中若您提到任何問題或是任何想法<br />
                            都歡迎提出,我們會儘快解決</h3>
                        <p>講師:xxx</p>
                        <p>課程時數:xxx</p>
                        <p class="price"><del>原價:1500</del><span>特價:1000</span></p>
                        <button>付款上課去</button>
                    </div>

                </div>

            </main>

            <footer>
                <p>23號 馬鐿晅</p>
            </footer>

        </>
    )
}




export default App
