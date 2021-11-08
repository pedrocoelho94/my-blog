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
        font-size: 1.6rem;
        line-height: 1.4;
      }

      .c1 p {
        margin: 4.0rem 0;
      }

      .c1 a,
      .c1 a:visited,
      .c1 a:link {
        color: #dc143c;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
      }

      .c1 a:hover {
        -webkit-filter: brightness(0.8);
        filter: brightness(0.8);
      }

      .c1 pre {
        background: #000000;
        padding: 2.4rem;
        font-family: monospace;
        color: #FFFFFF;
        margin: 4.0rem 0;
        width: 100%;
        overflow-x: auto;
        font-size: 1.6rem;
      }

      .c1 hr {
        border: none;
        border-bottom: 0.1rem solid #DDDDDD;
      }

      .c1 img {
        max-width: 100%;
      }

      .c1 .image {
        background: #DDDDDD;
        line-height: 0;
        margin: 4.0rem 0;
      }

      .c1 .image figcaption {
        font-size: 1.6rem;
        padding: 0.8rem;
        text-align: center;
        line-height: 1.3;
      }

      .c1 ul,
      .c1 ol {
        margin: 4.0rem;
      }

      .c1 .table {
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
      }

      .c1 table {
        width: 100%;
        border-collapse: collapse;
      }

      .c1 table td,
      .c1 table th {
        padding: 1.6rem;
        border: 0.1rem solid #DDDDDD;
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

      @media (min-width:768px) {
        .c1 .image-style-side {
          float: right;
          max-width: 50%;
          margin: 2.4rem;
        }
      }

      @media (max-width:768px) {
        .c1 {
          font-size: 2rem;
        }
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
