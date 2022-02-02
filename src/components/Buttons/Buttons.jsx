import styled from 'styled-components'

import { white, violaceous, violaceousDark } from 'ColorPalette'

const Button = styled.button`
  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  color: ${white};
  background-color: ${violaceous};
  border: 0;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${violaceousDark};
  }
`

export const SearchFormButton = styled(Button)`
  display: inline-block;
  min-width: 180px;
  height: 48px;
  opacity: 0.6;
  border-radius: 3px;
  outline: none;

  &:hover,
  &:focus {
    opacity: 1;
  }
`
export const LoadMoreButton = styled(Button)`
  display: block;
  font-size: 20px;
  margin: 50px auto;
  min-width: 180px;
  padding: 10px;
  border-radius: 3px;
`
export const CloseButton = styled(Button)`
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 35px;
  height: 35px;

  border-radius: 50%;
  text-align: center;
  line-height: 35px;
  opacity: 0.4;

  &:hover,
  &:focus {
    opacity: 1;
  }
`
