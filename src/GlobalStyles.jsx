import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
      min-height: 100vh;
  scroll-behavior: smooth;
  
  font-family: Roboto, sans-serif;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  padding: 0;
  cursor: pointer;
}
/* !!! */
.largeImage {
  object-fit: contain;
}
ul {  
  list-style: none;
  padding: 0;
}
body,
h1,
p,
ul,
ol,
li
 {
  margin: 0;
}
input,
button
 {
  font: inherit;
}
/* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`

export default GlobalStyle
