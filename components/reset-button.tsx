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
  }, [count, dispatch])
  return (
    <button onClick={resetBoard}>Button</button>
  )
}

export default ResetButton
