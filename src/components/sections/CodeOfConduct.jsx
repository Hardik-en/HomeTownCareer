import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Lock, DollarSign, FileCheck, Heart, Clock, UserCheck } from 'lucide-react'

const principles = [
  {
    title: 'Honest Counselling',
    description: 'We provide truthful, unbiased guidance about courses, universities, and visa prospects — with no false promises or misleading claims.',
    icon: ShieldCheck,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    title: 'Data Privacy',
    description: 'All personal information shared by students is strictly confidential and never shared with third parties without consent.',
    icon: Lock,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    title: 'No Hidden Charges',
    description: 'All fees and charges are communicated clearly upfront. We do not levy any hidden or surprise costs at any stage.',
    icon: DollarSign,
    color: 'text-amber-500',
    bg: 'bg-amber-50'
  },
  {
    title: 'Ethical Documentation',
    description: 'We strictly prohibit falsification of any academic or personal documents and will not assist in any fraudulent application.',
    icon: FileCheck,
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    title: 'Respectful Service',
    description: 'Every student is treated with dignity and respect, regardless of academic background, gender, caste, or religion.',
    icon: Heart,
    color: 'text-rose-500',
    bg: 'bg-rose-50'
  },
  {
    title: 'Timely Communication',
    description: 'We commit to responding to all queries within 24 hours and keeping students updated at every stage of their application.',
    icon: Clock,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50'
  },
  {
    title: 'Student-First Approach',
    description: 'Our recommendations are always in the best interest of the student\'s career and future, not driven by commissions or partnerships.',
    icon: UserCheck,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  }
]

const CodeOfConduct = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900"
          >
            Our <span className="text-gradient">Code of Conduct</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg"
          >
            We operate with full transparency, integrity, and respect for every student. Here's our commitment to you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 flex gap-6 group"
            >
              <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 font-bold text-lg shadow-sm`}>
                {index + 1}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CodeOfConduct
