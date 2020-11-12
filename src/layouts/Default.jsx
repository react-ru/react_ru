import React from 'react'
import { TopBar } from '../components/TopBar'
import { HeroUnit } from '../components/HeroUnit'
import { Footer } from '../components/Footer'

export const Default = ({ children }) => (
  <>
    <TopBar />
    <HeroUnit />
    {children}
    <Footer />
  </>
)
