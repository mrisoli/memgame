import Head from 'next/head'

import Board from '../components/board'
import ResetButton from '../components/reset-button'
import Status from '../components/status'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Memory game</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Board />
      <Status />
      <ResetButton />
    </main>

    <style jsx>{`
    `}</style>
  </div>
)

export default Home
