import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        <Hero />
        <section className='py-12'>
          <div className='container mx-auto px-4'>
            <div className='max-w-3xl mx-auto'>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
