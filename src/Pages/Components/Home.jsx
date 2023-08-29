import React from 'react'
import Slider from '../home-blocks/Slider'
import About from '../home-blocks/About'
import Works from '../home-blocks/Works'
import Services from '../home-blocks/Services'
import Clients from '../home-blocks/Clients'
import Benefits from '../home-blocks/Benefits'
import Mission from '../home-blocks/Mission'


const Home = () => {
  return (
    <div>
        <Slider/>
        <About/>
        <Mission/>
        <Services/>
        <Benefits/>
        <Works/>
        <Clients/>
    </div>
  )
}

export default Home