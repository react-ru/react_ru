import React from 'react'
import { useStyle } from '../hooks/useStyle'

export const WannabeModerator = () => {
  const recruitStyle = useStyle({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.3rem',
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '0.5rem 1.5rem',
    borderRadius: '25px',
    border: 'none',
    background: 'linear-gradient(rgb(64 63 63), rgb(29 29 29))',
    color: 'rgb(234 234 234)',
    fontWeight: 'bold',
    boxShadow: 'rgb(0 0 0 / 29%) 0px 10px 30px'
  })

  return (
    <div
      style={{
        display: 'flex',
        color: '#000000'
      }}
    >
      <div>
        <p>Можно стать модератором, если есть:</p>
        <ul>
          <li>Большой онлайн в Телеграмме.</li>
          <li>
            Знания <code>react</code>-а и планы использовать его в работе.
          </li>
          <li>Понимание и принятие правил на этой странице.</li>
        </ul>
        <a href='https://t.me/ychebotaev' style={recruitStyle}>
          Записаться в модераторы
        </a>
      </div>
    </div>
  )
}
