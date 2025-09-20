import React from 'react'
import SEO, { seoConfigs } from '../components/SEO'
import Header from '../components/Header'
import ChoiceSection from '../components/ChoiceSection'
import Footer from '../components/Footer'
import FloatingActionButtons from '../components/FloatingActionButtons'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col text-brand-text">
      <SEO {...seoConfigs.homepage} />
      <Header />
      <main className="flex-grow md:flex-grow-0">
        <ChoiceSection />
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  )
}

export default HomePage
