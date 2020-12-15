import React from 'react'
import Styled from 'styled-components' 

import LogoFooter from '../../images/logoFooter.svg'

const Wrapper = Styled.article`
  width:100%;
  margin:0;
  padding: 40px 0 0 0;
  display:flex;
  align-items:center;
  justify-content:center;

  background:#fff;

  img {
    width:80px;
  }

  
`



const Index = () => {
  return (    
     <Wrapper> 
       <img src={LogoFooter} alt="Melanina Transportes e Logistica" />
     </Wrapper>
  )
}
 
export default Index
