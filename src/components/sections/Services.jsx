import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Plane, Home, FileText, ClipboardList, Wallet, ShieldPlus, BookOpen, MessageSquare, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'student-visa',
    title: 'Student Visa',
    description: 'Expert guidance for top universities worldwide. From application to visa approval, we cover everything.',
    icon: <GraduationCap className="w-7 h-7" />,
    color: 'bg-blue-500/20 text-blue-500',
    tags: ['Study Abroad', 'Scholarships', 'University Selection']
  },
  {
    id: 'work-visa',
    title: 'Work Visa',
    description: 'Unlock global professional opportunities. We help you navigate complex work permit requirements.',
    icon: <Briefcase className="w-7 h-7" />,
    color: 'bg-emerald-500/20 text-emerald-500',
    tags: ['Employment Permit', 'Skilled Migration', 'Job Search Support']
  },
  {
    id: 'tourist-visa',
    title: 'Tourist Visa',
    description: 'Explore the world without hassle. Quick and efficient tourist visa processing for all major destinations.',
    icon: <Plane className="w-7 h-7" />,
    color: 'bg-amber-500/20 text-amber-500',
    tags: ['Holiday Visa', 'Family Visit', 'Leisure Travel']
  },
  {
    id: 'permanent-residency',
    title: 'Permanent Residency',
    description: 'Make your global move permanent. Strategic planning for PR in countries like Canada, Australia, and UK.',
    icon: <Home className="w-7 h-7" />,
    color: 'bg-purple-500/20 text-purple-500',
    tags: ['PR Pathway', 'Point Calculation', 'Settlement Support']
  },
  {
    id: 'language-coaching',
    title: 'Language Coaching',
    description: 'Excel in language tests with our tailored coaching. Connect with leading global institutions.',
    icon: <BookOpen className="w-7 h-7" />,
    color: 'bg-rose-500/20 text-rose-500',
    tags: ['IELTS', 'PTE', 'Spoken English']
  },
  {
    id: 'application-assistance',
    title: 'Application Assistance',
    description: 'Comprehensive support for your application. We ensure your application is perfect and submitted on time.',
    icon: <FileText className="w-7 h-7" />,
    color: 'bg-cyan-500/20 text-cyan-500',
    tags: ['SOP Writing', 'LOR Guidance', 'Interview Prep']
  },
  {
    id: 'document-preparation',
    title: 'Document Preparation',
    description: 'Precision in documentation for a smooth visa transition to top universities and workplaces.',
    icon: <ClipboardList className="w-7 h-7" />,
    color: 'bg-indigo-500/20 text-indigo-500',
    tags: ['Document Review', 'Translation', 'Attestation']
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning',
    description: 'Personalized financial planning for your education and life abroad. Expert advice on funding.',
    icon: <Wallet className="w-7 h-7" />,
    color: 'bg-yellow-500/20 text-yellow-500',
    tags: ['Bank Statements', 'Education Loans', 'Budgeting']
  },
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    description: 'Comprehensive health insurance guidance for international students and travelers.',
    icon: <ShieldPlus className="w-7 h-7" />,
    color: 'bg-red-500/20 text-red-500',
    tags: ['OSHC/OVHC', 'Medical Coverage', 'Policy Selection']
  },
  {
    id: 'career-counseling',
    title: 'Career Counseling',
    description: 'Expert guidance for your career journey. We help you choose the right path for global success.',
    icon: <MessageSquare className="w-7 h-7" />,
    color: 'bg-violet-500/20 text-violet-500',
    tags: ['Career Pathing', 'Skill Gap Analysis', 'Global Insights']
  }
]

const Services = () => {
  return (
    <section id="services" className="py-12 relative overflow-hidden bg-white">
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-primary uppercase tracking-[0.2em]"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900"
          >
            Comprehensive <span className="text-gradient">Global Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg"
          >
            From language coaching to visa approvals, we provide end-to-end support for your international journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl glass-card group flex flex-col h-full border border-slate-100 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-primary text-sm font-bold group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
