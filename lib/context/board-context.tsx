import { createContext, FC, useReducer } from 'react'

type Action = {type: string}
type Dispatch = (action: Action) => void
type State = {board: number[]}

const BoardStateContext = createContext<State | undefined>(undefined)
const BoardDispatchContext = createContext<Dispatch | undefined>(undefined)

const boardReducer = (state: State, action: Action) => {
  switch(action.type) {
    default:
      return state
  }
}

const BoardProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(boardReducer, undefined)

  return (
    <BoardStateContext.Provider value={state}>
      <BoardDispatchContext.Provider value={dispatch}>
        {children}
      </BoardDispatchContext.Provider>
    </BoardStateContext.Provider>
  )
}
export {BoardProvider}
