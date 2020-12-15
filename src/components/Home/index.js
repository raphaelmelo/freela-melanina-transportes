import React from 'react'
import back from '../../images/melanina-background.png'

import '../../styles/global.css'
import Header from '../Header'
import TitleAndDescription from '../Home/Title'
 

import Styled from 'styled-components'

import Container from '@material-ui/core/Container';


const Wrapper = Styled.section`
  margin:0;
  padding:0;
  background:#EBF2F5;
  background-image:url(${back});
  width:100%;
  height:100vh;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

`


const Index = () => {
  return (
     <Wrapper> 
      <Container maxWidth="lg">
        <Header />
        <TitleAndDescription />
      </Container>
     </Wrapper>
  )
}
 
export default Index
