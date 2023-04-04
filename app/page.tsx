import Image from 'next/image'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <div className='title'>
        <h2>Hello, nihao!</h2>
        <h1>I am Yu Fang Chiu / Amber<br/>A software enginner</h1>
        <p>base in Taipei, Taiwan 📍 Open to remote work</p>
        <a href='/amber-chiu-resume.pdf'>RESUME</a>
        <div className='tech-stack'>
          <p>Tech Stack |</p>
          <Image src='/icon/html5.svg' width={40} height={40} alt='html' />
          <Image src='/icon/css3.svg' width={40} height={40} alt='css' />
          <Image src='/icon/javascript.svg' width={40} height={40} alt='javascript' />
          <Image src='/icon/react.svg' width={40} height={40} alt='react' />
          <Image src='/icon/sass.svg' width={40} height={40} alt='sass' />
        </div>
      </div>
      <div>
        <Image src='/programmer-girl.png' width={400} height={30} alt=''/>
      </div>
    </div>
  )
}

export default Home
