import React from 'react'
import { LoginWithTelegram } from './LoginWithTelegram'

export const TopBar = () => (
  <div
    style={{
      height: '40px',
      display: 'flex',
      backgroundColor: '#191d25' /* '#20232a' */
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '960px',
        margin: 'auto'
      }}
    >
      <div style={{ display: 'flex' }}>
        <a
          href='https://t.me/react_ru'
          style={{ color: '#ffffff', textDecoration: 'none' }}
        >
          @<b>react_ru</b>
        </a>
        <div style={{ marginLeft: '1rem' }}>
          {/*****************************/}
        </div>
      </div>
      {/* <LoginWithTelegram
        width={175}
        height={28}
        login={'react_ru_bot'} // TODO: Take from .env file
        origin={'http://реакт-чат.рф:3003'} // TODO: Take from .env file
      /> */}
    </div>
  </div>
)
