import React from 'react'

import Styled from 'styled-components'
import LinkedinIcon from '../../images/social/linkedin.svg'
import FacebookIcon from '../../images/social/facebook.svg'

const Wrapper = Styled.article`
  width:100%;
  height:auto;
  margin:0;
  padding: 5% 0;
  display:flex;
  justify-content:space-around;
  background:#fff;;
  
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    text-transform:uppercase;
    line-height: 28px;

    color: #4A2417;
  }
  li, p {
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: clamp(1.5rem, 0.9vw, 2rem); 
    color: rgba(0, 0, 0, 0.56);

  }

  @media (max-width: 600px) {
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:50px;

  }
  

`
const NavFooter = Styled.nav`
`

const ListServices = Styled.article`
`
const Infos = Styled.article`
  display:flex;
  flex-direction:column;
  gap:10px;

  @media (max-width: 600px) {
    text-align:center;
    gap:50px;
    }
  
`

const SocialMedia = Styled.article`
  display:flex; 
  gap: 15px;
  div {
    display:flex;
    align-items:center;
    justify-content:center;
  }
  img {
    width:20px;
    height:20px;
   }
   @media (max-width: 600px) {
    
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:5px;
    }
`


const Address = Styled.article`
  @media (max-width: 600px) {
    width:250px;
    }
`
const Contact = Styled.article`

`
const Footer = () => {
  return (
    <Wrapper>
      <NavFooter>
        <span>Páginas</span>
        <ul>
          <li>Home</li>
          <li>Produtos</li>
          <li>Sobre nós</li>
          <li>Contato</li>
        </ul>
      </NavFooter>
      <ListServices>
        <span>Transportamos</span>
        <ul>
          <li>Celulose</li>
          <li>Açúcar</li>
          <li>Container</li>
          <li>Super simples pó</li>
          <li>Farinha de trigo</li>
          <li>Minério</li>
        </ul>
      </ListServices>
      <Infos>
        <SocialMedia>
          <div>
            <img src={LinkedinIcon} alt="Nos siga no Linkedin" />
            <p> /Melanina</p>
          </div>
          <div>
            <img src={FacebookIcon} alt="Nos siga no Facebook" />
            <p>/Melanina</p>
          </div>
        </SocialMedia>
        <Address>
          <span>Endereço:</span>
          <p>
            Avenida Ana Costa, 100, Conj 87 <br />
              Vila Mathias, Santos,  SP - Brasil.
            </p>
        </Address>
        <Contact>
          <span>Contato:</span>
          <p>
            (13) 3278-5900 <br />
              (13) 99852-5900
            </p>
        </Contact>
      </Infos>

    </Wrapper>
  )
}

export default Footer
