import React, { FC } from 'react'
import styled from 'styled-components'

import { TopBar } from '../components/TopBar'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'

interface DefaultProps {}

const Root = styled.div`
  background-color: #343a40;
`

const BeforeFooter = styled.div`
  min-height: 100vh;
`

const Content = styled.div`
  background-color: var(--white-color);
  border-radius: 40px;
  box-shadow: rgb(18, 20, 23) 0px 0px 30px;
`

export const Default: FC<DefaultProps> = ({ children }) => {
  return (
    <Root>
      <BeforeFooter>
        <TopBar />
        <Hero />
        <Content>
          {children}
        </Content>
      </BeforeFooter>
      <Footer />
    </Root>
  )
}
