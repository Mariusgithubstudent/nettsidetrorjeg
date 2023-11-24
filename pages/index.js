import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kul nettside!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Heisann hoppsann!" />
        <p className="description">
          sjabalabalabalabalabaqlablabalbalbabalbalablabalbalballablabalbal.
        </p>
      </main>

    </div>
  )
}
