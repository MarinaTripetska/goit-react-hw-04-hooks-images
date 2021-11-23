import styled from 'styled-components'

const ContainerStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
  padding: 0 15px;
`

export default function Container({ children }) {
  return <ContainerStyled>{children}</ContainerStyled>
}
