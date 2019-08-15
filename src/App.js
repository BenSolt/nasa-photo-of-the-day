import React from "react";
import "./App.scss";

import Body from "./components/Body";



import styled from "styled-components";

const Background = styled.div`
background: blue;
`



const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;









function App() {
  return (
    <div className="App">
      
      <Background>

      
      <Body/> 

      
    <Button>Normal</Button>
    <Button primary>Primary</Button>
 
    

   



      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
      </p>
      </Background>
    </div>
  );
}

export default App;
