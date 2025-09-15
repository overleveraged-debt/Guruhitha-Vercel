import React from 'react'
import { MapPin, ShieldCheck, FileText } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const WhyChooseUs = () => {
  const [titleRef, titleVisible] = useScrollReveal()
  const [subtitleRef, subtitleVisible] = useScrollReveal()

  const features = [
    {
      icon: MapPin,
      title: "Bangalore Market Experts",
      description: "Deep, localized knowledge of Bangalore's dynamic real estate market trends and property values."
    },
    {
      icon: ShieldCheck,
      title: "Transparent & Trustworthy",
      description: "We prioritize clear communication and ethical practices, ensuring a seamless and honest transaction process."
    },
    {
      icon: FileText,
      title: "Hassle-Free Paperwork",
      description: "Our dedicated team handles all the complex documentation for property and loans, saving you time and effort."
    }
  ]

  const FeatureCard = ({ feature, index }) => {
    const [cardRef, cardVisible] = useScrollReveal()
    const IconComponent = feature.icon

    return (
      <div
        ref={cardRef}
        className={`text-center transition-all duration-800 ${
          cardVisible ? 'reveal visible' : 'reveal'
        }`}
      >
        <div className="bg-brand-gold/10 inline-block p-5 rounded-full mb-4">
          <IconComponent size={40} stroke="#C89B3F" strokeWidth={2} />
        </div>
        <h4 className="text-xl font-bold text-brand-navy mb-2">{feature.title}</h4>
        <p>{feature.description}</p>
      </div>
    )
  }

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2
          ref={titleRef}
          className={`text-sm font-bold uppercase text-brand-gold tracking-widest mb-2 transition-all duration-800 ${
            titleVisible ? 'reveal visible' : 'reveal'
          }`}
        >
          Why Choose Us?
        </h2>
        <h3
          ref={subtitleRef}
          className={`text-3xl md:text-4xl font-bold text-brand-navy mb-12 transition-all duration-800 ${
            subtitleVisible ? 'reveal visible' : 'reveal'
          }`}
        >
          Your Advantage with Gruhita
        </h3>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
