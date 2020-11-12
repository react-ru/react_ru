import React from 'react'
import { useFocusState } from '../hooks/useFocusState'

export const PrimaryCTA = () => {
  const [focus, handleMouseEnter, handleMouseLeave] = useFocusState()

  return (
    <a
      href='tg://resolve?domain=react_ru'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.3rem',
        textDecoration: 'none',
        cursor: 'pointer',
        padding: '0.5rem 1.5rem',
        borderRadius: '25px',
        border: 'none',
        // backgroundColor: focus ? '#98deff' : '#3aafe3',
        background: focus
          ? 'linear-gradient(180deg, #a3eeff, #89c8e6)'
          : 'linear-gradient(180deg, #3ebbf3, #349ecc)',
        color: '#ffffff',
        fontWeight: 'bold',
        boxShadow: `0 10px 30px ${focus ? '#77d3ffad' : '#1fb8ffad'}`,
        transition: 'background 0.1s ease-in-out, box-shadow 0.1s ease-in-out'
        // borderRadius: '20px',
        // background: focus
        //   ? 'linear-gradient(145deg, #a3eeff, #89c8e6)'
        //   : 'linear-gradient(145deg, #3ebbf3, #349ecc)',
        // boxShadow: focus
        //   ? '9px 9px 14px #15171a, -9px -9px 14px #535d66'
        //   : '4px 4px 8px #15171a, -4px -4px 8px #535d66'
      }}
    >
      Открыть в Telegram
    </a>
  )
}
