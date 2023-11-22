import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kul nettside!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Heisann hopsann!" />
        <p className="description">
          Hva skjer a, bagera?
        </p>
      </main>

    </div>
  )
}
