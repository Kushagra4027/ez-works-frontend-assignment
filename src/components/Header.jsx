import React from 'react'

export default function Header(){
  return (
    <header className='bg-white border-b'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold'>EZ</div>
          <div className='header-logo text-lg'>EZ Works</div>
        </div>
        <nav className='hidden md:flex gap-6 text-sm text-slate-600'>
          <a href='#' className='hover:text-slate-900'>Home</a>
          <a href='#contact' className='hover:text-slate-900'>Contact</a>
        </nav>
        <div className='md:hidden'>☰</div>
      </div>
    </header>
  )
}
