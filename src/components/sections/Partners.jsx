import React from 'react'
import { motion } from 'framer-motion'

const partners = [
  { name: 'St. Thomas University', location: 'Canada', logo: '/St.ThomasUniversity.png', initial: 'SU', color: 'bg-blue-500', link: 'https://www.stu.ca/' },
  { name: 'Wrexham Glyndŵr University', location: 'UK', logo: '/PrifysgolWrecsamWrexhamUniversity.png', initial: 'WU', color: 'bg-slate-700', link: 'https://www.glyndwr.ac.uk/' },
  { name: 'University of West London', location: 'UK', logo: '/UniversityOfWestLondon.png', initial: 'UL', color: 'bg-indigo-600', link: 'https://www.uwl.ac.uk/' },
  { name: 'Middlesex University London', location: 'UK', logo: '/MiddlesexUniversityLondon.png', initial: 'ML', color: 'bg-red-600', link: 'https://www.mdx.ac.uk/' },
  { name: 'University of Winchester', location: 'UK', logo: '/UniversityOfWinchester.png', initial: 'UW', color: 'bg-purple-700', link: 'https://www.winchester.ac.uk/' },
  { name: 'UWE Bristol', location: 'UK', logo: '/UWEBristol.png', initial: 'UB', color: 'bg-slate-800', link: 'https://www.uwe.ac.uk/' },
  { name: 'ECA - Education Centre of Australia', location: 'Australia', logo: '/ECA-EducationCentreofAustralia.png', initial: 'EA', color: 'bg-blue-700', link: 'https://www.eca.edu.au/' },
  { name: 'Conestoga College', location: 'Canada', logo: '/Conestoga.png', initial: 'CC', color: 'bg-orange-600', link: 'https://www.conestogac.on.ca/' },
]

const Partners = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-primary uppercase tracking-[0.2em]"
          >
            Our Partners
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-900"
          >
            We're proud to work with our <span className="text-gradient">preferred partners</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm md:text-base"
          >
            We have direct tie-ups with reputed universities and institutions across the globe to give you the best opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 bg-white flex flex-col items-center justify-center text-center group hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500"
            >
              <div className="relative w-24 h-24 mb-6">
                <div className={`absolute inset-0 rounded-2xl ${partner.color} flex items-center justify-center text-white text-2xl font-bold font-display shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {partner.initial}
                </div>
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="absolute inset-0 w-full h-full object-contain rounded-2xl p-2 bg-white group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 leading-tight group-hover:text-primary transition-colors">{partner.name}</h3>
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-slate-400 font-bold">{partner.location}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
