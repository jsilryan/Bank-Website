import React from 'react'
import styles from './style'
import { Navbar, Hero, Testimonials, Stats, CTA, CardDeal, 
  Business, Footer, Clients, Billing } from './components'

export default function App () {
  return (
    <div className='bg-primary w-full overlow-hidden'>
      <div className = {`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`} >
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} >
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <CardDeal /> 
          <Testimonials /> 
          <Clients /> 
          <CTA /> 
          <Footer />
        </div>
      </div>
    </div>
  )
}