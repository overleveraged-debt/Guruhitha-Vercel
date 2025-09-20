import React from 'react'
import SEO, { seoConfigs } from '../components/SEO'
import Header from '../components/Header'
import PageHero from '../components/PageHero'
import FeaturedProperties from '../components/FeaturedProperties'
import RealEstateServices from '../components/RealEstateServices'
import RealEstateProcess from '../components/RealEstateProcess'
import WhyChooseUs from '../components/WhyChooseUs'
import About from '../components/About'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingActionButtons from '../components/FloatingActionButtons'

const PropertiesPage = () => {
  return (
    <div className="text-brand-text">
      <SEO {...seoConfigs.properties} />
      <Header />
      <main>
        <PageHero page="properties" />
        <FeaturedProperties />
        <RealEstateServices />
        <RealEstateProcess />
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

export default PropertiesPage
