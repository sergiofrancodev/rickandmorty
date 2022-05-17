import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfoCards from './InfoCards';

const RickAndMortyApp = () => {

 const [location, setLocation] = useState({});
 const [searchValue, setSearchValue] = useState("");


    useEffect(() =>{

        const random = Math.floor(Math.random() * 126) +1;

        axios.get(`https://rickandmortyapi.com/api/location/${random}`).then(res =>{
            setLocation(res.data);
        } )

    }, [])

    const searchType = () =>{

        axios.get(`https://rickandmortyapi.com/api/location/${searchValue}`).then(res =>{
            setLocation(res.data);
        },[])
    };
    console.log(location)

    return (
        <>
        <div className='box-search'>
        <input 
        type="text" 
        onChange={e => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder="Search here..."
        />
        <button onClick={searchType}>Search by Location</button>
    </div>
        <div className='infoComponent'>
            
            <h1 className='location-name'><b>Location Name: </b>{location.name}</h1>

            <div><span className='info-cards'><b>Type: </b>{location.type}</span></div>
            <div><span className='info-cards'><b>Dimension:</b> {location.dimension}</span></div>
            <div><span className='info-cards'><b>Population: </b>{location.residents?.length}</span></div>

            
        </div>
        <ul className='cards'>
{location.residents?.map((url)=> (

   <InfoCards url={url} key={url}/>

)

)}
      </ul>
        </>
    );
};

export default RickAndMortyApp;
