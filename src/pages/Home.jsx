import React from 'react'
import Feature from '../componants/Feature'
import Footer from '../componants/Footer'
import Fproperties from '../componants/Fproperties'
import Header from '../componants/Header'
import MailList from '../componants/MailList'
import NavBar from '../componants/NavBar'
import PropertyList from '../componants/PropertyList'
const Home = () => {
  return (
    <div>
      <NavBar/>
      <Header />
      <div className="homeContainer">
         <Feature />
          <h1 className="homeTitle">
             Browse by home title
          </h1>
           <PropertyList />
           <h1 className="homeTitle">
             Home guest love
          </h1>
           <Fproperties />
           <MailList />
           <Footer />
      </div>
    </div>
  )
}

export default Home
