import styled from 'styled-components'
import { blue } from 'ColorPalette'

export const Title = styled.h1`
  text-align: center;
  color: ${blue};
`
export const GridList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;

  margin: 0 auto;
`
