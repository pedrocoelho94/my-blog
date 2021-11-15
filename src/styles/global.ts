import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
 ${({ theme }) => css`
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   html {
     font-size: 62.5%;
     scroll-behavior: smooth;
   }
   body {
     font-size: 1.6rem;
     font-family: ${theme.font.family.default};
     color: ${theme.colors.darkText};
     background: ${theme.colors.lightGray};
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
     font-family: ${theme.font.family.default};
     margin: ${theme.spacings.large} 0;
     font-weight: 800;
     color: ${theme.colors.primary};
   }

   /* p {
     margin: ${theme.spacings.medium} 0;
   }

   ul,
   ol {
     margin: ${theme.spacings.medium};
     padding: ${theme.spacings.medium};
   }

   a {
     color: ${theme.colors.secondary};
   }

   .table{
     width: 100%
     overflow-x: auto;
   } */
 `}
`
