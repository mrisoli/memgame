import { createContext, FC, useContext, useReducer } from 'react'
import { BoardAction, BoardActionType, BoardDispatch, BoardState } from '../../types/context'
import { resetBoard } from '../utils'

const BoardStateContext = createContext<BoardState | undefined>(undefined)
const BoardDispatchContext = createContext<BoardDispatch | undefined>(undefined)

const boardReducer = (state: BoardState, action: BoardAction) => {
  switch(action.type) {
    case BoardActionType.RESET:
      return {active: [], board: resetBoard(action.count), matched: new Set<number>()}
    case BoardActionType.SELECT_CARD:
      return state
  }
}

const BoardProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(boardReducer, {
    active: [],
    board: [],
    matched: new Set<number>()
  })

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
