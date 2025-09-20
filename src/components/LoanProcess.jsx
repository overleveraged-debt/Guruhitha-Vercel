import React from 'react'
import { FileText, CheckCircle, FolderOpen, Award, Banknote } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const LoanProcess = () => {
  const [titleRef, titleVisible] = useScrollReveal()
  const [subtitleRef, subtitleVisible] = useScrollReveal()

  const processSteps = [
    {
      icon: FileText,
      title: 'Apply',
      description: 'Submit your loan application with basic details and requirements',
      step: '01'
    },
    {
      icon: CheckCircle,
      title: 'Eligibility Check',
      description: 'We assess your eligibility and provide pre-approval status',
      step: '02'
    },
    {
      icon: FolderOpen,
      title: 'Documentation',
      description: 'Complete documentation with our expert guidance and support',
      step: '03'
    },
    {
      icon: Award,
      title: 'Approval',
      description: 'Final loan approval and sanction letter from the bank',
      step: '04'
    },
    {
      icon: Banknote,
      title: 'Disbursal',
      description: 'Loan amount disbursed directly to your account or seller',
      step: '05'
    }
  ]

  const ProcessStep = ({ step, isLast }) => {
    const [stepRef, stepVisible] = useScrollReveal()
    const IconComponent = step.icon

    return (
      <div
        ref={stepRef}
        className={`flex flex-col md:flex-row items-center transition-all duration-800 ${
          stepVisible ? 'reveal visible' : 'reveal'
        }`}
      >
        <div className="flex flex-col items-center md:items-start">
          <div className="relative">
            <div className="bg-brand-gold text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg mb-4">
              <IconComponent size={24} strokeWidth={2} />
            </div>
            <div className="absolute -top-2 -right-2 bg-brand-navy text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {step.step}
            </div>
          </div>
          <div className="text-center md:text-left max-w-xs">
            <h4 className="text-xl font-bold text-brand-navy mb-2">{step.title}</h4>
            <p className="text-brand-text text-sm leading-relaxed">{step.description}</p>
          </div>
        </div>
        
        {/* Arrow connector for desktop */}
        {!isLast && (
          <div className="hidden md:flex items-center mx-8 flex-1">
            <div className="flex-1 h-0.5 bg-brand-gold/30"></div>
            <div className="w-0 h-0 border-l-8 border-l-brand-gold/60 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        )}
        
        {/* Vertical connector for mobile */}
        {!isLast && (
          <div className="md:hidden flex flex-col items-center my-6">
            <div className="w-0.5 h-8 bg-brand-gold/30"></div>
            <div className="w-0 h-0 border-t-8 border-t-brand-gold/60 border-l-4 border-l-transparent border-r-4 border-r-transparent"></div>
          </div>
        )}
      </div>
    )
  }

  return (
    <section className="py-20 bg-brand-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-sm font-bold uppercase text-brand-gold tracking-widest mb-2 transition-all duration-800 ${
              titleVisible ? 'reveal visible' : 'reveal'
            }`}
          >
            Loan Process
          </h2>
          <h3
            ref={subtitleRef}
            className={`text-3xl md:text-4xl font-bold text-brand-navy mb-8 transition-all duration-800 ${
              subtitleVisible ? 'reveal visible' : 'reveal'
            }`}
          >
            Your Journey to Home Ownership
          </h3>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            Our streamlined 5-step process ensures a smooth and hassle-free home loan experience
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              step={step}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="bg-brand-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all inline-block shadow-lg transform hover:scale-105"
          >
            Start Your Loan Application
          </a>
        </div>
      </div>
    </section>
  )
}

export default LoanProcess
