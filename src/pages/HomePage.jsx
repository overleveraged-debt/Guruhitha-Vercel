import React from 'react'
import SEO, { seoConfigs } from '../components/SEO'
import Header from '../components/Header'
import ChoiceSection from '../components/ChoiceSection'
import Footer from '../components/Footer'
import FloatingActionButtons from '../components/FloatingActionButtons'

const HomePage = () => {
  return (
    <div className="text-brand-text">
      <SEO {...seoConfigs.homepage} />
      <Header />
      <main>
        <ChoiceSection />
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  )
}

export default HomePage
