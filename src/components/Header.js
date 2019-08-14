import React, {useEffect, useState} from "react";

import axios from "axios";

import Body from "./Body";
 


export default function  Header() {
    const [images, setImages] = useState([]);


// use Effect

useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod`, {
          params: {}
      }
       
      .then(response => {
        const test = response.data;
        console.log("Nasaaa", test);
        setImages(test);
      });
  }, []);
  return (
    <div className="film">
      {images.map(film => {
        return (
          <Body
          />
        );
      })}
    </div>
  );
}
