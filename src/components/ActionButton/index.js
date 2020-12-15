import React from 'react';
import Fab from '@material-ui/core/Fab';

import styled from 'styled-components'

import Whatsapp from '../../images/social/whatsapp-melanina.svg'

const WrapperButton = styled.div`
    position:fixed;
    bottom:20px;
    right:7vw;
 

`
const Button = styled(Fab)`
     
    img {
        width:40px;
        padding-right:10px;
    }
    span {
        color:#4A2417;
        font-weight:500;
        font-size:16px;
    }
`


const ActionButton = () => {
  return (
    <WrapperButton >
      <Button variant="extended">
        <img src={Whatsapp} alt="Entre em contato conosco pelo whatsapp" />
        <span>(13) 99178-9912</span> 
        </Button>
    </WrapperButton>
  )
}
 
export default ActionButton
 