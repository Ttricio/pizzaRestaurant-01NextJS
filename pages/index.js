import Head from 'next/head'
import Image from 'next/image'

import Featured from "../components/Featured"
import PizzaList from '../components/PizzaList'

import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div className={styles.wrapper}>
      
      <Head>
        <title>Pizza restaurant</title>
        <meta name="description" content="Best pizza restaurant in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Featured/>
<PizzaList/>

      

    </div>
  )
}
