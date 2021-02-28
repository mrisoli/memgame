import { createContext, FC, useContext, useReducer } from 'react'
import { GameStatus } from '../../types'
import { BoardAction, BoardActionType, BoardDispatch, BoardState } from '../../types/context'
import { checkGame, checkMatch, getInitialBoard } from '../utils'

const BoardStateContext = createContext<BoardState | undefined>(undefined)
const BoardDispatchContext = createContext<BoardDispatch | undefined>(undefined)

const boardReducer = (state: BoardState, action: BoardAction) => {
  switch(action.type) {
    case BoardActionType.CHECK_MATCH:
      return {...state, gameStatus: GameStatus.MATCHING, matched: checkMatch(state)}
    case BoardActionType.FINISH_GAME:
      return {...state, gameStatus: GameStatus.WON }
    case BoardActionType.RESET:
      return getInitialBoard(action.count)
    case BoardActionType.SELECT_CARD:
      return {...state, active: [...state.active, action.key]}
    case BoardActionType.STOP_MATCHING:
      return { ...state, active: [], gameStatus: checkGame(state.gameStatus) }
  }
}

const BoardProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(boardReducer, getInitialBoard(6))

  return (
    <BoardStateContext.Provider value={state}>
      <BoardDispatchContext.Provider value={dispatch}>
        {children}
      </BoardDispatchContext.Provider>
    </BoardStateContext.Provider>
  )
}

const useBoardState: () => BoardState = () => {
  const context = useContext(BoardStateContext)
  if (context === undefined) {
    throw new Error('useBoardState must be used within a BoardProvider')
  }
  return context
}

const useBoardDispatch: () => BoardDispatch = () => {
  const context = useContext(BoardDispatchContext)
  if (context === undefined) {
    throw new Error('useBoardDispatch must be used within a BoardProvider')
  }
  return context
}

export { BoardProvider, useBoardDispatch, useBoardState }
