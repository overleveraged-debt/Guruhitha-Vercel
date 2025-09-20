import React from 'react'
import { Building2, Home, FileText, MapPin, Calculator, Building, Users, ShieldCheck } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const RealEstateServices = () => {
  const [titleRef, titleVisible] = useScrollReveal()
  const [subtitleRef, subtitleVisible] = useScrollReveal()

  const services = [
    {
      icon: Building2,
      title: 'Property Buying & Selling'
    },
    {
      icon: MapPin,
      title: 'Approved Plots (BDA, BMRDA, B Khata, Nagarsabhe panchayat Khata)'
    },
    {
      icon: Home,
      title: 'Individual Building and Site'
    },
    {
      icon: FileText,
      title: 'Real Estate Legal Consultation'
    },
    {
      icon: Calculator,
      title: 'Property Loan Eligibility Consultation'
    },
    {
      icon: Building,
      title: 'Commercial & Residential Plots'
    },
    {
      icon: Users,
      title: 'Property Valuation & Consultation'
    },
    {
      icon: ShieldCheck,
      title: 'End-to-End Property Services'
    }
  ]

  const ServiceCard = ({ service }) => {
    const [cardRef, cardVisible] = useScrollReveal()
    const IconComponent = service.icon

    const handleCardClick = () => {
      // Scroll to contact section
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }

    return (
      <div
        ref={cardRef}
        className={`transition-all duration-800 h-full ${
          cardVisible ? 'reveal visible' : 'reveal'
        }`}
      >
        <div
          onClick={handleCardClick}
          className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col justify-center items-center"
          style={{ backgroundColor: '#F5F0E8' }}
        >
          <div className="text-center">
            <div className="inline-block p-3 rounded-full bg-brand-gold/10 mb-4">
              <IconComponent size={24} className="text-brand-gold" strokeWidth={2} />
            </div>
            <h4 className="text-base font-semibold text-brand-navy leading-tight">{service.title}</h4>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="real-estate-services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className={`text-sm font-bold uppercase text-brand-gold tracking-widest mb-2 transition-all duration-800 ${
              titleVisible ? 'reveal visible' : 'reveal'
            }`}
          >
            Real Estate Services
          </h2>
          <h3
            ref={subtitleRef}
            className={`text-3xl md:text-4xl font-bold text-brand-navy mb-8 transition-all duration-800 ${
              subtitleVisible ? 'reveal visible' : 'reveal'
            }`}
          >
            Our Property Services
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to explore our real estate services? Get in touch with our property experts today.
          </p>
          <a
            href="#contact"
            className="bg-brand-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all inline-block shadow-lg transform hover:scale-105"
          >
            Contact Our Property Experts
          </a>
        </div>
      </div>
    </section>
  )
}

export default RealEstateServices
