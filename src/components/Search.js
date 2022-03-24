import React, { useEffect, useState } from 'react'
import Header from './Header'
import {  Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Columns from 'react-columns'
import {Form} from 'react-bootstrap'



export default function Search() {
   const[results, setResults]=useState([])
  const[searchCountries, setSearchCountries]=useState('')
  
  
  useEffect(()=>{
    fetch('https://disease.sh/v3/covid-19/countries').then((res)=>res.json())
    .then((data)=>{
      setResults(data)
    })

  })
 
  const filterCountries =results.filter(item=>{
    return  searchCountries !== '' ? item.country.toLowerCase().includes(searchCountries.toLowerCase()) : item;
  })



  const countries = filterCountries.map((data,i)=>{

    return(
      <Card  key={i}  bg='dark' text='white' className='text-center' style={{margin:"10px"}}>
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
        <Card.Title>{data.country}</Card.Title>
        <Card.Text>Cases {data.cases}</Card.Text>
        <Card.Text>Deaths {data.deaths}</Card.Text>
        <Card.Text>Recovered {data.recovered}</Card.Text>
        <Card.Text>Today's cases {data.todayCases}</Card.Text>
        <Card.Text>Today's deaths {data.todayDeaths}</Card.Text>
        <Card.Text>Active {data.active}</Card.Text>
        <Card.Text>Critical {data.critical}</Card.Text>
        </Card.Body>
      </Card>

    )})

    var queries = [
      {
        columns: 2,
        query: "min-width: 500px",
      },
      {
        columns: 3,
        query: "min-width: 1000px",
      },
    ];
  return (
    <div>  
<Header ></Header>  
<br></br>

<Form>
        <Form.Group controlId="formGroupSearch">
          <Form.Control
            bg="dark"
            type="text"
            placeholder="Search for countries"
            onChange={(e) => setSearchCountries(e.target.value)}
          />
        </Form.Group>
  </Form>
<Columns queries={queries}>
{countries}
</Columns>
    </div>
  )
}

