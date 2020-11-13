import React, { FC } from 'react'
import styled from 'styled-components'
import { Rules } from '../components/Rules'

import { CTAButton } from '../components/CTAButton'

interface IndexProps {}

const Root = styled.div``

const PostRules = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 3rem;
padding-bottom: 3rem;
background-color: rgb(245, 244, 244);
border-top: 1px solid rgb(232, 232, 232);
margin-top: 3rem;
border-bottom-left-radius: 40px;
border-bottom-right-radius: 40px;
`

export const Index: FC<IndexProps> = () => {
  return (
    <Root>
      <Rules />
      <PostRules>
        <CTAButton />
      </PostRules>
    </Root>
  )
}
