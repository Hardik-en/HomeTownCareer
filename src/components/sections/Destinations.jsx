import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, Globe, Plane } from 'lucide-react'
import { countries } from '../../data/countries'

const Destinations = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-white">
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-primary uppercase tracking-[0.2em]"
            >
              Where Do You Want To Go?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-900"
            >
              Popular <span className="text-gradient">Destinations</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg"
            >
              We cover over 50+ countries. Explore some of the most sought-after destinations for students and professionals.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="btn-outline flex items-center gap-2"
          >
            View All Countries
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <Link 
              key={index}
              to={`/destinations/${country.id}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={country.image} 
                    alt={country.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{country.flag}</span>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">
                      {country.name}
                    </h3>
                  </div>
                  
                  <p className="text-white/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-medium">
                    {country.description}
                  </p>

                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {country.benefits.slice(0, 3).map((benefit, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-white px-2 py-1 rounded-md bg-white/20 backdrop-blur-sm border border-white/30">
                        {benefit.split(' ').slice(0, 2).join(' ')}...
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between group-hover:border-primary/50 transition-colors">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Explore Details</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-colors text-white">
                      <Plane className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations
