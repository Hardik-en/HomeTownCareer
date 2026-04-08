import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, CheckCircle } from 'lucide-react'

const coachingServices = [
  {
    title: 'IELTS Coaching',
    description: 'Comprehensive IELTS preparation covering all four modules — Listening, Reading, Writing, and Speaking — with mock tests and personalized feedback.',
    tags: ['Certified Trainers', 'Daily Practice Tests', 'Speaking Lab', 'Flexible Batches'],
    icon: 'IE',
    color: 'bg-blue-500/10 text-blue-600 border-blue-200'
  },
  {
    title: 'PTE Coaching',
    description: 'AI-powered PTE Academic preparation with full-length timed tests, section-wise strategy building, and score improvement tracking.',
    tags: ['AI Practice Tools', 'Score Prediction', 'Weekend Batches', 'Crash Course'],
    icon: 'PT',
    color: 'bg-amber-500/10 text-amber-600 border-amber-200'
  }
]

const Coaching = () => {
  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-primary uppercase tracking-[0.2em] px-4 py-2 bg-primary/5 rounded-full"
          >
            Test Preparation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900"
          >
            IELTS & PTE <span className="text-gradient">Coaching</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg"
          >
            Get trained by certified experts and achieve your target band score with our structured programs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coachingServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${service.color} border flex items-center justify-center font-bold text-xl shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-400 group-hover:text-primary/70 group-hover:border-primary/10 group-hover:bg-primary/5 transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Coaching
