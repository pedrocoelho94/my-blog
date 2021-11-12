import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import BaseTemplate, { BaseTemplateProps } from '.'
import mock from './mock'

const props: BaseTemplateProps = mock

describe('<BaseTemplate />', () => {
  it('should render base elements', () => {
    renderWithTheme(<BaseTemplate {...props} />)

    expect(
      screen.getByRole('img', { name: /pedro coelho blog/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText('Open or close menu')).toBeInTheDocument()

    expect(screen.getByText('Footer do Blog')).toBeInTheDocument()

    expect(screen.getByLabelText(/Go To Top/i)).toBeInTheDocument()
  })
})
