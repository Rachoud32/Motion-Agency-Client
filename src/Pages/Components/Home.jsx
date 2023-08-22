import React from 'react'
import Slider from '../Home-blocks/Slider'
import About from '../Home-blocks/About'
import Works from '../Home-blocks/Works'
import Services from '../Home-blocks/Services'
import Clients from '../Home-blocks/Clients'

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