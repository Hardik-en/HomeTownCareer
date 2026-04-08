import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Users, Globe } from 'lucide-react'

const reasons = [
  { title: 'Personalized Guidance', content: 'Tailored solutions to meet your specific needs and goals.', icon: ShieldCheck },
  { title: 'High Success Rate', content: 'Our track record of successful visa approvals is unmatched.', icon: Zap },
  { title: 'Expert Consultants', content: 'Highly experienced consultants dedicated to your success.', icon: Users },
  { title: 'End-to-End Support', content: 'From application to settlement, we are with you every step of the way.', icon: Globe },
]

const WhyChooseUs = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-white">
      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Content - USP Story */}
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-primary uppercase tracking-[0.2em]"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight"
            >
              Excellence in <br />
              <span className="text-gradient">Every Step</span> of Your Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg leading-relaxed max-w-xl"
            >
              Hometown Careers is more than just a consultancy. We are your trusted partner in achieving your global dreams, providing the expertise and support you need to succeed.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl glass-card group flex flex-col items-center text-center border border-slate-100 hover:border-primary/30 transition-all duration-500 bg-white"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-primary/20 group-hover:border-primary/50">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {reason.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Content - Visual Representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Main Visual Image/Element */}
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border border-slate-200 group bg-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" 
              alt="Team of experts collaborating" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 group-hover:scale-110 transition-transform duration-700" />
            
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
                  <p className="text-xs text-slate-400">Success Rate</p>
                  <p className="text-sm font-bold text-slate-900">98% Approvals</p>
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
                  <p className="text-xs text-slate-400">Global Network</p>
                  <p className="text-sm font-bold text-slate-900">500+ Institutions</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Rings */}
          <div className="absolute -top-10 -right-10 w-64 h-64 border border-primary/10 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-slate-100 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
