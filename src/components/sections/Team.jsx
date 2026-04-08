import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'

const team = [
  { name: 'Hardik', role: 'Founder & CEO', image: 'https://i.pravatar.cc/150?u=hardik', social: { facebook: '#', twitter: '#', instagram: '#', linkedin: '#' } },
  { name: 'Jane Smith', role: 'Senior Consultant', image: 'https://i.pravatar.cc/150?u=jane', social: { facebook: '#', twitter: '#', instagram: '#', linkedin: '#' } },
  { name: 'Alice Johnson', role: 'Visa Specialist', image: 'https://i.pravatar.cc/150?u=alice', social: { facebook: '#', twitter: '#', instagram: '#', linkedin: '#' } },
  { name: 'Bob Brown', role: 'Career Guidance Expert', image: 'https://i.pravatar.cc/150?u=bob', social: { facebook: '#', twitter: '#', instagram: '#', linkedin: '#' } },
]

const Team = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-primary uppercase tracking-[0.2em]"
          >
            Meet Our Experts
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            Our Dedicated <span className="text-gradient">Professional Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg"
          >
            We are here to help you every step of the way, with expertise and dedication.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl glass-card group flex flex-col items-center text-center border border-white/5 hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-24 h-24 rounded-full border-2 border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                <img src={member.image} alt={member.name} className="w-full h-full rounded-full border-2 border-primary/20" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-6">
                {member.role}
              </p>
              <div className="flex gap-4">
                <a href={member.social.facebook} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={member.social.twitter} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href={member.social.instagram} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={member.social.linkedin} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
