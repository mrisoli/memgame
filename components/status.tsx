import { FC, useEffect, useState } from "react"
import {useBoardState} from "../lib/context"
import { GameStatus } from "../types"

const Status: FC = () => {
  const { board, gameStatus, matched } = useBoardState()

  return (
    <div>{gameStatus}</div>
  )
}

export default Status
