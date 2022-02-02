import styled from 'styled-components'
import { white, violaceous } from 'ColorPalette'

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 64px;
  padding: 12px 24px;

  color: ${white};
  background-color: ${violaceous};

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`
export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${white};
  border-radius: 3px;
  overflow: hidden;
`

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`
