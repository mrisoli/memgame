import Card from "./card"

const Board = () => {
  const cards = [0,1,0,1]
  return (
    <div>
      {cards.map((card, key) => <Card key={key} value={card} />)}
    </div>
  )
}

export default Board
