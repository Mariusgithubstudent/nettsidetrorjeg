import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nettside</title>
        <link rel="icon" href="/mariusikon1.ico" />

      </Head>

      <main>
        <Header title="Heisann hoppsann!" />
        <p className="description">
          Jobber med saken.
        </p>
      </main>

    </div>
  )
}
