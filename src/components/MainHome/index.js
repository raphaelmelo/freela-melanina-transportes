import React from 'react'
import '../../styles/global.css'
 
import Styled from 'styled-components'

import DisplayText from './displayText'
import Accordion from './Accordion'
import Clients from './Clients'


const Wrapper = Styled.main`
  margin:0;
  padding:0;
  background:#EBF2F5;
  width:100%;
  
`


const Index = () => {
  return (
     <Wrapper> 
       <DisplayText 
        title="Transporte de cargas com segurança e eficácia"
        text="Atuamos na logística de cargas no Porto de Santos
        prestando serviços à despachantes aduaneiros, tradings, 
        indústrias importadoras e exportadoras."
        />


        <Accordion />

        <DisplayText 
        title="Nosso background e credibilidade"
        text="Nossos clientes confiam em nosso know how, não apenas
        para gerenciar seus envios com habilidade, mas também para 
        superar seus principais desafios logísticos no maior complexo
        portuário da América Latina, o Porto de Santos."
        />

        <Clients />
     </Wrapper>
  )
}
 
export default Index
