import React from 'react'
import SEO, { seoConfigs } from '../components/SEO'
import Header from '../components/Header'
import PageHero from '../components/PageHero'
import FinancialServices from '../components/FinancialServices'
import LoanProcess from '../components/LoanProcess'
import WhyChooseUs from '../components/WhyChooseUs'
import About from '../components/About'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingActionButtons from '../components/FloatingActionButtons'

const HomeLoansPage = () => {
  return (
    <div className="text-brand-text">
      <SEO {...seoConfigs.homeLoans} />
      <Header />
      <main>
        <PageHero page="home-loans" />
        <FinancialServices />
        <LoanProcess />
        <WhyChooseUs />
        <About />
        <Partners />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  )
}

export default HomeLoansPage
