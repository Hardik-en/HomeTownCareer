import React from 'react'
import { Link } from 'react-router-dom'
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const sections = {
    services: [
      { name: 'Student Visa', href: '/#services' },
      { name: 'Work Visa', href: '/#services' },
      { name: 'Tourist Visa', href: '/#services' },
      { name: 'PR Services', href: '/#services' },
      { name: 'Language Coaching', href: '/#services' },
    ],
    countries: [
      { name: 'Canada', href: '/destinations/canada' },
      { name: 'Australia', href: '/destinations/australia' },
      { name: 'UK', href: '/destinations/uk' },
      { name: 'USA', href: '/destinations/usa' },
      { name: 'Germany', href: '/destinations/germany' },
    ],
    links: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/#about' },
      { name: 'Process', href: '/#process' },
      { name: 'Contact', href: '/#contact' },
    ]
  }

  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg border border-slate-100 overflow-hidden p-2">
                <img 
                  src="/logo.png" 
                  alt="HomeTown" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{ display: 'none' }} className="w-full h-full items-center justify-center bg-primary text-white font-bold text-lg">
                  HT
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold tracking-tight text-slate-900 leading-none">
                  HOMETOWN
                </span>
                <span className="text-sm font-medium text-primary tracking-widest uppercase mt-1">
                  CAREERS
                </span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Your global career starts here. Empowering students and professionals since 2017 to achieve their dreams of studying and working abroad.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 lg:col-span-2 gap-8">
            <div className="space-y-8">
              <h4 className="text-slate-900 font-bold text-lg">Quick Links</h4>
              <ul className="space-y-4">
                {sections.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-slate-900 font-bold text-lg">Services</h4>
              <ul className="space-y-4">
                {sections.services.map((service) => (
                  <li key={service.name}>
                    <a href={service.href} className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-slate-900 font-bold text-lg">Contact Us</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Behind Bus Stand, Peer Wali Gali, Ladwa, Kurukshetra, Haryana
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <p className="text-slate-500 text-sm font-medium">+91 9996236151</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <p className="text-slate-500 text-sm font-medium">director@hometowncareers.co.in</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h5 className="text-slate-900 font-bold text-sm mb-4">Subscribe to Newsletter</h5>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white border border-slate-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 pr-12 shadow-sm"
                />
                <button className="absolute right-1.5 top-1.5 w-9 h-9 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 text-white">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs text-center md:text-left font-medium">
            © {currentYear} Hometown Careers. All rights reserved. Empowering Global Ambitions.
          </p>
          <div className="flex items-center gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((link) => (
              <a key={link} href="#" className="text-slate-400 hover:text-slate-900 transition-colors text-xs font-medium">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
