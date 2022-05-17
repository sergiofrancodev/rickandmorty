import React, { useState } from 'react';
import axios from 'axios';

const Header = () => {

    

    
    return (
        <div className='header-banner'>
            <img src="https://rickandmorty.sergiofrancodev.com/bannerRickAndMorty.svg" alt="" />
            <br />
            <br />
            <h1>Rick And Morty Wiki</h1>
           
        </div>
    );
};

export default Header;