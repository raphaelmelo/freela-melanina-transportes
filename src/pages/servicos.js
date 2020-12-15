import React from 'react'
import SEO from '../components/seo'

import HomeSection from '../components/HomeAllPages'
import MainHome from '../components/MainHome'
import ActionButton from '../components/ActionButton'
import Footer from '../components/Footer'

 
  

const IndexPage = () => {
 
  return(
    <>
    <SEO title="Serviços"/>
    <ActionButton />
    <HomeSection />
     <Footer />
     </>
  )
}

export default IndexPage
