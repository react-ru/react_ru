import React from 'react'
import { useStyle } from '../hooks/useStyle'

export const Moderator = ({ name, nickname, avatar }) => {
  const Root = nickname ? 'a' : 'div'

  const rootStyle = useStyle({
    display: 'flex',
    color: 'initial',
    textDecoration: 'none',
    marginBottom: '2rem'
  })
  const boxStyle = useStyle({
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '1rem'
  })
  const nameStyle = useStyle({
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginTop: '0.5rem'
  })
  const avatarStyle = useStyle({
    borderRadius: '100%',
    boxShadow: '0 7px 8px -5px #0000007d',
    border: '5px solid white'
  })

  return (
    <Root href={`https://t.me/${nickname}`} style={rootStyle}>
      <img
        src={avatar}
        alt={name}
        width='120'
        height='120'
        style={avatarStyle}
      />
      <div style={boxStyle}>
        <div style={nameStyle}>{name}</div>
      </div>
    </Root>
  )
}
