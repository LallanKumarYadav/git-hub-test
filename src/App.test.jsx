import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders the main heading and helper text', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /get started/i })).toBeInTheDocument()
    expect(screen.getByText(/Edit/i)).toBeInTheDocument()
    expect(screen.getByText(/src\/App\.jsx/i)).toBeInTheDocument()
  })

  it('starts with count 0 and increments when clicking the counter button', async () => {
    const user = userEvent.setup()
    render(<App />)

    const counterButton = screen.getByRole('button', { name: /count is 0/i })
    expect(counterButton).toBeInTheDocument()

    await user.click(counterButton)
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })

  it('renders key documentation and community links', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /explore vite/i })).toHaveAttribute('href', 'https://vite.dev/')
    expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute('href', 'https://react.dev/')
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', 'https://github.com/vitejs/vite')
  })
})
