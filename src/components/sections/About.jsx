import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, History, Target, Compass } from 'lucide-react'

const About = () => {
  const values = [
    { title: 'Our Journey', content: 'Since 2017, Hometown Careers has been empowering students to achieve their global education dreams with expert services.', icon: History },
    { title: 'Mission', content: 'To provide seamless visa and application support, ensuring every student finds their ideal global educational path.', icon: Target },
    { title: 'Vision', content: 'To become the leading global brand in overseas education and career consultancy, building trust and credibility.', icon: Compass },
  ]

  const benefits = [
    'Expert Language Coaching',
    'Seamless Visa Application',
    'Personalized Career Counseling',
    'Comprehensive Financial Planning',
    'Expert Document Preparation',
    'Global University Network',
  ]

  return (
    <section id="about" className="py-16 relative overflow-hidden bg-slate-50">
      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Content - Storytelling */}
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-primary uppercase tracking-[0.2em]"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight"
            >
              Your Journey to <br />
              <span className="text-gradient">Success Starts</span> Here
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg leading-relaxed max-w-xl"
            >
              Since 2017, Hometown Careers has been a trusted partner in global education and career consultancy. We excel in turning complex visa processes into seamless journeys.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 border border-primary/20 group-hover:border-primary/50">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="text-slate-600 text-sm font-medium group-hover:text-slate-900 transition-colors">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-[60px]" />
            <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
              <div>
                <p className="text-3xl font-display font-bold text-slate-900 mb-1 tracking-tight">7+ Years</p>
                <p className="text-xs uppercase tracking-widest text-primary font-bold">Of Excellence</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-slate-200" />
              <p className="text-slate-400 text-sm italic max-w-sm">
                "Our journey began with a simple mission: to make global education accessible to every aspiring student."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Visual/Cards */}
        <div className="grid gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: -10 }}
                className="p-8 rounded-3xl glass-card group flex gap-6 items-start border border-slate-100 hover:border-primary/30 transition-all duration-500 bg-white shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 border border-primary/20 group-hover:border-primary/50">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {value.content}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default About
