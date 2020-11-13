import React, { FC } from 'react'
import styled from 'styled-components'

interface TopBarProps {}

const Root = styled.div`
  display: flex;
  height: var(--top-bar-height);
  background-color: var(--top-bar-color);
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: var(--container-width);
  margin: auto;

  @media (max-width: 960px) {
    width: auto;
  }
`

const Link = styled.a`
  color: var(--white-color);
  text-decoration: none;
`

export const TopBar: FC<TopBarProps> = () => {
  return (
    <Root>
      <Container>
        <Link href="https://t.me/react_ru">@<b>react_ru</b></Link>
      </Container>
    </Root>
  )
}
