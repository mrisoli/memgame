import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Board from '../components/board'
import ResetButton from '../components/reset-button'
import Status from '../components/status'
import { useBoardDispatch, useBoardState } from '../lib/context'
import { BoardActionType } from '../types/context'

export const Home = (): JSX.Element => {
  const dispatch = useBoardDispatch()
  const router = useRouter()
  const { count } = router.query
  const { active, board, matched } = useBoardState()

  useEffect(() => {
    dispatch({
      type: BoardActionType.RESET,
      count: parseInt(count as string) || 6,
    })
  }, [count])

  useEffect(() => {
    if (matched.size * 2 == board.length) {
      dispatch({ type: BoardActionType.FINISH_GAME })
    } else {
      dispatch({ type: BoardActionType.STOP_MATCHING })
    }
  }, [matched.size, board.length])

  useEffect(() => {
    if (active.length == 2) {
      dispatch({ type: BoardActionType.CHECK_MATCH })
      const stopMatching = setTimeout(() => {
        dispatch({ type: BoardActionType.STOP_MATCHING })
      }, 500)
      return () => {
        clearTimeout(stopMatching)
      }
    }
  }, [active.length])

  return (
    <div className="container">
      <Head>
        <title>Memory game</title>
      </Head>

      <main>
        <Board />
        <Status />
        <ResetButton />
      </main>

      <style jsx>{`
        main {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default Home
