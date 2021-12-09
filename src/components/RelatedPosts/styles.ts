import styled, { css } from 'styled-components'

import * as HeadingBarStyles from 'components/HeadingBar/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${HeadingBarStyles.Wrapper} {
      margin-top: ${theme.spacings.huge};
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`

export const Content = styled.div``
