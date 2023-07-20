import React from 'react'
import './Homepage.css'
import Header from '../../components/header/Header'
import HomepageContent from '../../components/homepageContent/HomepageContent'
import Footer from '../../components/footer/Footer'

const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <HomepageContent></HomepageContent>
            <Footer></Footer>
        </div>
    )
}

export default Homepage