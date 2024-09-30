import React from 'react'
import Header from '../Components/Header'
import MainImage from '../Components/MainImage'
import Slider from '../Components/Slider'
import TextImage from '../Components/TextImage'
import OurPride from '../Components/OurPride'
import Details from '../Components/Details'
import LatestNews from '../Components/LatestNews'
import Footer from '../Components/Footer'

function Home_page() {
  return (
    <div>
        <Header/>
        <MainImage/>
        <Slider/>
        <TextImage/>
        <OurPride/>
        <Details />
        <LatestNews />
        <Footer />
    </div>
  )
}

export default Home_page