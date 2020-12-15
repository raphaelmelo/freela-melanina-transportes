import React from 'react'
import Styled from 'styled-components' 
import Typography from '@material-ui/core/Typography';

 
const Wrapper = Styled.article`
  width:100%;
  margin:0;
  padding: 40px 0;
  display:flex;
  align-items:center;
  justify-content:center;

  background:#fff;
 
 h2 {
   
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: clamp(1rem, 1.4vw, 2rem); 

text-transform: uppercase;
color: rgba(74, 36, 23, 0.76);
text-shadow: 0px 4px 4px rgba(108, 12, 12, 0.25);

 }

 
 @media (max-width: 600px) {
     display:none;

    }

  
`



const Index = () => {
  return (    
     <Wrapper> 
         <Typography variant="h4" component="h2" gutterBottom>
            Sua melhor escolha de logística e transporte no porto de santos
         </Typography>
     </Wrapper>
  )
}
 
export default Index
