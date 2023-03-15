import React from 'react'
import './index.scss'
import Image from 'next/image'

const About = () => {
  return (
    <div className='about'>
      <div className='green'></div>
      <div className='image'>
        <Image width={500} height={500} src='/about.png' alt='me' />
      </div>
      <div className='introduce'>
        <h1>ABOUT</h1>
        <div className='divider'></div>
        <p>
          Hey, my name is Yu Fang Chiu, but people call me Amber.
          <br /> I am an innovative and fast-learning software engineer from
          Taiwan. I am also passionate about travel, hip-hop music and I am
          always curious to learn more when it comes to new technologies.
        </p>
        <p></p>
        <a href='/amber-chiu-resume.pdf'>RESUME</a>
      </div>
    </div>
  )
}

export default About
