import { FC, useCallback, useEffect, useState } from 'react'
import { useBoardDispatch, useBoardState } from '../lib/context'
import { GameStatus } from '../types'
import { BoardActionType } from '../types/context'

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
    if (gameStatus == GameStatus.IN_PROGRESS && !active.includes(boardKey)) {
      dispatch({ type: BoardActionType.SELECT_CARD, key: boardKey })
    }
  }, [active, boardKey, gameStatus, value])

  return (
    <div>
      <div
        data-testid="card"
        className={`card ${revealed ? 'shown' : 'hidden'}`}
        onClick={handleClick}
      >
        {revealed ? value : ''}
      </div>
      <style jsx>{`
        .card {
          align-items: center;
          border-radius: 1em;
          display: flex;
          font-size: 1.25rem;
          justify-content: center;
          margin: 0.5em;
          min-width: 2em;
          min-height: 2em;
          padding: 1em;
          text-align: center;
        }
        .shown {
          border: 1px solid #2193b0;
          background: #2193b0;
          background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
          background: linear-gradient(to right, #6dd5ed, #2193b0);
          color: #fff;
        }
        .hidden {
          border: 1px solid #bdc3c7;
          background: #bdc3c7;
          background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);
          background: linear-gradient(to right, #2c3e50, #bdc3c7);
        }
      `}</style>
    </div>
  )
}

export default Card
