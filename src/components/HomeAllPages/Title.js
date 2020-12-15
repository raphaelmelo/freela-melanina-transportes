import React from 'react'
import Typography from '@material-ui/core/Typography';
import Styled from 'styled-components'

const Wrapper = Styled.article `

  height:40vh;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;


  h1 {
    padding:0;
    margin:0;
    display: flex;
    align-items: center;

    font-style: normal;
    font-weight: bold;
    font-size: clamp(1.5rem, 4vw, 4rem); 
    line-height: clamp(1.5rem, 10vw, 6rem); 
   
    text-transform: uppercase;
    text-shadow: 4px 5px 5px rgba(255, 0, 0, 0.25);
    color: #4A2417;

  }

` 
  

const Index = () => {
  return (
     <Wrapper>
          <Typography variant="h1" component="h1" gutterBottom>
            Transporte e Logística com efetividade
        </Typography> 
     </Wrapper>
  )
}
 
export default Index
