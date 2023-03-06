
import '../styles/globals.css'
import style from '../styles/index.module.scss'
import Header from '@/app/components/Header'

export default function Home() {

  return (
    <div className={style.main}>
      <>
        <Header />
      </>
    </div>
  )
}
