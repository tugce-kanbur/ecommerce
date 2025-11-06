import React from 'react'
import AboutHeader from '../components/AboutHeader'
import AboutContent from '../components/AboutContent'
import Stats from '../components/Stats'
import AboutVideo from '../components/AboutVideo'
import AboutTeam from '../components/AboutTeam'
import AboutMainContant from '../components/AboutMainContant'
import Clients from '../components/Clients'
import AboutTestimonials from '../components/AboutTestimonials'

function AboutPage() {
    return (
        <div>
            <AboutHeader />
            <AboutContent />
            <Stats />
            <AboutVideo />
            <AboutTeam />
            <AboutMainContant />
            <Clients />
            <AboutTestimonials />
        </div>
    )
}

export default AboutPage
