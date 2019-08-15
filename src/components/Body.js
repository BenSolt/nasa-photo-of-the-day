import React, {useEffect, useState} from "react";

import axios from "axios";

import Image from "./Image";

 
import { Card } from "semantic-ui-react";

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

    {/* <h1>{spaceImage.title}</h1> */}
    {/* <div> {spaceImage.date}</div> */}
    {/* <p> {spaceImage.explanation}</p>  */}
    <div> {spaceImage.media_type}</div> 
    <div> {spaceImage.service_version}</div> 

    {/* <img className="Moon-image" alt="Moon and saturn" src={spaceImage.hdurl} />   */}
    <Image 
    test = {spaceImage}/> 
    
    
  
  <Card>
    {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}
    <Card.Content>
    <h1>{spaceImage.title}</h1>

    <div> {spaceImage.date}</div>
      {/* <Card.Header>Matthew</Card.Header> */}
     
      
      <p> {spaceImage.explanation}</p> 
      
    </Card.Content>
    <Card.Content extra>
      <a>
        {/* <Icon name='user' /> */}
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

    
    


    </div>
  );
}
