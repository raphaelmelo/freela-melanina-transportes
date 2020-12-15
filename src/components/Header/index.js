import React from 'react'

import Styled from 'styled-components'
import Logo from  '../Header/logo';


import Menu from "./menu"
 
const WrapperHeader = Styled.header`
  width:100%;
  height:16vh;
  margin:0;
  display:flex;
  align-items:center;
  justify-content:space-between;


  
`



const Header = () => {
  return (
    
     <WrapperHeader>
       <Logo />
       <Menu />
     </WrapperHeader>
  )
}
 
export default Header
