import axios from 'axios';
import React, { useEffect, useState } from 'react';

const InfoCards = ({ url }) => {


    const [population, setPopulation] = useState({});

    useEffect(() => {
        axios.get(url).then((res) => {
            setPopulation(res.data)
        })
        
    }, [url])
    console.log(population);





    return (


        <li>

            <div className='card'>

                <h2>{population.name}</h2>

                <div className='after-status'>
                    <img src={population.image} alt="" />
                     
                    <span> 
                    
                        {
                          population.status === "Alive" ? (
                          <div className='status'> 
                          <span>{population.status}</span>
                          </div> 
                          ) : (


                         population.status === "Dead" ? (
                          <div className='status dead'> 
                          <span>{population.status}</span>
                          </div>
                         ) : (
                            
                                <div className='status unknow'> 
                                <span>{population.status}</span>
                                </div>
                         )
                         
                          
                        )}
                        
                        </span>
                   
                </div>

                <div className='info-residents'><b>SPECIES:</b><br /> <span> {population.species}</span> </div>

                <div className='info-residents'>
                <b>ORIGIN:</b><br /> <span>{population.origin?.name}</span></div>
                <div className='info-residents'><b>APPEARANCE IN EPISODES:</b><br /> <span>{population.episode?.length}</span></div>

            </div>
        </li>
    );
};

export default InfoCards;