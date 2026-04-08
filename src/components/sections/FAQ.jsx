import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { question: 'What is the visa process for international students?', answer: 'The visa process involves selecting a university, preparing documents, and submitting an application.' },
  { question: 'How do I choose the right university?', answer: 'We help you choose the right university based on your goals, preferences, and qualifications.' },
  { question: 'What documents are required for a student visa?', answer: 'Documents required include a valid passport, proof of enrollment, and financial proof.' },
  { question: 'How long does it take for a visa to be approved?', answer: 'Visa approval times vary depending on the country and visa type.' },
  { question: 'Do you offer language coaching for IELTS/PTE?', answer: 'Yes, we offer expert language coaching for IELTS and PTE.' },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-12 relative overflow-hidden bg-white">
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-primary uppercase tracking-[0.2em]"
          >
            Frequently Asked Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900"
          >
            Your Questions <span className="text-gradient">Answered</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg"
          >
            We've answered some of the most common questions for you.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-3xl border transition-all duration-500 ${
                openIndex === index 
                  ? 'bg-primary/5 border-primary/20 shadow-lg shadow-primary/5' 
                  : 'bg-white border-slate-100 hover:border-primary/30 shadow-sm'
              }`}
            >
              <div
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className={`text-lg font-display font-bold transition-colors ${
                  openIndex === index ? 'text-primary' : 'text-slate-900 group-hover:text-primary'
                }`}>
                  {faq.question}
                </h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === index ? 'bg-primary text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-primary group-hover:text-white'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-4 text-slate-500 text-sm leading-relaxed"
                  >
                    <div className="pt-4 border-t border-primary/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
