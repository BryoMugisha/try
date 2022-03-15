import React, { Component } from 'react';
import Slider from './components/NetflixSlider'
import './Moviez.css'


const movies = [
  {
    id: 1,
    image: '/images/doc.jpg',
    imageBg: '/images/nelson.jpg',
    title: 'Mixed By Nel'
  },
  {
    id: 2,
    image: '/images/ff.jpg',
    imageBg: '/images/nelbg.png',
    title: 'The Making'
  },
  {
    id: 3,
    image: '/images/sch.jpg',
    imageBg: '/images/afrie.jpg',
    title: 'This African Girl',
  },
  {
    id: 4,
    image: '/images/kam.jpg',
    imageBg: '/images/p.jpg',
    title: 'Peace in the Storm'
  },
  {
    id: 5,
    image: '/images/dau.jpg',
    imageBg: '/images/rem.jpg',
    title: 'The Easter Story'
  },
  {
    id: 6,
    image: '/images/pheebz.jpg',
    imageBg: '/images/herd.jpg',
    title: 'The Herd'
  },
  {
    id: 7,
    image: '/images/alpha.jpg',
    imageBg: '/images/cg.jpg',
    title: 'Connect Stories'
  },
  {
    id: 8,
    image: '/images/kabz.jpg',
    imageBg: '/images/kabz.jpg',
    title: 'Grace to Grace'
  },
  {
    id: 9,
    image: '/images/kam.jpg',
    imageBg: '/images/sold.jpg',
    title: 'The Life of an Artist'
  },
  
];

function Moviez () {
  
    return (
      <div className="app">
        <Slider>
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }


export default Moviez;
