import React, { useState, useRef, useEffect } from 'react'
import { X, Send, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! I am your HomeTown career assistant. How can I help you today?' }
  ])
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])
  const [input, setInput] = useState('')
  const [step, setStep] = useState('chat') // chat, ask_time, ask_details, completed

  const handleSend = () => {
    if (input.trim() === '') return

    const userMessage = input.trim().toLowerCase()
    setMessages((prev) => [...prev, { role: 'user', text: input }])
    setInput('')

    // Lead capture logic
    if (step === 'ask_time') {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: 'bot', text: 'Thank you! Could you please provide your contact details so our experts can reach out to you at your preferred time?' },
          { role: 'bot', text: 'Please share your mobile number or email here, or use our quick consultation form below.', isFormLink: true }
        ])
        setStep('ask_details')
      }, 1000)
      return
    }

    if (step === 'ask_details') {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: 'bot', text: 'Perfect! We have received your details. Our team will connect with you soon. Is there anything else I can help you with?' }
        ])
        setStep('chat')
      }, 1000)
      return
    }

    // Regular bot response
    setTimeout(() => {
      let botResponse = ""
      
      if (userMessage.includes("hello") || userMessage.includes("hi") || userMessage.includes("hey")) {
        botResponse = "Hello! I am your HomeTown career assistant. How can I help you today?"
      } else if (userMessage.includes("student visa") || userMessage.includes("study abroad")) {
        botResponse = "We offer comprehensive student visa services for Canada, UK, USA, Australia, and Germany. We help with university selection, applications, and visa processing. Would you like to know about a specific country?"
      } else if (userMessage.includes("work visa") || userMessage.includes("job")) {
        botResponse = "Our work visa services help professionals secure permits in top global destinations. We provide guidance on eligibility, documentation, and employer coordination. Which country are you interested in?"
      } else if (userMessage.includes("pr") || userMessage.includes("permanent residency")) {
        botResponse = "We specialize in PR pathways for Canada and Australia. We can help you calculate your points and manage your Express Entry or subclass applications. Shall I connect you with a PR expert?"
      } else if (userMessage.includes("ielts") || userMessage.includes("pte") || userMessage.includes("language")) {
        botResponse = "Yes, we provide expert coaching for IELTS and PTE with certified trainers. Our students consistently achieve high scores. Would you like to book a free demo class?"
      } else if (userMessage.includes("contact") || userMessage.includes("number") || userMessage.includes("call")) {
        botResponse = "You can reach us at +91 9996236151. I'd be happy to arrange a callback for you."
      } else if (userMessage.includes("cost") || userMessage.includes("fee") || userMessage.includes("price")) {
        botResponse = "Our consultation is free! Service fees vary based on the visa type and country. I can have an expert call you to provide a detailed quote."
      } else {
        botResponse = "That's a great question! To provide you with the most accurate information, I'd like to have one of our experts call you."
      }

      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: botResponse },
        { role: 'bot', text: 'At what time would you like our team to connect with you?' }
      ])
      setStep('ask_time')
    }, 1000)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-primary text-white shadow-lg shadow-primary/20 hover:scale-110 transition-transform duration-300 group"
      >
        <div className="relative">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/8943/8943377.png" 
            alt="AI Assistant" 
            className="w-10 h-10 object-contain drop-shadow-md brightness-0 invert"
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2"
          >
            <Sparkles className="w-5 h-5 text-amber-300 fill-amber-300" />
          </motion.div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -bottom-1 -left-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-primary shadow-sm"
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 left-6 z-50 w-80 h-[28rem] rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-4 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/8943/8943377.png" 
                    alt="AI Assistant" 
                    className="w-7 h-7 object-contain brightness-0 invert"
                  />
                </div>
                <div>
                  <p className="font-display font-bold text-sm leading-tight text-white">HomeTown AI</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] font-medium text-white/70">Online now</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform p-2 rounded-lg hover:bg-white/10">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50">
              {messages.map((msg, index) => (
                <div key={index} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`p-3 rounded-2xl max-w-[85%] text-sm shadow-sm ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-white text-slate-700 border border-slate-100'}`}>
                    {msg.text}
                  </div>
                  {msg.isFormLink && (
                    <button 
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                          setIsOpen(false);
                        }
                      }}
                      className="mt-2 text-xs font-bold text-primary hover:underline flex items-center gap-1"
                    >
                      Go to Consultation Form →
                    </button>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-slate-100 bg-white flex gap-2">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-grow bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-primary transition-all duration-300 text-slate-900"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AIChatbot
