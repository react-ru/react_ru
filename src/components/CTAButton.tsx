import React, { FC } from 'react'
import styled from 'styled-components'

interface CTAButtonProps {}

const Root = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  border: none;
  background: linear-gradient(180deg, #3ebbf3, #349ecc);
  color: #ffffff;
  font-weight: bold;
  box-shadow: 0 10px 30px #1fb8ffad;
  transition: background 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  &:hover, &:focus {
    background: linear-gradient(180deg, #a3eeff, #89c8e6);
    box-shadow: 0 10px 30px #77d3ffad;
  }
`

export const CTAButton: FC<CTAButtonProps> = () => {
  return (
    <Root href="tg://resolve?domain=react_ru">
      Открыть в Telegram
    </Root>
  )
}
