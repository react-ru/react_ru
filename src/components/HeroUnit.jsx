import React from 'react'
import { PrimaryCTA } from './PrimaryCTA'

export const HeroUnit = () => (
  <div
    style={{
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2f3950' /* '#343a40' */,
      paddingTop: '5rem',
      paddingBottom: '5rem'
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img
        width='96'
        height='96'
        src='http://реакт-чат.рф/img/icon.png'
        alt='react_ru logo'
      />
      <div
        style={{
          transform: 'translateX(-30px)',
          alignSelf: 'flex-end',
          backgroundColor: '#ffffff',
          borderRadius: '3px',
          padding: '2px 8px',
          color: '#000000'
        }}
      >
        972
      </div>
      <span style={{ fontSize: '5rem', color: '#ffffff', fontWeight: 'bold' }}>
        react_ru
      </span>
    </div>
    <div
      style={{
        fontSize: '1.4rem',
        fontWeight: '300',
        color: '#ffffff',
        marginTop: '1rem'
      }}
    >
      Независимое сообщество React-разработчиков в Telegram
    </div>
    <div style={{ marginTop: '3rem' }}>
      <PrimaryCTA />
    </div>
  </div>
)
