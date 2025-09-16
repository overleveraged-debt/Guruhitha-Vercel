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
            className={`transition-all duration-800 flex justify-center ${
              imageVisible ? 'reveal visible' : 'reveal'
            }`}
          >
            <div className="w-3/4 md:w-4/5 lg:w-3/4">
              <img
                src="/Guruhita/Founder Image.png"
                alt="Muniraj Gowda - Founder, Guruhita Properties"
                className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 h-64 md:h-80 lg:h-96 w-full object-contain"
              />
            </div>
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
              Our Story
            </h3>
            <p className="mb-4 text-lg">
              Leveraging over 13 years of leadership in sales and marketing, including a key tenure as a Manager at HDFC Home Loans, founder Muniraj Gowda established Guruhitha to redefine the client experience. He witnessed firsthand the need for a truly transparent partner in an often-complex market, inspiring him to create a better way. 
            </p>
            <p className="text-lg">
              We are a modern consultancy that blends proven property expertise with efficient fintech, acting as your dedicated guide for every real estate and financing decision. Our goal is simple: to ensure your best interests are always at the forefront. We are committed to empowering you with clarity, so you can invest with absolute confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
