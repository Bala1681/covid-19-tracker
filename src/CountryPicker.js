import React, { useEffect, useState } from 'react'
import { FormControl, Select, MenuItem } from '@material-ui/core'



export default function CountryPicker() {
    const[countries, setCountries]=useState([])
    const[country,setCountry]=useState('worldwide')


    useEffect(()=>{
        const getData= async()=>{
            await fetch('https://disease.sh/v3/covid-19/countries').then((res)=>res.json())
        .then((data)=>{
           const countries= data.map(item=>({
                name: item.country,
                value: item.countryInfo.iso2,

              })) 
              setCountries(countries)

            }
            )}
            getData();

    },[])

    const onCountryChange=(e)=>{
        setCountry(e.target.value)

    }

  return (
    <div>
        <FormControl className='app__dropdowmn'>
            <Select variant='outlined' value={country}  onChange={onCountryChange}>
                <MenuItem value='worldwide'>WorldWide</MenuItem>
                {countries.map(country=><MenuItem value={country.value}>{country.name}</MenuItem>)}
            </Select>



        </FormControl>







    </div>
  )
}
