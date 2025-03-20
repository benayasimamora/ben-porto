import React from 'react';
import WelcomingPage from './WelcomingPage/welcomeimg';
import Button from './ButtonSection/button'
import WelcomingSection from './WelcomingPage/welcomesection'
import HeroSection from './HeroSection/hero'
import AboutMeSection from './HeroSection/aboutme'
import SkillBen from './HeroSection/tools'
import SkillSection from './HeroSection/skill'
import ContactMe from './contactMe/contact'
import PortoBen from './PortofolioSection/mainportofolio'


export default function Page(){
  return(
    <div>
      <WelcomingPage />
      <Button />
      <WelcomingSection />
      <HeroSection />
      <AboutMeSection />
      <SkillSection />
      <SkillBen />
      <PortoBen />
      <ContactMe />
    </div>
  )
}