import React from 'react'

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
    </div>
  </div>
)
