import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Plane, Home, BookOpen, FileText, ClipboardList, Wallet, ShieldPlus, ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react'
import Coaching from '../components/sections/Coaching'

const servicesData = {
  'student-visa': {
    title: 'Student Visa',
    description: 'Expert guidance for top universities worldwide. From application to visa approval, we cover everything.',
    icon: <GraduationCap className="w-12 h-12" />,
    color: 'bg-blue-500/20 text-blue-500',
    fullDescription: 'Our student visa service is designed to make your journey to international education seamless and stress-free. We provide end-to-end support, from selecting the right university to securing your visa.',
    benefits: [
      'University selection based on your profile',
      'SOP and LOR preparation assistance',
      'Visa interview coaching',
      'Financial documentation guidance',
      'Post-arrival support'
    ],
    process: [
      { step: 1, title: 'Profile Evaluation', description: 'We assess your academic background and career goals.' },
      { step: 2, title: 'University Selection', description: 'Shortlisting the best universities and courses for you.' },
      { step: 3, title: 'Application Submission', description: 'Preparing and submitting your applications to chosen universities.' },
      { step: 4, title: 'Offer Acceptance', description: 'Helping you choose the best offer and fulfill conditions.' },
      { step: 5, title: 'Visa Documentation', description: 'Gathering and organizing all required visa documents.' },
      { step: 6, title: 'Visa Application', description: 'Submitting your visa application and tracking its progress.' }
    ]
  },
  'work-visa': {
    title: 'Work Visa',
    description: 'Unlock global professional opportunities. We help you navigate complex work permit requirements.',
    icon: <Briefcase className="w-12 h-12" />,
    color: 'bg-emerald-500/20 text-emerald-500',
    fullDescription: 'We help professionals secure work permits in top global destinations. Our experts stay updated with the latest immigration laws to ensure your application is successful.',
    benefits: [
      'Job search support and guidance',
      'Work permit eligibility assessment',
      'Employer coordination',
      'Document attestation support',
      'Family sponsorship guidance'
    ],
    process: [
      { step: 1, title: 'Eligibility Check', description: 'Assessing your skills and experience against country requirements.' },
      { step: 2, title: 'Job Offer Assistance', description: 'Guidance on securing a valid job offer from an international employer.' },
      { step: 3, title: 'Labor Market Assessment', description: 'Navigating LMIA or equivalent processes if required.' },
      { step: 4, title: 'Visa Preparation', description: 'Compiling professional and personal documentation.' },
      { step: 5, title: 'Application Submission', description: 'Formal submission of your work visa application.' },
      { step: 6, title: 'Pre-departure Briefing', description: 'Preparing you for your professional life in a new country.' }
    ]
  },
  'tourist-visa': {
    title: 'Tourist Visa',
    description: 'Explore the world without hassle. Quick and efficient tourist visa processing for all major destinations.',
    icon: <Plane className="w-12 h-12" />,
    color: 'bg-amber-500/20 text-amber-500',
    fullDescription: 'Whether it\'s a family vacation or a solo adventure, we make your travel dreams come true with our fast and reliable tourist visa services.',
    benefits: [
      'Fast processing times',
      'High success rate',
      'Itinerary planning assistance',
      'Hotel and flight booking guidance',
      'Travel insurance support'
    ],
    process: [
      { step: 1, title: 'Destination Choice', description: 'Selecting the country you wish to visit.' },
      { step: 2, title: 'Document Checklist', description: 'Providing a clear list of required documents for your destination.' },
      { step: 3, title: 'Application Filling', description: 'Accurate completion of visa application forms.' },
      { step: 4, title: 'Appointment Booking', description: 'Scheduling your biometrics or interview if needed.' },
      { step: 5, title: 'Visa Submission', description: 'Submitting your application to the embassy or VFS.' },
      { step: 6, title: 'Visa Collection', description: 'Collecting your passport with the approved visa.' }
    ]
  },
  'permanent-residency': {
    title: 'Permanent Residency',
    description: 'Make your global move permanent. Strategic planning for PR in countries like Canada, Australia, and UK.',
    icon: <Home className="w-12 h-12" />,
    color: 'bg-purple-500/20 text-purple-500',
    fullDescription: 'Our PR services are designed for those looking to build a long-term future abroad. We provide strategic advice to maximize your points and success rate.',
    benefits: [
      'Point-based system optimization',
      'Credential evaluation support',
      'State/Provincial nomination guidance',
      'Legal documentation assistance',
      'Post-landing settlement advice'
    ],
    process: [
      { step: 1, title: 'Point Calculation', description: 'Evaluating your profile against the PR point system.' },
      { step: 2, title: 'ECA & IELTS', description: 'Guidance on educational credential assessment and language tests.' },
      { step: 3, title: 'Expression of Interest', description: 'Creating and submitting your EOI in the immigration pool.' },
      { step: 4, title: 'Invitation to Apply', description: 'Assistance once you receive an ITA from the government.' },
      { step: 5, title: 'Full Application', description: 'Submitting a complete and accurate PR application.' },
      { step: 6, title: 'COPR & Landing', description: 'Preparing for your Confirmation of PR and final move.' }
    ]
  }
}

const ServiceDetail = () => {
  const { id } = useParams()
  const service = servicesData[id]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-display font-bold text-slate-900">Service Not Found</h2>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-24">
      <div className="section-container">
        <Link to="/#services" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className={`w-20 h-20 rounded-3xl ${service.color} flex items-center justify-center shadow-lg shadow-current/10`}>
                {service.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
                {service.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                {service.fullDescription}
              </p>
            </motion.div>

            <section className="space-y-8">
              <h2 className="text-3xl font-display font-bold text-slate-900 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-primary" />
                Key Benefits
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-slate-700 font-medium">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="space-y-10">
              <h2 className="text-3xl font-display font-bold text-slate-900 flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                Step-by-Step Process
              </h2>
              <div className="space-y-6">
                {service.process.map((step, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-8 shadow-xl sticky top-32">
              <h3 className="text-2xl font-display font-bold">Ready to Start?</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Get a free consultation with our experts to understand your eligibility and start your application process for {service.title}.
              </p>
              <div className="space-y-4 pt-4">
                <button className="w-full btn-primary py-4 justify-center gap-2 group">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-xs text-white/40">No commitment required</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Test Preparation Section - Added from Screenshot-3 */}
      <Coaching />
    </div>
  )
}

export default ServiceDetail
