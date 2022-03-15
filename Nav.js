import React, {useState, useEffect } from 'react';
import "./Nav.css"; 
import LogoName from './tcc.svg';
import Alarm from './alarm.svg';



function Nav() {
    
    return (
        
            <div className="nav_black">
                <img
                className="nav_logo"
                src={LogoName}
                alt="Logo"
                />
           

                <img
                className="nav_alarm"
                src={Alarm}
                alt="Icon"
                />
            </div>
        
    )
}

export default Nav
