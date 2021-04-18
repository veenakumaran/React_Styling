import Emoji from 'a11y-react-emoji';
import React from 'react';
import styled from 'styled-components';
import icon from 'react-icons';


const Div = styled.div`
  margin: 40px;
  border: 5px outset purple;
  &:hover {
   background-color: lightgreen;
 }
`;

const Paragraph = styled.p`
  font-size: 15px;
  text-align: center;
`;


const OutsetBox = () => (
  <Div>
    <Paragraph>Get started with styled-components 💅</Paragraph>
    <ion-icon name="archive"></ion-icon>
     {/* <Emoji symbol="🐑" label="sheep"/> */}
    
  </Div>
);

export default OutsetBox;