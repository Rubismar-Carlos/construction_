import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '<prefix>/styles/Home.module.css'

import Layout from './layout'
import Inicio from '<prefix>/components/Inicio/Inicio'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
          <title>Portfólio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <>
        <main className={styles.main}>
          <div className={styles.main_inicio} id='inicio'>
             < Inicio />
          </div>
        </main>
      </>
    </Layout>
  )
}
