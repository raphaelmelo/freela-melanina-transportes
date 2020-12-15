import React from 'react'
import LogoIMG from  '../../images/logo.webp';
import Styled from 'styled-components'


   
const LogoStyled = Styled.article`
 
 img {
  height: clamp(40px, 10vw, 60px);
  width: clamp(60px, 13vw, 97px);
 }

`
const Logo = () => {
  return (
    <LogoStyled>
        <img src={LogoIMG} alt="Logo Melanina" /> 
     </LogoStyled>

  )
}
 
export default Logo
