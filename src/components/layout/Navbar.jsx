import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, Globe } from 'lucide-react'
import { cn } from '../../utils/cn'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Destinations', path: '/#destinations' },
    { name: 'Process', path: '/#process' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-slate-200/60 py-4 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg border border-slate-100 overflow-hidden p-2">
            <img 
              src="/logo.png" 
              alt="HomeTown" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div style={{ display: 'none' }} className="w-full h-full items-center justify-center bg-primary text-white font-bold text-lg">
              HT
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-display font-bold tracking-tight text-slate-900 leading-none">
              HOMETOWN
            </span>
            <span className="text-sm font-medium text-primary tracking-widest uppercase mt-1">
              CAREERS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="btn-primary flex items-center gap-2 group text-sm px-5 py-2.5">
            Book Consultation
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-lg font-medium text-slate-700 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-primary w-full justify-center flex items-center gap-2">
                Book Consultation
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
