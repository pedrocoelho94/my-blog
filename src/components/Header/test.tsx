import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import Header from '.'
import props from './mock'

describe('<Header />', () => {
  it('should render an image, a heading and text', () => {
    renderWithTheme(<Header {...props} showText={undefined} />) // showText pega o valor padrão

    expect(screen.getByRole('img', { name: /pedro coelho/i })).toHaveAttribute(
      'src',
      props.logo
    )

    expect(
      screen.getByRole('heading', { name: props.blogName })
    ).toBeInTheDocument()

    expect(screen.getByText(props.blogDescription)).toBeInTheDocument()
  })

  it('should render image only', () => {
    renderWithTheme(<Header {...props} showText={false} />)

    expect(
      screen.queryByRole('heading', { name: props.blogName })
    ).not.toBeInTheDocument()

    expect(screen.queryByText(props.blogDescription)).not.toBeInTheDocument()

    expect(screen.getByRole('img', { name: /pedro coelho/i })).toHaveAttribute(
      'src',
      props.logo
    )
  })
})
