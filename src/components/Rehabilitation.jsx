import React from 'react'
import { useStyle } from '../hooks/useStyle'

export const Rehabilitation = () => {
  const labelStyle = useStyle({
    display: 'block',
    fontWeight: 'bold'
  })
  const inputStyle = useStyle({
    border: '1px solid #b5b5b5',
    borderRadius: '4px',
    fontSize: '1rem',
    padding: '0.3rem 0.5rem',
    boxShadow: '0 3px 5px -3px #bbbbbb',
    marginTop: '0.3rem'
  })
  const reasonStyle = useStyle({
    ...inputStyle,
    minWidth: '20rem'
  })
  const submitStyle = useStyle({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.3rem',
    cursor: 'pointer',
    padding: '0.3rem 0.5rem',
    border: '1px solid #b5b5b5',
    borderRadius: '4px',
    background: 'linear-gradient(180deg, rgb(251 251 251), rgb(224 224 224))',
    color: 'rgb(45 45 45)',
    fontWeight: 'bold',
    boxShadow: 'rgb(187, 187, 187) 0px 3px 5px -3px'
  })

  return (
    <section>
      <h2>Реабилитация в сообществе</h2>
      <p>
        Если вас забанили в сообществе и вы считаете бан несправедливым,
        заполните форму реабилитации:
      </p>
      <form>
        <div>
          <label style={labelStyle}>Ваш ID в Телеграмме:</label>
          <input
            type='text'
            name='name'
            placeholder='@ychebotaev'
            style={inputStyle}
          />
        </div>
        <div style={{ marginTop: '0.7rem' }}>
          <label style={labelStyle}>Опишите, что произошло:</label>
          <textarea name='reason' rows={3} style={reasonStyle}></textarea>
        </div>
        <div style={{ marginTop: '0.7rem' }}>
          <button type='submit' style={submitStyle}>
            Отправить
          </button>
        </div>
      </form>
    </section>
  )
}
