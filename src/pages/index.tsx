import type { NextPage } from 'next'
import Head from 'next/head'
import Products from '../features/product/Products'
import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inventory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-slate-800">
          <div className="max-w-screen-sm mx-auto sm:px-4 ">
              <Products />
          </div>
      </div>
    </div>
  )
}

export default IndexPage
