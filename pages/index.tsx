import Head from 'next/head'
import { useRouter } from 'next/router'

import Board from '../components/board'
import ResetButton from '../components/reset-button'
import Status from '../components/status'
import { useBoardDispatch } from '../lib/context'
import { BoardActionType } from '../types/context'

export const Home = (): JSX.Element => {
  const dispatch = useBoardDispatch()
  const router = useRouter()
  const { count } = router.query

  dispatch({ type: BoardActionType.RESET, count: parseInt(count as string) || 6})

  return (
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
}

export default Home
