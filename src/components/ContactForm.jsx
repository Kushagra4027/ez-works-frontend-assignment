import React, { useState } from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    if(!form.name || !form.email || !form.phone || !form.message) return 'Please fill all fields.'
    if(!/^\S+@\S+\.\S+$/.test(form.email)) return 'Invalid email address.'
    if(!/^\d{6,15}$/.test(form.phone)) return 'Enter a valid phone number.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')
    const err = validate()
    if(err) { setStatus(err); return }
    setLoading(true)
    try {
      const res = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if(res.ok){
        const data = await res.json()
        setStatus('Form Submitted')
        setForm({ name:'', email:'', phone:'', message:'' })
        console.log('response', data)
      } else {
        const text = await res.text()
        setStatus('Submission failed')
        console.error('submit failed', res.status, text)
      }
    } catch (err) {
      setStatus('Network error')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id='contact' className='card'>
      <h2 className='text-2xl font-semibold'>Contact Us</h2>
      <p className='mt-2 text-sm text-slate-600'>Fill the form and click submit — frontend validation + API integration implemented.</p>
      <form onSubmit={handleSubmit} className='mt-4 space-y-3'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <input name='name' value={form.name} onChange={handleChange} placeholder='Your name' className='w-full p-3 border rounded' />
          <input name='email' value={form.email} onChange={handleChange} placeholder='Email' className='w-full p-3 border rounded' />
        </div>
        <input name='phone' value={form.phone} onChange={handleChange} placeholder='Phone' className='w-full p-3 border rounded' />
        <textarea name='message' value={form.message} onChange={handleChange} placeholder='Message' rows='5' className='w-full p-3 border rounded' />
        <div className='flex items-center gap-3'>
          <button type='submit' className='px-6 py-2 bg-teal-600 text-white rounded-md hover:opacity-95' disabled={loading}>
            {loading? 'Sending...' : 'Submit'}
          </button>
          <button type='button' className='px-4 py-2 border rounded-md' onClick={() => setForm({ name:'', email:'', phone:'', message:'' })}>Reset</button>
        </div>
        {status && <div className='mt-2 text-sm text-slate-700'>{status}</div>}
      </form>
    </div>
  )
}
