import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Building2 } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const ChoiceSection = () => {
  const [titleRef, titleVisible] = useScrollReveal()
  const [subtitleRef, subtitleVisible] = useScrollReveal()

  const choices = [
    {
      icon: Building2,
      title: 'Explore Properties',
      description: 'Discover your dream home from our curated selection of premium properties in Bangalore',
      link: '/properties',
      iconBg: 'bg-brand-gold/10',
      iconColor: '#C89B3F',
      buttonColor: 'bg-brand-gold hover:bg-brand-gold/90'
    },
    {
      icon: Home,
      title: 'Get a Home Loan',
      description: 'Secure the best home loan deals with our expert financial advisory and seamless process',
      link: '/home-loans',
      iconBg: 'bg-brand-navy/10',
      iconColor: '#1A2E44',
      buttonColor: 'bg-brand-navy hover:bg-brand-navy/90'
    }
  ]

  const ChoiceCard = ({ choice, index }) => {
    const [cardRef, cardVisible] = useScrollReveal()
    const IconComponent = choice.icon

    return (
      <div
        ref={cardRef}
        className={`transition-all duration-800 h-full ${
          cardVisible ? 'reveal visible' : 'reveal'
        }`}
      >
        <Link to={choice.link} className="block h-full">
          <div
            className="rounded-xl p-3 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col justify-between min-h-[180px] sm:min-h-[280px] md:min-h-[360px]"
            style={{ backgroundColor: '#F5F0E8' }}
          >
            <div className="text-center">
              <div className={`${choice.iconBg} inline-block p-1.5 sm:p-3 md:p-4 rounded-full mb-2 sm:mb-4 md:mb-6`}>
                <IconComponent size={28} stroke={choice.iconColor} strokeWidth={2} className="sm:w-10 sm:h-10 md:w-12 md:h-12" />
              </div>
              <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-navy mb-1 sm:mb-3 md:mb-4">
                {choice.title}
              </h3>
              <p className="text-brand-text text-xs sm:text-sm md:text-lg mb-3 sm:mb-6 md:mb-8 leading-relaxed">
                {choice.description}
              </p>
            </div>
            <div className="text-center">
              <div className={`${choice.buttonColor} text-white px-3 sm:px-6 md:px-8 py-1.5 sm:py-3 md:py-4 rounded-lg text-xs sm:text-base md:text-lg font-semibold transition-all inline-block shadow-lg transform hover:scale-105`}>
                {choice.title}
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <section className="pt-36 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-12 md:mb-16">
          <h1
            ref={titleRef}
            className={`text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-2 sm:mb-4 md:mb-6 transition-all duration-800 ${
              titleVisible ? 'reveal visible' : 'reveal'
            }`}
          >
            What are you looking for today?
          </h1>
          <p
            ref={subtitleRef}
            className={`text-sm sm:text-lg md:text-xl lg:text-2xl text-brand-text max-w-3xl mx-auto transition-all duration-800 ${
              subtitleVisible ? 'reveal visible' : 'reveal'
            }`}
          >
            Choose your path to homeownership with Guruhitha Properties
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {choices.map((choice, index) => (
            <ChoiceCard key={index} choice={choice} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChoiceSection
