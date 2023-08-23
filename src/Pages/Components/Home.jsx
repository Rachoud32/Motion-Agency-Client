import React from 'react'
import Slider from '../home-blocks/Slider'
import About from '../home-blocks/About'
import Works from '../home-blocks/Works'
import Services from '../home-blocks/Services'
import Clients from '../home-blocks/Clients'


const Home = () => {
  return (
    <div>
        <Slider/>
        <About/>
        <Services/>
        <Works/>
        <Clients/>
    </div>
  )
}

export default Home