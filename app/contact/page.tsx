'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { sendContactForm } from '../lib/api'
import './index.scss'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [formSuccess, setFormSuccess] = useState<boolean>(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState<string>('')

  const handleInput = (e: any) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }))
  }

  const submitForm = async (e: any) => {
    e.preventDefault()

    const data = new FormData()

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value)
    })

    try {
      await sendContactForm(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='contact'>
      <h1>CONTACT</h1>
      <div className='divider'></div>
      <div className='inner'>
        <div className='mail'>
          <Image src='/icon/email.svg' width={50} height={50} alt='email' />
          <p>amber.yufangchiu@gmail.com</p>
        </div>
        <div className='social-media'>
          <Link href='https://github.com/amberyufangchiu'>
            <Image src='/icon/github.svg' width={50} height={50} alt='github' />
          </Link>
          <Link href='https://www.linkedin.com/in/amber-yufang-chiu/'>
            <Image
              src='/icon/linkedin.svg'
              width={50}
              height={50}
              alt='linkedin'
            />
          </Link>
          <Link href='https://medium.com/@amber.yufangchiu'>
            <Image src='/icon/medium.svg' width={50} height={50} alt='medium' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
