import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import CountryDetail from './pages/CountryDetail'
import ServiceDetail from './pages/ServiceDetail'
import WhatsAppButton from './components/ui/WhatsAppButton'
import AIChatbot from './components/ui/AIChatbot'

function App() {
  return (
    <div className="min-h-screen bg-background text-text-main selection:bg-primary/30">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations/:id" element={<CountryDetail />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <AIChatbot />
    </div>
  )
}

export default App
