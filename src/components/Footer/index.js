import React from 'react'
import Styled from 'styled-components' 

import Logo from './logo'
import Nav from './nav'
import Text from './Text'

const Wrapper = Styled.header`
  width:80%;
  height:auto;
  min-height:100vh;
  padding:0 10%; 
  margin:0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  background:#EBF2F5;

 
  
 @media (max-width: 600px) {
  padding:100px 10%; 

    }

`



const Header = () => {
  return (
    
     <Wrapper> 
       <Logo />
       <Nav />
       <Text />
     </Wrapper>
  )
}
 
export default Header
