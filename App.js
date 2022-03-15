import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Buttons from "./Buttons";
import Picture from "./Picture";
import Picture_row from "./Picture_row";
import Nav from "./Nav"
import Moviez from "./Moviez";


function App() {
  return (
    <div className="app">
    <Nav />

    <Banner />
    
    <Buttons />
    
    <Row title="Trending Now" fetchUrl={""} />
    <Moviez />
    
    <Row title="Trending Now" fetchUrl={""} />
    <Picture />]
    <Row title="Top Rated" fetchUrl={""} />
    
    <Row title="Documentaries" fetchUrl={""} />
    

  
  </div>


  );
}

export default App;
