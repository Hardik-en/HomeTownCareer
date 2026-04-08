import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Clock, User } from 'lucide-react'

const posts = [
  { title: 'Top 5 Countries for International Students in 2026', date: 'April 10, 2026', author: 'Hardik', image: 'https://images.unsplash.com/photo-1523050335392-93851179ae22?q=80&w=800&auto=format&fit=crop', category: 'Study Abroad' },
  { title: 'How to Prepare for Your Student Visa Interview', date: 'April 5, 2026', author: 'Jane Smith', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop', category: 'Visa Tips' },
  { title: 'The Ultimate Guide to PR in Canada', date: 'March 28, 2026', author: 'Alice Johnson', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop', category: 'PR Services' },
]

const Blog = () => {
  return (
    <section id="blog" className="py-12 relative overflow-hidden bg-white">
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-primary uppercase tracking-[0.2em]"
            >
              Latest Insights
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-900"
            >
              From Our <span className="text-gradient">Blog</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg"
            >
              Stay updated with the latest trends and tips in global education and career consultancy.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="btn-outline flex items-center gap-2"
          >
            View All Posts
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-100 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 p-2 rounded-lg bg-primary text-white text-[10px] font-bold uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <Clock className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-6 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <button className="text-sm font-bold text-primary flex items-center gap-2 hover:translate-x-1 transition-transform">
                  Read More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
