import React, { useEffect, useState } from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CardGroup, Card } from 'react-bootstrap'




export default function Home() {
  const[latest,setLatest]=useState([])
 

  useEffect(()=>{
    fetch('https://disease.sh/v3/covid-19/all').then((res)=>res.json())
    .then((data)=>{
      setLatest(data)

    })
  },[])

  const date=new Date(parseInt(latest.updated))
  const lastUpdated = date.toString()





  return (
    <div>
<Header></Header>
    <CardGroup >
  <Card bg="secondary" text='white' className='text-center' style={{margin:"10px"}}>
   
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>{latest.cases}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
  <Card bg="info" text='white' className='text-center' style={{margin:"10px"}}>
   
    <Card.Body>
      <Card.Title>Active</Card.Title>
      <Card.Text>{latest.active}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
  
  <Card bg="danger" text='white' className='text-center' style={{margin:"10px"}}>
   
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>{latest.deaths}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
  <Card bg="success" text='white' className='text-center' style={{margin:"10px"}}>
   
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>{latest.recovered}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card> 
</CardGroup>








    </div>
  )
}
