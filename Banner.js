import React, { useState } from 'react';

import "./Banner.css";


function Banner() { 



    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            }}
        >
                <div className="banner_contents"
              > 
                    <h1 className="banner_title"></h1>

                    <div className="banner_buttons"
                      style={{
                        border: "2px solid #fcee21",
                        borderRadius: "30px",
                        
                    }}>
                    <button className="banner_button">Play</button>
                    <button className="banner_button">+ My List</button>
                    <h1 className="banner_description">The Pilot</h1>
                    </div>

                    
                    

                </div>

            <div className="banner--fadeBottom"></div>  
            
        </header>
    )
}

export default Banner
