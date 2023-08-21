import React from 'react'
import Slider from '../Home-blocks/Slider'
import About from '../Home-blocks/About'
import Portfolio from '../Home-blocks/Portfolio'
import Advantages from '../Home-blocks/Advantages'
import Clients from '../Home-blocks/Clients'

const Home = () => {
  return (
    <div>
        <Slider/>
        <About/>
        <Portfolio/>
        <Advantages/>
        <Clients/>
    </div>
  )
}

export default Home