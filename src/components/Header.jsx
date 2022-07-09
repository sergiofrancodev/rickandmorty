import React, { useEffect, useRef }  from 'react';
import Typed from 'typed.js';

const Header = () => {
    

    const el = useRef(null);
    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings:["Rick And Morty Wiki"],
            typeSpeed:50,
            showCursor: false,
        })
            
        

        },[el])
    

    
    return (
        <div className='header-banner'>
            <img src="https://rickandmorty.sergiofrancodev.com/banner-top1.svg" alt="" />
            <br />
            <br />
            <span ref={el} className="h1"></span>
           
        </div>
    );
};

export default Header;