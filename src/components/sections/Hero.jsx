import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Globe, ShieldCheck, Users } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px]" />
        
        {/* Animated Particles/Dots */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight 
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="text-xs font-medium text-primary uppercase tracking-widest">
              Empowering Global Ambitions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight text-slate-900"
          >
            Your Global <br />
            <span className="text-gradient">Career Starts</span> <br />
            Right Here.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed"
          >
            Expert visa consultancy, career guidance, and immigration services tailored for your success. We turn your global dreams into reality since 2017.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="btn-primary flex items-center gap-2 group text-lg px-8 py-4">
              Book Free Consultation
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline flex items-center gap-2 text-lg px-8 py-4">
              Explore Services
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-lg leading-none">98%</span>
                <span className="text-slate-400 text-[10px] uppercase tracking-wider font-medium">Visa Success</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-lg leading-none">15k+</span>
                <span className="text-slate-400 text-[10px] uppercase tracking-wider font-medium">Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Visual Representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Main Visual Image/Element */}
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border border-slate-200 group bg-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" 
              alt="Students planning global career" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20 group-hover:scale-110 transition-transform duration-700" />
            
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 p-4 rounded-2xl glass-card z-20 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Visa Approved</p>
                  <p className="text-sm font-bold text-slate-900">Canada Student Visa</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-10 p-4 rounded-2xl glass-card z-20 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Global Reach</p>
                  <p className="text-sm font-bold text-slate-900">50+ Countries Covered</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Rings */}
          <div className="absolute -top-10 -right-10 w-64 h-64 border border-primary/10 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-slate-200 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
