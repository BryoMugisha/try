
import React from 'react'
import "./App.css";
import movie from './ch.jpg';
import movie2 from './ff.jpg';
import movie3 from './alpha.jpg';
import movie4 from './kam.jpg';
import movie5 from './sch.jpg';
import movie6 from './doc.jpg';

function Picture() {
    return (
        <div className="pics">
          <div className="pic_posters">
          
            <img src={movie} alt="pic" height="180" width="320" /> 
            <img src={movie2} alt="pic" height="180" width="320" />
            <img src={movie3} alt="pic" height="180" width="320"/>
            <img src={movie4} alt="pic" height="180" width="320"/>
            <img src={movie5} alt="pic" height="180" width="320"/>
            <img src={movie6} alt="pic" height="180" width="320"/>
            <img src={movie} alt="pic" height="180" width="320"/>
            
          </div>
            

        </div>
    )
}

export default Picture
