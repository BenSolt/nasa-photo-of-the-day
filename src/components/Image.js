import React from "react";

import styled from "styled-components";

//  change size of Nasa Image
const Imagea = styled.img`
  width: 100%;
  height: auto;
  `;




const Image = props => {
    console.log(props);
    return (
      
      <div>
         
        <Imagea className="Nasa-image" alt="Nasa Daily Image" src={props.test.hdurl} />     
        
       </div>

       


      
    );
  };

 export default Image





