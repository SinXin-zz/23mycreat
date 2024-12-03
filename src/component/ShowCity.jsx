import { useEffect } from "react";

function ShowCity(){
   return(
    <>
    {
        (async () => {
            // const data = await axios.get('./F-C0032-001.json');
            const data = await axios.get('https://github.com/SinXin-zz/23myreact/blob/main/F-C0032-001.json');
            const { location } = data.data.cwaopendata.dataset;
            console.log(location);

            //locationName =>縣市名
            //elementName =>Wx =>天氣概況
            //elementName =>PoP =>降雨律

            location.map((city)=>{
                return <div key={city.locationName}>{city.locationName}</div>
            })
        })()
    }
    </>
   )
}
export default ShowCity