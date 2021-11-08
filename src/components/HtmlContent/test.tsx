import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import HtmlContent from '.'

describe('<TextComponent />', () => {
  it('should render the heading', () => {
    renderWithTheme(<HtmlContent html={'<b>htmlText<b>'} />)

    expect(screen.getByText('htmlText')).toBeInTheDocument()
  })
})
