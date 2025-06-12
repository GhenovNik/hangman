import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders page heading', () => {
  render(<App />)
  const heading = screen.getByText(/hangman game/i)
  expect(heading).toBeInTheDocument()
})
