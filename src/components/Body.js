import React, {useEffect, useState} from "react";

import axios from "axios";


 


export default function  Body() {
    const [spaceImage, setSpaceImage] = useState([]);


// use Effect

useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => {
        const test = response.data;
        console.log("Response", test);
        setSpaceImage(test);
      })
  }, []);


  
  return (
    <div className="container">

    <h1>{spaceImage.title}</h1>
    <div> {spaceImage.date}</div>
    <p> {spaceImage.explanation}></p> 
    <img className="Moon-image" src={spaceImage.hdurl} alt="Moon and saturn"/>
    <div> {spaceImage.media_type}</div> 
    <div> {spaceImage.service_version}</div> 
    
    
   
    


    </div>
  );
}
 {/* <div className="body" key={props.id}></div> */}