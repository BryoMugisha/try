
import React from 'react'
import "./App.css";
import movie6 from './ch.jpg';
import movie5 from './ff.jpg';
import movie4 from './alpha.jpg';
import movie3 from './kam.jpg';
import movie2 from './sch.jpg';
import movie from './doc.jpg';

function Picture_row() {
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

export default Picture_row
