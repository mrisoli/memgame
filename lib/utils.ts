import { GameStatus } from "../types"
import { BoardState } from "../types/context"

export const checkGame: (gameStatus: GameStatus) => GameStatus =
  (gameStatus) => gameStatus == GameStatus.WON ? GameStatus.WON : GameStatus.IN_PROGRESS

export const checkMatch: (state: BoardState) => Set<number> =
  ({ active, board, matched }) => {
  const [first, second] = active.map(key => board[key])
  return first == second ? matched.add(first) : matched
}


export const getInitialBoard: (count: number) => BoardState = (count) => ({
  active: [],
  board: resetBoard(count),
  gameStatus: GameStatus.IN_PROGRESS,
  matched: new Set()
})

export const resetBoard: (count: number) => number[]  = (count) => {
  const numbers = Array.from({length: count}, (_, i) => i)
  return numbers.concat(numbers).sort(() => Math.random() - 0.5)
}
