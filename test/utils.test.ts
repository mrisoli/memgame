import { GameStatus } from '../types/game-status'
import {
  checkGame,
  checkMatch,
  getInitialBoard,
  resetBoard,
} from '../lib/utils'

describe('utils', () => {
  describe('checkGame', () => {
    it('sets game to in progress if not won', () => {
      expect(checkGame(GameStatus.MATCHING)).toEqual(GameStatus.IN_PROGRESS)
    })

    it('doesnt change game already won', () => {
      expect(checkGame(GameStatus.WON)).toEqual(GameStatus.WON)
    })
  })

  describe('checkMatch', () => {
    const board = [0, 0, 1, 1]
    it('adds to matched set if pair matches', () => {
      const state = { ...getInitialBoard(2), board, active: [0, 1] }
      expect(checkMatch(state)).toEqual(new Set([0]))
    })

    it('does not add to matched set if pair doesnt match', () => {
      const state = { ...getInitialBoard(2), board, active: [0, 2] }
      expect(checkMatch(state)).toEqual(new Set([]))
    })
  })

  describe('getInitialBoard', () => {
    it('returns a board with initial settings', () => {
      const context = getInitialBoard(1)
      expect(context).toEqual({
        active: [],
        board: [0, 0],
        gameStatus: GameStatus.IN_PROGRESS,
        matched: new Set([]),
      })
    })
  })

  describe('resetBoard', () => {
    it('returns a board twice the size of input', () => {
      expect(resetBoard(10)).toHaveLength(20)
    })
  })
})
