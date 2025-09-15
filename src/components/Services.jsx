import React from 'react'
import { Building2, Landmark } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const Services = () => {
  const [titleRef, titleVisible] = useScrollReveal()
  const [subtitleRef, subtitleVisible] = useScrollReveal()

  const services = [
    {
      icon: Building2,
      title: "Real Estate Services",
      description: "Navigate the Bangalore property market with our expert guidance. We assist with every step of the process.",
      iconBg: "bg-brand-gold/10",
      iconColor: "#C89B3F",
      listColor: "text-brand-gold",
      items: [
        "Property Buying & Selling",
        "Approved Plots (BDA, BMRDA, B Khata, Nagarsabhe panchayat Khata)",
        "Individual building and Site",
        "Real Estate Legal consultation",
        "Property loan eligibility consultation",
        "Commercial & Residential Plots",
        "Property Valuation & Consultation"
      ]
    },
    {
      icon: Landmark,
      title: "Financial Services",
      description: "We simplify the loan process, ensuring you get the best terms for all your financial needs.",
      iconBg: "bg-brand-navy/10",
      iconColor: "#1A2E44",
      listColor: "text-brand-navy",
      items: [
        "Home Loans",
        "Construction Loan",
        "Purchase + construction Loan",
        "House/plot purchase loan",
        "Renovation loan",
        "Loan Against Property",
        "Balance Transfers",
        "Personalized Financial Advisory"
      ]
    }
  ]

  const ServiceCard = ({ service, index }) => {
    const [cardRef, cardVisible] = useScrollReveal()
    const IconComponent = service.icon

    return (
      <div
        ref={cardRef}
        className={`bg-white p-8 rounded-lg shadow-lg text-left transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl ${
          cardVisible ? 'reveal visible' : 'reveal'
        }`}
      >
        <div className="flex items-center mb-4">
          <div className={`${service.iconBg} p-3 rounded-full mr-4`}>
            <IconComponent size={28} stroke={service.iconColor} strokeWidth={2} />
          </div>
          <h4 className="text-2xl font-bold text-brand-navy">{service.title}</h4>
        </div>
        <p className="mb-4">{service.description}</p>
        <ul className={`space-y-2 list-inside list-disc ${service.listColor}`}>
          {service.items.map((item, itemIndex) => (
            <li key={itemIndex}>
              <span className="text-brand-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <section id="services" className="py-20 bg-brand-beige">
      <div className="container mx-auto px-6 text-center">
        <h2
          ref={titleRef}
          className={`text-sm font-bold uppercase text-brand-gold tracking-widest mb-2 transition-all duration-800 ${
            titleVisible ? 'reveal visible' : 'reveal'
          }`}
        >
          Our Services
        </h2>
        <h3
          ref={subtitleRef}
          className={`text-3xl md:text-4xl font-bold text-brand-navy mb-12 transition-all duration-800 ${
            subtitleVisible ? 'reveal visible' : 'reveal'
          }`}
        >
          Comprehensive Real Estate & Financial Solutions
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
