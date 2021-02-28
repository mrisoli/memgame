import { FC, useCallback } from "react"
import { useRouter } from "next/router"

import { BoardActionType } from "../types/context"
import { useBoardDispatch } from '../lib/context'

const ResetButton: FC = () => {
  const dispatch = useBoardDispatch()
  const router = useRouter()
  const { count } = router.query
  const resetBoard = useCallback(() => {
    dispatch({ type: BoardActionType.RESET, count: parseInt(count as string) || 6})
  }, [count])
  return (
    <div>
      <button onClick={resetBoard}>Reset</button>
      <style jsx>{`
        button {
          background: sienna;
          border: none;
          border-radius: 4em;
          color: #FFF;
          font-weight: bold;
          margin: 1em;
          padding: 1em 5em;
        }
      `}</style>
    </div>
  )
}

export default ResetButton
