import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, GraduationCap, Globe, Clock } from 'lucide-react'

const Stats = () => {
  const stats = [
    { label: 'Visa Success Rate', value: 98, suffix: '%', icon: CheckCircle },
    { label: 'Students Placed', value: 15000, suffix: '+', icon: GraduationCap },
    { label: 'Countries Covered', value: 50, suffix: '+', icon: Globe },
    { label: 'Years of Experience', value: 7, suffix: '+', icon: Clock },
  ]

  return (
    <section className="py-12 relative z-10 overflow-hidden border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500">
                  <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-2 tracking-tight">
                  {stat.value}{stat.suffix}
                </h3>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
