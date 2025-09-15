import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const About = () => {
  const [imageRef, imageVisible] = useScrollReveal()
  const [contentRef, contentVisible] = useScrollReveal()

  return (
    <section id="about" className="py-20 bg-brand-beige overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={imageRef}
            className={`transition-all duration-800 ${
              imageVisible ? 'reveal visible' : 'reveal'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Guruhita Properties Team"
              className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div
            ref={contentRef}
            className={`text-left transition-all duration-800 ${
              contentVisible ? 'reveal visible' : 'reveal'
            }`}
          >
            <h2 className="text-sm font-bold uppercase text-brand-gold tracking-widest mb-2">
              About Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Your Trusted Partner in Bangalore's Real Estate Journey
            </h3>
            <p className="mb-4 text-lg">
              Guruhita Properties and Fintech is a premier real estate and financial services consultancy based in the heart of Bangalore. With years of experience in the local market, we understand the nuances of property transactions and financing in India's fast-paced tech hub.
            </p>
            <p className="text-lg">
              Our mission is to provide a seamless, transparent, and trustworthy experience, whether you're buying your first home, selling a property, or seeking the best possible loan. We combine deep industry expertise with a client-first approach to make your dreams a reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
