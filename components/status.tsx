import { FC } from "react"
import {useBoardState} from "../lib/context"
import { GameStatus } from "../types"

const Status: FC = () => {
  const { gameStatus } = useBoardState()

  return (
    <div className={`status ${gameStatus == GameStatus.WON ? 'won' : 'active'}`}>
      <div>{gameStatus == GameStatus.WON ? 'YOU WIN!' : 'IN PROGRESS'}</div>
        <style jsx>{`
          .status {
            align-items: center;
            border-radius: 2em;
            color: #FFF;
            display: flex;
            flex-direction: column;
            margin: 1em;
            min-width: 10em;
            min-height: 6em;
            justify-content: center;
          }
          .won {
            background: #159957;
            background: -webkit-linear-gradient(to left, #155799, #159957);
            background: linear-gradient(to left, #155799, #159957);
          }
          .active {
            background: #642B73;
            background: -webkit-linear-gradient(to left, #C6426E, #642B73);
            background: linear-gradient(to left, #C6426E, #642B73);
          }
          `}</style>
    </div>
  )
}

export default Status
