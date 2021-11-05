import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the footer', () => {
    const { container } = renderWithTheme(
      <Footer footerHtml="<h1>Hello</h1>" />
    )

    expect(screen.getByRole('heading', { name: 'Hello' })).toBeInTheDocument()

    expect(container).toMatchInlineSnapshot(`
      .c1 {
        font-size: 2.4rem;
      }

      .c0 {
        text-align: center;
        border-top: 0.1rem solid #DDDDDD;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1"
          >
            <h1>
              Hello
            </h1>
          </div>
        </footer>
      </div>
    `)
  })
})
