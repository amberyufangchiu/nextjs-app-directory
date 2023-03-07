import '../styles/globals.css'
import style from '../styles/index.module.scss'
import Nav from '@/app/components/Nav'
import Header from '@/app/components/Header'

export default function Home() {
  return (
    <div className={style.main}>
      <>
        <Nav />
        <Header />
      </>
    </div>
  )
}
