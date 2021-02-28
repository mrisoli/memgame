import { FC, useCallback, useEffect, useState } from "react"
import { useBoardDispatch, useBoardState } from "../lib/context"
import {GameStatus} from "../types"
import { BoardActionType } from "../types/context"

type CardProps = {
  boardKey: number
  value: number
}

const Card: FC<CardProps> = ({ boardKey, value }) => {
  const [revealed, setRevealed] = useState(false)
  const { active, gameStatus, matched } = useBoardState()
  const dispatch = useBoardDispatch()

  useEffect(() => {
    setRevealed(matched.has(value) || active.includes(boardKey))
  }, [active, boardKey, matched, value])

  const handleClick = useCallback(() => {
    if (gameStatus == GameStatus.IN_PROGRESS) {
      dispatch({type: BoardActionType.SELECT_CARD, key: boardKey})
    }
  }, [boardKey, gameStatus, value])

  return (
    <div onClick={handleClick} >{revealed ? value : 'hidden'}</div>
  )
}

export default Card
