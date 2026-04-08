import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Mail, Phone, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Content - Contact Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-primary uppercase tracking-[0.2em]"
            >
              Contact Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight"
            >
              Get in <br />
              <span className="text-gradient">Touch with Us</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg leading-relaxed max-w-xl"
            >
              Have any questions? We are here to help you every step of the way. Contact us for any queries or to book a free consultation.
            </motion.p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-1">Address</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  Behind Bus Stand, Peer Wali Gali, Ladwa, Kurukshetra, Haryana
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Phone className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-1">Phone</h3>
                <p className="text-slate-500 text-sm">+91 9996236151</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Mail className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-1">Email</h3>
                <p className="text-slate-500 text-sm">director@hometowncareers.co.in</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Clock className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-1">Office Hours</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  Mon - Sat: 9:00 AM - 5:00 PM <br />
                  Sunday: By Appointment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[450px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl group bg-white"
        >
          {/* Placeholder for Google Maps embed */}
          <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
            <MapPin className="w-24 h-24 text-primary/10 animate-pulse" />
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.330851846566!2d77.04285227589332!3d29.998634520770533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e6b66974780d5%3A0xc3f98219c0a6b72a!2sLadwa%2C%20Haryana!5e0!3m2!1sen!2sin!4v1712581234567!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
