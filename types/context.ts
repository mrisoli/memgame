import { GameStatus } from './game-status'

export enum BoardActionType {
  CHECK_MATCH = 'CHECK_MATCH',
  FINISH_GAME = 'FINISH_GAME',
  RESET = 'RESET',
  SELECT_CARD = 'SELECT_CARD',
  STOP_MATCHING = 'STOP_MATCHING',
}

export type BoardAction =
  | { type: BoardActionType.RESET; count?: number }
  | { type: BoardActionType.SELECT_CARD; key: number }
  | { type: BoardActionType.CHECK_MATCH }
  | { type: BoardActionType.FINISH_GAME }
  | { type: BoardActionType.STOP_MATCHING }

export type BoardDispatch = (action: BoardAction) => void

export type BoardState = {
  active: number[]
  board: number[]
  gameStatus: GameStatus
  matched: Set<number>
}
