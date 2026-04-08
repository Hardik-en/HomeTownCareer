import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, ShieldCheck, Globe } from 'lucide-react'

const LeadGen = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', country: '', visaType: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="py-12 relative overflow-hidden bg-white">
      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Content - Lead Gen Story */}
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-primary uppercase tracking-[0.2em]"
            >
              Get Started Today
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight"
            >
              Ready to <br />
              <span className="text-gradient">Start Your Global Journey?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg leading-relaxed max-w-xl"
            >
              Hometown Careers is here to help you achieve your global dreams. Fill out the form and get a free consultation today!
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 group flex flex-col items-center text-center hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-primary/20 group-hover:border-primary/50">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                Free Consultation
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Expert advice to help you plan your application strategy.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 group flex flex-col items-center text-center hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-primary/20 group-hover:border-primary/50">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                Global Network
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Connect with leading global institutions through our extensive network.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content - Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12" />
          
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">Consultation Form</h3>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-4">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 text-slate-900 placeholder:text-slate-300"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-4">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 text-slate-900 placeholder:text-slate-300"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-4">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 text-slate-900 placeholder:text-slate-300"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-4">Destination</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 text-slate-900 appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>Select Country</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Denmark">Denmark</option>
                    <option value="New Zealand">New Zealand</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-4">Service Type</label>
                  <select
                    name="visaType"
                    value={formData.visaType}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 text-slate-900 appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>Select Visa Type</option>
                    <option value="Student Visa">Student Visa</option>
                    <option value="Work Visa">Work Visa</option>
                    <option value="Tourist Visa">Tourist Visa</option>
                    <option value="Permanent Residency">Permanent Residency</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn-primary w-full justify-center flex items-center gap-2 group text-lg py-5 mt-4"
            >
              Get Free Consultation
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
              🔒 Your data is safe with us
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default LeadGen
