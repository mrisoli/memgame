import { FC, useEffect, useState } from "react"
import {useBoardState} from "../lib/context"
import { GameStatus } from "../types"

const Status: FC = () => {
  const { board, matched } = useBoardState()
  const [gameStatus, setGameStatus] = useState(GameStatus.IN_PROGRESS)

  useEffect(() => {
    setGameStatus((matched.size * 2) == board.length ? GameStatus.WON  : GameStatus.IN_PROGRESS)
  }, [board, matched])

  return (
    <div>{gameStatus}</div>
  )
}

export default Status
