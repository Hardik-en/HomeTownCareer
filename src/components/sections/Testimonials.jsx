import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  { name: 'Rahul Sharma', location: 'Canada', content: 'Hometown Careers made my Canada study visa process incredibly smooth. The team is professional and always ready to help. Highly recommend!', rating: 5, image: 'https://i.pravatar.cc/150?u=rahul' },
  { name: 'Priya Patel', location: 'Australia', content: 'Excellent guidance for my Australia visa. They helped me with everything from university selection to visa approval. Best in the business!', rating: 5, image: 'https://i.pravatar.cc/150?u=priya' },
  { name: 'Amit Verma', location: 'UK', content: 'I got my UK student visa within weeks, thanks to Amit and the team. Their expertise in document preparation is unmatched.', rating: 5, image: 'https://i.pravatar.cc/150?u=amit' },
  { name: 'Sneha Reddy', location: 'USA', content: 'Highly recommend Hometown Careers for USA visa. They provided great support for my F-1 visa interview. Very thankful for their help!', rating: 5, image: 'https://i.pravatar.cc/150?u=sneha' },
  { name: 'Vikram Singh', location: 'Germany', content: 'Top-notch service for Germany study visa. They helped me with my blocked account and visa application without any hassle. Great experience!', rating: 5, image: 'https://i.pravatar.cc/150?u=vikram' },
]

const Testimonials = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-slate-50">
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-primary uppercase tracking-[0.2em]"
          >
            What Our Students Say
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900"
          >
            Success Stories <br />
            <span className="text-gradient">from Around the World</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg"
          >
            Don't just take our word for it. Hear from our successful students and professionals.
          </motion.p>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl glass-card group flex flex-col h-full border border-slate-100 hover:border-primary/30 transition-all duration-500 bg-white"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full border-2 border-primary/20 shadow-sm" />
                  <div>
                    <h3 className="text-lg font-display font-bold text-slate-900">{testimonial.name}</h3>
                    <p className="text-xs text-primary font-medium">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="mt-auto">
                  <Quote className="w-8 h-8 text-primary/10 ml-auto" />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
