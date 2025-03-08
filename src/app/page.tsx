import React from 'react';
import WelcomingPage from './WelcomingPage/welcomeimg';
import Button from './ButtonSection/button'
import WelcomingSection from './WelcomingPage/welcomesection'
import HeroSection from './HeroSection/hero'

export default function Page(){
  return(
    <div>
      <WelcomingPage />
      <Button />
      <WelcomingSection />
      <HeroSection />
    </div>
  )
}