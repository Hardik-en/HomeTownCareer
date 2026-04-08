import React from 'react'
import { motion } from 'framer-motion'
import { Search, UserCheck, FileStack, Send, Trophy } from 'lucide-react'

const steps = [
  { title: 'Choose Visa Type', description: 'Select the visa category that suits your goals.', icon: Search },
  { title: 'Consultation', description: 'Expert advice to plan your application strategy.', icon: UserCheck },
  { title: 'Documentation', description: 'Gathering and organizing all necessary documents.', icon: FileStack },
  { title: 'Submission', description: 'Accurate and timely submission of your application.', icon: Send },
  { title: 'Visa Approval', description: 'Your global journey begins with your visa approval.', icon: Trophy },
]

const Process = () => {
  return (
    <section id="process" className="py-12 relative overflow-hidden bg-slate-50">
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-primary uppercase tracking-[0.2em]"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900"
          >
            Your <span className="text-gradient">Step-by-Step</span> Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg"
          >
            We simplify the complex visa process into five easy steps.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="mb-8 p-6 rounded-full bg-white border border-slate-200 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 relative z-10 shadow-sm group-hover:shadow-xl group-hover:shadow-primary/10">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
