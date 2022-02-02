import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { blue, red } from 'ColorPalette'

const slideRight = keyframes`
  0% {    transform: translateX(-150%);  }
  50% {    transform: translateX(8%);  }
  65% {    transform: translateX(-4%);  }
  80% {    transform: translateX(4%);  }
  95% {    transform: translateX(-2%);  }
  100% {    transform: translateX(0%);  }
}
`
const Content = styled.p`
  padding: 40px 20px;
  font-size: 1.5em;
  font-style: italic;
  text-align: center;

  animation-name: ${slideRight};
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  visibility: visible !important;
`

export const IdleContent = styled(Content)`
  color: ${blue};
`
export const ErrorContent = styled(Content)`
  color: ${red};
`
