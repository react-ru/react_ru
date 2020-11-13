import React, { FC } from 'react'
import styled from 'styled-components'

interface FooterProps {}

const Root = styled.footer`
  margin-top: 2rem;

  @media (max-width: 960px) {
    padding: 0 1rem;
  }
`

const Paragraph = styled.p`
  color: var(--white-color);
  max-width: var(--container-width);
  margin: auto;
  margin-bottom: 1rem;
`

export const Footer: FC<FooterProps> = () => {
  return (
    <Root>
      <Paragraph>
      <iframe
          src="https://money.yandex.ru/quickpay/button-widget?targets=%D0%9D%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D1%8B&default-sum=2000&button-text=13&any-card-payment-type=on&button-size=m&button-color=orange&successURL=&quickpay=small&account=410011420821055&"
          width="184"
          height="36"
          frameBorder="0"
          allowTransparency
          scrolling="no"
          title="Пожертвовать"
        />
      </Paragraph>
      <Paragraph>
        Эта страница посвящена русскоязычному сообществу react в telegram. Если
        вы хотите узнать больше про русскоговорящее сообщество о реакт
        телеграмм, то вам на эту страницу. На этой странице вы можете посетить
        чат по react в телеграм. Страница про независимый чат о react в
        telegram.
      </Paragraph>
    </Root>
  )
}
