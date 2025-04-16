import React from 'react'
import Header from './components/Header'
import MainSection from './components/MainSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import ConsultationForm from './components/ConsultationForm'
import NicheCategory from './components/NicheCategory'
import Achivements from './components/Achivements'
import ClientTestimonials from './components/ClientTestimonials.jsx'
const App = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <AboutSection />
      <ServicesSection />
      <NicheCategory />
      <Achivements />
      <ClientTestimonials />

      <ConsultationForm />
      <Footer />
    </div>
  )
}

export default App