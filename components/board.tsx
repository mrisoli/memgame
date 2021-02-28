import { FC } from 'react'
import { useBoardState } from '../lib/context'
import Card from './card'

const Board: FC = () => {
  const { board } = useBoardState()
  return (
    <div className="board">
      {board.map((card, key) => (
        <Card key={key} boardKey={key} value={card} />
      ))}
      <style jsx>{`
        .board {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
      `}</style>
    </div>
  )
}

export default Board
