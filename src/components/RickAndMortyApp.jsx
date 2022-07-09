import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfoCards from './InfoCards';

const RickAndMortyApp = () => {

 const [location, setLocation] = useState({});
 const [searchValue, setSearchValue] = useState("");


    useEffect(() =>{


        axios.get(`https://rickandmortyapi.com/api/location/1`).then(res =>{
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


<div className='info-world'>
<div className='info-world-cart'><b className='title-world'>Dimension:</b> {location.dimension}</div>
<div className='info-world-cart'><b className='title-world'>Type: </b>{location.type}</div>

<div className='info-world-cart'><b className='title-world'>Population: </b>{location.residents?.length}</div>

</div>


            
        </div>
        <ul className='cards'>
{location.residents?.map((url)=> (

   <InfoCards url={url} key={url}/>

)

)}
      </ul>
      <div>
    <div className="squares1"></div>
    <div className="squares2"></div>
    <div className="squares3"></div>
    <div className="squares4"></div>
  </div>
        </>
    );
};

export default RickAndMortyApp;
