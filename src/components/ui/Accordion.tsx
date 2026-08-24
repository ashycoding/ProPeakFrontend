import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface AccordionItemProps {
  question: string
  answer: React.ReactNode | string
  index: number
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`rounded-2xl mb-4 overflow-hidden border transition-all duration-300 ${
      isOpen 
        ? 'border-brand-600/50 bg-white shadow-md shadow-brand-600/5' 
        : 'border-border-theme/60 bg-bg-card shadow-sm hover:border-brand-600/30'
    }`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-text-primary hover:bg-bg-page/40 transition-colors"
      >
        <div className="flex items-center gap-4 pr-4">
          <span className={`text-base sm:text-lg font-bold tracking-wider transition-colors duration-300 flex-shrink-0 ${
            isOpen ? 'text-brand-600' : 'text-text-secondary/40'
          }`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-semibold text-text-primary text-base sm:text-lg leading-snug">{question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors flex-shrink-0 ${
            isOpen 
              ? 'bg-brand-950 border-brand-950 text-white' 
              : 'bg-bg-page border-border-theme text-brand-800'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-1 text-base text-text-secondary leading-relaxed border-t border-border-theme/20 bg-bg-page/10">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface AccordionProps {
  items: Omit<AccordionItemProps, 'index'>[]
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="w-full">
      {items.map((item, idx) => (
        <AccordionItem key={idx} index={idx} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}
export default Accordion
