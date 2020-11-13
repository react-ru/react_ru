import React, { FC } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import { CTAButton } from './CTAButton'

interface HeroProps {}

const Root = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #2f3950 /* #343a40 */;
`

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img``

const Counter = styled.div`
  align-self: flex-end;
  padding: 2px 8px;
  border-radius: 3px;
  color: #000000;
  background-color: var(--white-color);
  transform: translateX(-30px);
`

const TextLogo = styled.span`
  color: var(--white-color);
  font-weight: bold;
  font-size: 5rem;
`

const SubString = styled.p`
  margin-top: 1rem;
  color: var(--white-color);
  font-weight: 300;
  font-size: 1.4rem;

  @media (max-width: 960px) {
    text-align: center;
    padding: 0 1rem;
  }
`

export const Hero: FC<HeroProps> = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 960px)' })
  let firstBlock = null
  let secondBlock = null

  if (isMobile) {
    firstBlock = (
      <Block>
        <Logo width={96} height={96} src="/img/icon.png" />
        <Counter>1 014</Counter>
      </Block>
    )
    secondBlock = (
      <Block>
        <TextLogo>react_ru</TextLogo>
      </Block>
    )
  } else {
    firstBlock = (
      <Block>
        <Logo width={96} height={96} src="/img/icon.png" />
        <Counter>1 014</Counter>
        <TextLogo>react_ru</TextLogo>
      </Block>
    )
  }

  console.log(isMobile)

  return (
    <Root>
      {firstBlock}
      {secondBlock}
      <Block>
        <SubString>Независимое сообщество React-разработчиков в Telegram</SubString>
      </Block>
      <Block style={{ marginTop: '3rem' }}>
        <CTAButton />
      </Block>
    </Root>
  )
}
