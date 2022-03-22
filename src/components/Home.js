import React, { useEffect, useState } from 'react'
import Header from './Header'


export default function Home() {
  const[data,setData]=useState()
  const [data1 ,setData1 ] = useState()
  const [data2 ,setData2 ] = useState()
  const [data3 ,setData3 ] = useState()
  

  useEffect(()=>{
    fetch('https://disease.sh/v3/covid-19/all').then((res)=>res.json()).then((data)=>{
      setData(data.active);
      setData1(data.todayCases);
      setData2(data.todayRecovered);
      setData3(data.todayDeaths)     
    })
  },[])

  return (
    <div>
        <Header></Header>
        <h1>COVID-19</h1>
        <br/>
        <div>Global content</div>
        
          {/* <Card> */}
          {/* <CardContent> */}
           <div className='count'>
            <div style={{color:"yellow", fontSize:"20px"}}>Active Cases:<br/><br/> {data}</div><br/>
            <div style={{color:"orange",fontSize:"20px"}}>Today Cases:<br/><br/>{data1} </div><br/>
            <div style={{color:"green",fontSize:"20px"}}>Today Recovered:<br/><br/>{data2}</div><br/>
            <div style={{color:"red",fontSize:"20px"}}>Today Deaths:  <br/><br/>{data3}</div><br/>
            </div>

          {/* </CardContent> */}

        {/* </Card> */}        
       
    </div>
  )
}
