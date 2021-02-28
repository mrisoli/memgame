import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Memory game</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div>Board</div>
      <div>Status</div>
      <div>Reset</div>
    </main>

    <style jsx>{`
    `}</style>
  </div>
)

export default Home
