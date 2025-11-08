import React from 'react'

export default function Hero(){
  return (
    <section className='py-16 bg-gradient-to-b from-white to-slate-50'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div>
            <h1 className='text-3xl md:text-4xl font-extrabold leading-tight'>
              Build fast, reliable digital experiences with EZ Labs
            </h1>
            <p className='mt-4 text-slate-600'>We help companies accelerate delivery using automation and modern frontend practices. Build a clean homepage and submit the contact form to complete the assignment.</p>
            <div className='mt-6 flex gap-3'>
              <a href='#contact' className='px-5 py-3 bg-teal-500 text-white rounded-lg shadow hover:opacity-90'>Get in touch</a>
              <a href='#' className='px-5 py-3 border rounded-lg text-slate-700'>Learn more</a>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='w-full max-w-sm card'>
              <h3 className='text-lg font-semibold'>Why EZ Works</h3>
              <p className='mt-2 text-sm text-slate-600'>AI-driven model, fast turnaround and people-first culture. This is a sample card to reflect the design structure.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
