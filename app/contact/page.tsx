'use client'
import React, { useState, useEffect } from 'react'
import './index.scss'
import { sendContactForm } from '../lib/api'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formSuccess, setFormSuccess] = useState<boolean>(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState<string>("")

  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = async(e: any) => {
    e.preventDefault()
    
    const data = new FormData()
    
    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    })
    
    try {
      await sendContactForm(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='Contact'>
      <h1>CONTACT</h1>
      <div className='divider'></div>
      <form method="POST" action="" onSubmit={submitForm}>
          <div>
            <label>Name</label>
            <input type="text" name="name" onChange={handleInput} value={formData.name} />
          </div>

          <div>
            <label>Email</label>
            <input type="text" name="email" onChange={handleInput} value={formData.email} />
          </div>

          <div>
            <label>Message</label>
            <textarea name="message" onChange={handleInput} value={formData.message}></textarea>

          </div>
          <button type="submit">Send message</button>
        </form>
    </div>
  )
}

export default Contact
