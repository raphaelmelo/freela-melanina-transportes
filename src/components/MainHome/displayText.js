import React from 'react'
import '../../styles/global.css'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Styled from 'styled-components'

const Wrapper = Styled.article`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  min-height:400px;

  
   @media (max-width: 600px) {
     padding: 15vh 0;
}

  h2 {
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: clamp(1rem, 6vw, 2rem); 

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #47261A;
  }

  p {
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 22px;

    text-align: justify;
    color: #7E7474;

  }
`


 

const Index = (props) => {
  return (
    <Container maxWidth="md">
      <Wrapper >
            <Typography variant="h4" component="h2" gutterBottom>
                {props.title}
               </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                {props.text}
              </Typography>

          </ Wrapper>
     </Container>
  )
}
 
export default Index;
