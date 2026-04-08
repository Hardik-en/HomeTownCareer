import React, { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Destinations from '../components/sections/Destinations'
import Process from '../components/sections/Process'
import Coaching from '../components/sections/Coaching'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Testimonials from '../components/sections/Testimonials'
import Partners from '../components/sections/Partners'
import CodeOfConduct from '../components/sections/CodeOfConduct'
import LeadGen from '../components/sections/LeadGen'
import Contact from '../components/sections/Contact'
import FAQ from '../components/sections/FAQ'
import Blog from '../components/sections/Blog'

const Home = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Stats />
        
        <div id="services">
          <Services />
        </div>
        
        <div id="about">
          <About />
        </div>

        <div id="destinations">
          <Destinations />
        </div>

        <div id="process">
          <Process />
        </div>

        <Coaching />

        <WhyChooseUs />
        
        <Partners />

        <CodeOfConduct />

        <Testimonials />
        
        <Blog />
        
        <FAQ />

        <div id="contact">
          <LeadGen />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Home
