import { useBoardState } from "../lib/context"
import Card from "./card"

const Board = () => {
  const { board }  = useBoardState()
  return (
    <div>
      {board.map((card, key) => <Card key={key} value={card} />)}
    </div>
  )
}

export default Board
