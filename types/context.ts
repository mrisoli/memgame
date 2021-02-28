export enum BoardActionType {
  RESET = 'RESET',
  SELECT_CARD = 'SELECT_CARD',
}

export type BoardAction = {type: BoardActionType.RESET, count?: number}
  | {type: BoardActionType.SELECT_CARD, card: number }
export type BoardDispatch = (action: BoardAction) => void
export type BoardState = {
  active: number[]
  board: number[]
  matched: Set<number>
}
