import React from 'react'
import { screen, RenderOptions, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '../testUtils'
import { Home } from '../../pages/index'
import { BoardProvider } from '../../lib/context'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const renderWithContext = (options: RenderOptions) =>
  render(
    <BoardProvider>
      <Home />
    </BoardProvider>,
    options
  )

describe('Home page', () => {
  const randomBackup = global.Math.random
  beforeAll(() => {
    global.Math.random = () => 1
  })

  afterAll(() => {
    global.Math.random = randomBackup
  })

  describe('with default values', () => {
    beforeEach(() => {
      useRouter.mockReturnValue({ query: {} })
    })

    afterEach(() => {
      useRouter.mockClear()
    })

    it('matches snapshot', () => {
      const { asFragment } = renderWithContext({})
      expect(asFragment()).toMatchSnapshot()
    })

    it('renders a number of cards equal to count', () => {
      renderWithContext({})
      const cards = screen.getAllByTestId('card')
      expect(cards).toHaveLength(12)
    })

    it('renders a game in progress', () => {
      const { getByText } = renderWithContext({})
      expect(getByText('IN PROGRESS')).toBeTruthy()
    })
  })

  describe('with query parameters', () => {
    beforeEach(() => {
      useRouter.mockReturnValue({ query: { count: '2' } })
    })

    afterEach(() => {
      useRouter.mockClear()
    })

    it('renders a game in progress', () => {
      const { getByText } = renderWithContext({})
      expect(getByText('IN PROGRESS')).toBeTruthy()
    })

    it('renders a number of cards equal to count', () => {
      renderWithContext({})
      const cards = screen.getAllByTestId('card')
      expect(cards).toHaveLength(4)
    })

    it('shows card after click', () => {
      renderWithContext({})
      const cards = screen.getAllByTestId('card')
      userEvent.click(cards[0])
      expect(screen.getByText('0')).toBeTruthy()
    })

    it('wins game after all cards found', () => {
      renderWithContext({})
      const cards = screen.getAllByTestId('card')
      userEvent.click(cards[0])
      userEvent.click(cards[2])
      userEvent.click(cards[1])
      userEvent.click(cards[3])
      expect(screen.getByText('YOU WIN!')).toBeTruthy()
    })

    it('closes cards after non matching pair', async () => {
      renderWithContext({})
      const cards = screen.getAllByTestId('card')
      userEvent.click(cards[0])
      userEvent.click(cards[1])
      await waitFor(() => expect(screen.queryByText('0')).toBeFalsy())
    })

    it('resets board on reset click', () => {
      renderWithContext({})
      const cards = screen.getAllByTestId('card')
      const resetButton = screen.getByText('Reset')
      userEvent.click(cards[0])
      userEvent.click(resetButton)
      expect(screen.queryByText('0')).toBeFalsy()
    })
  })
})
